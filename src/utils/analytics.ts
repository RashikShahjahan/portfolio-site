import React from 'react';

/**
 * Determine user device type
 * @returns 'desktop', 'mobile', or 'tablet'
 */
export const getUserDeviceType = (): string => {
  const userAgent = navigator.userAgent;
  if (/iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent)) {
    return 'tablet';
  } else if (/Mobile|Android|iPhone|iPod/i.test(userAgent)) {
    return 'mobile';
  }
  return 'desktop';
};

/**
 * Get common analytics metadata
 */
export const getAnalyticsMetadata = () => ({
  path: window.location.pathname,
  referrer: document.referrer || '',
  user_device: getUserDeviceType(),
  timestamp: new Date().toISOString()
});

/**
 * Custom hook to track page views when a component mounts
 * @param pageName - Name of the page to track
 */
export const usePageViewTracking = (pageName: string) => {
  React.useEffect(() => {
    // Access the global trackEvent function set by AnalyticsWrapper
    const trackEvent = (window as any).ANALYTICS_PROVIDER_TRACK_EVENT;
    if (trackEvent) {
      trackEvent(`page_view_${pageName}`, getAnalyticsMetadata());
    }
  }, [pageName]);
};

/**
 * Track clicks on elements
 * @param elementName - Name of the element for tracking
 */
export const trackClick = (elementName: string) => {
  const trackEvent = (window as any).ANALYTICS_PROVIDER_TRACK_EVENT;
  if (trackEvent) {
    trackEvent(`click_${elementName}`, getAnalyticsMetadata());
  }
};

/**
 * Track custom events
 * @param eventName - Name of the event
 * @param metadata - Additional metadata
 */
export const trackEvent = (eventName: string, metadata?: Record<string, unknown>) => {
  const trackEventFn = (window as any).ANALYTICS_PROVIDER_TRACK_EVENT;
  if (trackEventFn) {
    trackEventFn(eventName, {
      ...getAnalyticsMetadata(),
      ...metadata
    });
  }
};

/**
 * Hook to track element clicks
 * @param ref - React ref to the element
 * @param elementName - Name of the element for tracking
 */
export const useClickTracking = (
  ref: React.RefObject<HTMLElement>,
  elementName: string
) => {
  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleClick = () => {
      trackClick(elementName);
    };

    element.addEventListener('click', handleClick);
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [ref, elementName]);
}; 