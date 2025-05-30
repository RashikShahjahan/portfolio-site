'use client';

import Link from 'next/link';
import { useTrackEvent, trackClick } from '../utils/analytics';

const Header = () => {
  const trackEvent = useTrackEvent();
  
  const handleLogoClick = () => {
    trackClick(trackEvent, 'header_logo_home_navigation');
  };

  return (
    <header className="navbar px-2 lg:px-4 py-1 border-b-2 border-nous-yellow-dark bg-base-100">
      <div className="navbar-start">
        <Link 
          href="/" 
          className="text-xl font-bold terminal-heading on-light" 
          aria-label="Rashik Shahjahan Homepage" 
          data-text="Rashik Shahjahan"
          onClick={handleLogoClick}
        >
          <span className="text-nous-text-primary">Rashik Shahjahan</span>
        </Link>
      </div>
    </header>
  );
};

export default Header; 