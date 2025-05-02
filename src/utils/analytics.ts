import { useEffect } from 'react';
import { useAnalytics } from 'rashik-analytics-provider';

/**
 * Determine user device type
 * @returns 'desktop', 'mobile', or 'tablet'
 */
const getUserDeviceType = (): string => {
  const userAgent = navigator.userAgent;
  if (/iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent)) {
    return 'tablet';
  } else if (/Mobile|Android|iPhone|iPod/i.test(userAgent)) {
    return 'mobile';
  }
  return 'desktop';
};

/**
 * Track website actions with the analytics provider
 * This is a fallback for non-React contexts
 */
export const trackEvent = (eventName: string, customData?: Record<string, any>) => {
  try {
    // For non-React contexts, use the global handler if available
    if (typeof window !== 'undefined' && (window as any).ANALYTICS_PROVIDER_TRACK_EVENT) {
      // Create the event object in the format expected by the backend
      const eventRequest = {
        service: 'portfolio', // Same as serviceName in AnalyticsProvider
        event: eventName,
        path: window.location.pathname,
        referrer: document.referrer || '',
        user_browser: navigator.userAgent,
        user_device: getUserDeviceType(),
        ...customData
      };
      
      (window as any).ANALYTICS_PROVIDER_TRACK_EVENT(eventName, eventRequest);
    } else {
      console.warn('Analytics provider not available for tracking event:', eventName);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track page views
 * @param pageName - Name of the page
 */
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { path: `/${pageName}` });
};

/**
 * Track clicks on elements
 * @param elementName - Name of the clicked element
 * @param elementData - Additional data about the element
 */
export const trackClick = (elementName: string, elementData?: Record<string, any>) => {
  trackEvent('button_click', { 
    button_id: elementName,
    ...elementData 
  });
};

/**
 * Track external link clicks
 * @param url - URL of the external link
 * @param linkText - Text content of the link
 */
export const trackExternalLinkClick = (url: string, linkText: string) => {
  trackEvent('external_link_click', { 
    link_url: url,
    link_text: linkText 
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form
 * @param formData - Additional data about the form submission
 */
export const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', { 
    form_id: formName,
    ...formData 
  });
};

/**
 * Custom hook to track page views when a component mounts
 * @param pageName - Name of the page to track
 */
export const usePageViewTracking = (pageName: string) => {
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    // Create the event object in the format expected by the backend
    const eventRequest = {
      service: 'portfolio', // Same as serviceName in AnalyticsProvider
      event: 'page_view',
      path: `/${pageName}`,
      referrer: document.referrer || '',
      user_browser: navigator.userAgent,
      user_device: getUserDeviceType()
    };
    
    // Use 'as any' to bypass TypeScript restrictions
    (trackEvent as any)('page_view', eventRequest);
  }, [pageName, trackEvent]);
};

/**
 * Hook to track element clicks
 * @param ref - React ref to the element
 * @param elementName - Name of the element for tracking
 * @param elementData - Additional data to include with the event
 */
export const useClickTracking = (
  ref: React.RefObject<HTMLElement>,
  elementName: string,
  elementData?: Record<string, any>
) => {
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleClick = () => {
      // Create the event object in the format expected by the backend
      const eventRequest = {
        service: 'portfolio', // Same as serviceName in AnalyticsProvider
        event: 'button_click',
        path: window.location.pathname,
        referrer: document.referrer || '',
        user_browser: navigator.userAgent,
        user_device: getUserDeviceType(),
        button_id: elementName,
        ...elementData
      };
      
      // Use 'as any' to bypass TypeScript restrictions
      (trackEvent as any)('button_click', eventRequest);
    };

    element.addEventListener('click', handleClick);
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [ref, elementName, elementData, trackEvent]);
};

/**
 * Add analytics tracking to window object for global access
 */
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Store trackEvent in window context for non-React components
    (window as any).__ANALYTICS_CONTEXT__ = {
      trackEvent
    };

    // Track all link clicks automatically
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const linkElement = target.closest('a');
      
      if (linkElement) {
        const href = linkElement.getAttribute('href');
        const isExternal = href && (href.startsWith('http') || href.startsWith('//'));
        
        if (isExternal) {
          trackExternalLinkClick(
            href,
            linkElement.textContent || 'Unknown link'
          );
        } else if (href && !href.startsWith('#')) {
          trackClick('internal_link', {
            link_url: href,
            link_text: linkElement.textContent || 'Unknown link'
          });
        }
      }
    });
  }
}; 