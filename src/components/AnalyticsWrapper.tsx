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
    
    // Log page load event
    trackEvent('site_initial_load', {
      path: window.location.pathname,
      referrer: document.referrer || '',
      user_device: getUserDeviceType()
    });
    
    // Track browser history changes
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(Boolean);
      const routeName = pathSegments.length > 0 ? pathSegments.join('_') : 'home';
      
      trackEvent(`route_change_to_${routeName}`, {
        path: window.location.pathname,
        referrer: document.referrer || '',
        user_device: getUserDeviceType()
      });
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