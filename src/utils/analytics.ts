import React from 'react';
import { useAnalytics } from '../components/AnalyticsWrapper';

/**
 * Determine user device type
 * @returns 'desktop', 'mobile', or 'tablet'
 */
export const getUserDeviceType = (): string => {
  if (typeof navigator === 'undefined') return 'unknown';
  
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
  path: typeof window !== 'undefined' ? window.location.pathname : '',
  referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
  user_device: getUserDeviceType(),
  timestamp: new Date().toISOString()
});

/**
 * Custom hook to track page views when a component mounts
 * @param pageName - Name of the page to track
 */
export const usePageViewTracking = (pageName: string) => {
  const { trackEvent } = useAnalytics();
  
  React.useEffect(() => {
    trackEvent(`page_view_${pageName}`, getAnalyticsMetadata());
  }, [pageName, trackEvent]);
};

/**
 * Custom hook to get the track event function
 * @returns trackEvent function from analytics context
 */
export const useTrackEvent = () => {
  const { trackEvent } = useAnalytics();
  return trackEvent;
};

/**
 * Utility function to track clicks - use with trackEvent from useTrackEvent hook
 * @param trackEvent - The trackEvent function from useTrackEvent hook
 * @param elementName - Name of the element for tracking
 */
export const trackClick = (
  trackEvent: (eventType: string, properties?: Record<string, unknown>) => void,
  elementName: string
) => {
  trackEvent(`click_${elementName}`, getAnalyticsMetadata());
};

/**
 * Utility function to track custom events - use with trackEvent from useTrackEvent hook
 * @param trackEvent - The trackEvent function from useTrackEvent hook
 * @param eventName - Name of the event
 * @param metadata - Additional metadata
 */
export const trackCustomEvent = (
  trackEvent: (eventType: string, properties?: Record<string, unknown>) => void,
  eventName: string,
  metadata?: Record<string, unknown>
) => {
  trackEvent(eventName, {
    ...getAnalyticsMetadata(),
    ...metadata
  });
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
  const { trackEvent } = useAnalytics();
  
  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleClick = () => {
      trackEvent(`click_${elementName}`, getAnalyticsMetadata());
    };

    element.addEventListener('click', handleClick);
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [ref, elementName, trackEvent]);
}; 