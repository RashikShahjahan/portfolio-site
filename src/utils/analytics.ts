import { useEffect } from 'react';

/**
 * Track website actions with the analytics provider
 * @param eventName - Name of the event to track
 * @param eventData - Additional data to include with the event
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  try {
    // Send event to analytics endpoint
    const endpoint = 'https://analytics.rashik.sh/api';
    const data = {
      eventName,
      eventData: {
        ...eventData,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        referrer: document.referrer || 'direct'
      }
    };

    // Use fetch API to send event data to the analytics endpoint
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      // Send the request with keepalive to ensure it completes even if the page is unloading
      keepalive: true
    }).catch(error => {
      console.error('Error sending analytics event:', error);
    });

    // Also add to window for access by other components
    const analyticsContext = (window as any).__ANALYTICS_CONTEXT__;
    if (analyticsContext) {
      analyticsContext.lastEvent = { eventName, eventData };
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track page views
 * @param pageName - Name of the page
 * @param pageData - Additional data about the page
 */
export const trackPageView = (pageName: string, pageData?: Record<string, any>) => {
  trackEvent('page_view', { page: pageName, ...pageData });
};

/**
 * Track clicks on elements
 * @param elementName - Name of the clicked element
 * @param elementData - Additional data about the element
 */
export const trackClick = (elementName: string, elementData?: Record<string, any>) => {
  trackEvent('click', { element: elementName, ...elementData });
};

/**
 * Track external link clicks
 * @param url - URL of the external link
 * @param linkText - Text content of the link
 */
export const trackExternalLinkClick = (url: string, linkText: string) => {
  trackEvent('external_link_click', { url, text: linkText });
};

/**
 * Track form submissions
 * @param formName - Name of the form
 * @param formData - Additional data about the form submission
 */
export const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', { form: formName, ...formData });
};

/**
 * Custom hook to track page views when a component mounts
 * @param pageName - Name of the page to track
 * @param pageData - Additional data about the page
 */
export const usePageViewTracking = (pageName: string, pageData?: Record<string, any>) => {
  useEffect(() => {
    trackPageView(pageName, pageData);
  }, [pageName, pageData]);
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
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleClick = () => {
      trackClick(elementName, elementData);
    };

    element.addEventListener('click', handleClick);
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [ref, elementName, elementData]);
};

/**
 * Add analytics tracking to window object for global access
 */
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    (window as any).__ANALYTICS_CONTEXT__ = {
      trackEvent,
      lastEvent: null
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
            href,
            text: linkElement.textContent || 'Unknown link'
          });
        }
      }
    });
  }
}; 