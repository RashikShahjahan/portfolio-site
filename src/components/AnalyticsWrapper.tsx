import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from 'rashik-analytics-provider';
import { getUserDeviceType } from '../utils/analytics';

interface AnalyticsWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component to initialize analytics tracking and 
 * inject analytics context into the window object
 */
const AnalyticsWrapper = ({ children }: AnalyticsWrapperProps) => {
  const { trackEvent } = useAnalytics();
  const location = useLocation();
  
  useEffect(() => {
    // Make trackEvent available globally
    if (typeof window !== 'undefined') {
      (window as any).ANALYTICS_PROVIDER_TRACK_EVENT = trackEvent;
    }
  }, [trackEvent]);

  // Track route changes using React Router's useLocation
  useEffect(() => {
    const path = location.pathname;
    const pathSegments = path.split('/').filter(Boolean);
    const routeName = pathSegments.length > 0 ? pathSegments.join('_') : 'home';
    
    trackEvent(`page_view_${routeName}`, {
      path: path,
      referrer: document.referrer || '',
      user_device: getUserDeviceType()
    });
  }, [location, trackEvent]);

  return <>{children}</>;
};

export default AnalyticsWrapper; 