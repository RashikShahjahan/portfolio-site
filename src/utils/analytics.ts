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
export const trackEvent = (eventName: string, metadata?: Record<string, unknown>) => {
  try {
    // For non-React contexts, use the global handler if available
    if (typeof window !== 'undefined' && (window as any).ANALYTICS_PROVIDER_TRACK_EVENT) {
      (window as any).ANALYTICS_PROVIDER_TRACK_EVENT(eventName, {
        path: window.location.pathname,
        referrer: document.referrer || '',
        user_device: getUserDeviceType(),
        ...metadata
      });
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
  trackEvent(`page_view_${pageName}`);
};

/**
 * Track clicks on elements
 * @param element - The element that was clicked, or info about it
 */
export const trackClick = (element: HTMLElement | string) => {
  let eventName = 'click';
  
  if (typeof element === 'string') {
    eventName = `click_${element}`;
  } else {
    // Add element identifier to event name
    if (element.id) {
      eventName = `click_${element.id}`;
    } else if (element.className) {
      // Create a simplified class-based identifier
      const classId = element.className.split(' ')[0];
      eventName = `click_${element.tagName.toLowerCase()}_${classId}`;
    } else {
      eventName = `click_${element.tagName.toLowerCase()}`;
    }
  }
  
  trackEvent(eventName);
};

/**
 * Track external link clicks
 * @param url - URL of the external link
 */
export const trackExternalLinkClick = (url: string) => {
  // Create descriptive event name based on URL
  const urlObj = new URL(url);
  const domain = urlObj.hostname.replace('www.', '');
  
  trackEvent(`external_link_${domain}`, { url });
};

/**
 * Track form submissions
 * @param formName - Name of the form
 */
export const trackFormSubmit = (formName: string) => {
  trackEvent(`form_submit_${formName}`);
};

/**
 * Custom hook to track page views when a component mounts
 * @param pageName - Name of the page to track
 */
export const usePageViewTracking = (pageName: string) => {
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    trackEvent(`page_view_${pageName}`, {
      path: window.location.pathname,
      referrer: document.referrer || '',
      user_device: getUserDeviceType()
    });
  }, [pageName, trackEvent]);
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
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleClick = () => {
      trackEvent(`click_${elementName}`, {
        path: window.location.pathname,
        referrer: document.referrer || '',
        user_device: getUserDeviceType()
      });
    };

    element.addEventListener('click', handleClick);
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [ref, elementName, trackEvent]);
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
        
        if (isExternal && href) {
          try {
            const urlObj = new URL(href);
            const domain = urlObj.hostname.replace('www.', '');
            
            if ((window as any).ANALYTICS_PROVIDER_TRACK_EVENT) {
              (window as any).ANALYTICS_PROVIDER_TRACK_EVENT(`external_link_${domain}`, {
                path: window.location.pathname,
                referrer: document.referrer || '',
                user_device: getUserDeviceType(),
                url: href
              });
            }
          } catch (error) {
            console.error('Error tracking external link:', error);
          }
        } else if (href && !href.startsWith('#')) {
          const eventName = `internal_link_${href.replace(/\//g, '_')}`;
          
          if ((window as any).ANALYTICS_PROVIDER_TRACK_EVENT) {
            (window as any).ANALYTICS_PROVIDER_TRACK_EVENT(eventName, {
              path: window.location.pathname,
              referrer: document.referrer || '',
              user_device: getUserDeviceType(),
              url: href
            });
          }
        }
      } else {
        // Track button clicks as well
        const buttonElement = target.closest('button');
        if (buttonElement) {
          const buttonId = buttonElement.id || 'unnamed_button';
          const eventName = `button_${buttonId}`;
          
          if ((window as any).ANALYTICS_PROVIDER_TRACK_EVENT) {
            (window as any).ANALYTICS_PROVIDER_TRACK_EVENT(eventName, {
              path: window.location.pathname,
              referrer: document.referrer || '',
              user_device: getUserDeviceType(),
              button_id: buttonId
            });
          }
        }
      }
    });
  }
}; 