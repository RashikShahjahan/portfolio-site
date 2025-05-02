import { ReactNode, useEffect } from 'react';
import { useAnalytics } from 'rashik-analytics-provider';
import { initializeAnalytics } from '../utils/analytics';

/**
 * Interface matching the Go backend's EventBase struct
 */
interface EventBase {
  service: string;
  event: string;
  path: string;
  referrer: string;
  user_browser: string;
  user_device: string;
}

/**
 * Interface matching the Go backend's EventRequest struct
 */
interface EventRequest extends EventBase {
  timestamp: string;
}

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
 * Create a standard event request object
 */
const createEventRequest = (eventType: string): EventRequest => {
  return {
    service: 'portfolio',
    event: eventType,
    path: window.location.pathname,
    referrer: document.referrer || '',
    user_browser: navigator.userAgent,
    user_device: getUserDeviceType(),
    timestamp: new Date().toISOString()
  };
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
    const pageLoadEvent = createEventRequest('site_initial_load');
    
    // Use 'as any' to bypass TypeScript restrictions
    (trackEvent as any)('site_initial_load', pageLoadEvent);
    
    // Track browser history changes
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(Boolean);
      const routeName = pathSegments.length > 0 ? pathSegments.join('_') : 'home';
      const routeChangeEvent = createEventRequest(`route_change_to_${routeName}`);
      
      // Use 'as any' to bypass TypeScript restrictions
      (trackEvent as any)(`route_change_to_${routeName}`, routeChangeEvent);
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