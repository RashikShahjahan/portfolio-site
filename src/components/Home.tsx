import HeroAbout from './HeroAbout';
import Projects from './Projects';
import { usePageViewTracking } from '../utils/analytics';

const Home = () => {
  // Track main page view
  usePageViewTracking('homepage');

  return (
    <main className="flex-grow flex flex-col" role="main">
      <HeroAbout />
      <Projects />
    </main>
  );
};

export default Home; 