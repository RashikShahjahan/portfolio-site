import { ReactNode, useEffect } from 'react';
import { useAnalytics } from 'rashik-analytics-provider';
import { initializeAnalytics } from '../utils/analytics';

interface AnalyticsWrapperProps {
  children: ReactNode;
}

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
 * Wrapper component to initialize analytics tracking and 
 * inject analytics context into the window object
 */
const AnalyticsWrapper = ({ children }: AnalyticsWrapperProps) => {
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    // Initialize analytics on component mount
    initializeAnalytics();
    
    // Make trackEvent available globally
    if (typeof window !== 'undefined') {
      (window as any).ANALYTICS_PROVIDER_TRACK_EVENT = trackEvent;
    }
    
    // Log page load event with the correct format
    const pageLoadEvent = {
      service: 'portfolio',
      event: 'page_load',
      path: window.location.pathname,
      referrer: document.referrer || '',
      user_browser: navigator.userAgent,
      user_device: getUserDeviceType()
    };
    
    // Use 'as any' to bypass TypeScript restrictions
    (trackEvent as any)('page_load', pageLoadEvent);
    
    // Track browser history changes
    const handleRouteChange = () => {
      const routeChangeEvent = {
        service: 'portfolio',
        event: 'route_change',
        path: window.location.pathname,
        referrer: document.referrer || '',
        user_browser: navigator.userAgent,
        user_device: getUserDeviceType()
      };
      
      // Use 'as any' to bypass TypeScript restrictions
      (trackEvent as any)('route_change', routeChangeEvent);
    };
    
    // Listen for window popstate events
    window.addEventListener('popstate', handleRouteChange);
    
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackEvent]);

  return <>{children}</>;
};

export default AnalyticsWrapper; 