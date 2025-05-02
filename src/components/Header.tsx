import { trackClick } from '../utils/analytics';

const Header = () => {
  const handleLogoClick = () => {
    trackClick('logo', {
      section: 'header',
      action: 'navigation',
      destination: 'home'
    });
  };

  return (
    <header className="navbar px-4 lg:px-6 py-2 border-b-2 border-[#D4A017] bg-base-100">
      <div className="navbar-start">
        <a 
          href="/" 
          className="text-xl font-bold terminal-heading" 
          aria-label="Rashik Shahjahan Homepage" 
          data-text="Rashik Shahjahan"
          onClick={handleLogoClick}
        >
          <span className="text-nous-yellow">Rashik Shahjahan</span>
        </a>
      </div>
    </header>
  );
};

export default Header; 