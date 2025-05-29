import { trackClick } from '../utils/analytics';

const Header = () => {
  const handleLogoClick = () => {
    trackClick('header_logo_home_navigation');
  };

  return (
    <header className="navbar px-4 lg:px-6 py-2 border-b-2 border-nous-yellow-dark bg-base-100">
      <div className="navbar-start">
        <a 
          href="/" 
          className="text-xl font-bold terminal-heading on-light" 
          aria-label="Rashik Shahjahan Homepage" 
          data-text="Rashik Shahjahan"
          onClick={handleLogoClick}
        >
          <span className="text-nous-text-primary">Rashik Shahjahan</span>
        </a>
      </div>
    </header>
  );
};

export default Header; 