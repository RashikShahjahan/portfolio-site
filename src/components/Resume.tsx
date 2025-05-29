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

const Resume = () => {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Track the resume page visit
    trackEvent('resume_page_visit', {
      path: window.location.pathname,
      referrer: document.referrer || '',
      user_device: getUserDeviceType(),
      component: 'Resume'
    });

    // Redirect to the actual PDF file
    window.location.href = '/resumeRashikSh.pdf';
  }, [trackEvent]);

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center" data-theme="nous">
      <div className="text-center">
        <div className="loading loading-spinner loading-lg text-nous-yellow"></div>
        <p className="mt-4 text-nous-yellow">Redirecting to resume...</p>
      </div>
    </div>
  );
};

export default Resume; 