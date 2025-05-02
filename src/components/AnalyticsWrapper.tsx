import { ReactNode, useEffect } from 'react';
import { initializeAnalytics } from '../utils/analytics';

interface AnalyticsWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component to initialize analytics tracking and 
 * inject analytics context into the window object
 */
const AnalyticsWrapper = ({ children }: AnalyticsWrapperProps) => {
  useEffect(() => {
    // Initialize analytics on component mount
    initializeAnalytics();
    
    // Log page load event
    const analyticsContext = (window as any).__ANALYTICS_CONTEXT__;
    if (analyticsContext && analyticsContext.trackEvent) {
      analyticsContext.trackEvent('page_load', {
        url: window.location.href,
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      });
    }
    
    // Track browser history changes
    const handleRouteChange = () => {
      const analyticsContext = (window as any).__ANALYTICS_CONTEXT__;
      if (analyticsContext && analyticsContext.trackEvent) {
        analyticsContext.trackEvent('route_change', {
          url: window.location.href,
          timestamp: new Date().toISOString()
        });
      }
    };
    
    // Listen for window popstate events
    window.addEventListener('popstate', handleRouteChange);
    
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsWrapper; 