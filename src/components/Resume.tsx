'use client';

import { useEffect } from 'react';
import { useTrackEvent, trackCustomEvent } from '../utils/analytics';

const Resume = () => {
  const trackEvent = useTrackEvent();
  
  useEffect(() => {
    // Track resume page view
    trackCustomEvent(trackEvent, 'resume_page_view', {
      component: 'Resume'
    });
  }, [trackEvent]);

  useEffect(() => {
    // Redirect to PDF after a short delay to allow tracking
    const timer = setTimeout(() => {
      window.location.href = '/resumeRashikSh.pdf';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-grow flex items-center justify-center bg-base-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-nous-text-primary mb-4">
          Loading Resume...
        </h1>
        <p className="text-nous-text-secondary">
          You will be redirected to the PDF shortly.
        </p>
      </div>
    </div>
  );
};

export default Resume; 