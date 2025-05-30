import HeroAboutToggle from '../components/HeroAboutToggle';
import ProjectsStatic from '../components/ProjectsStatic';
import HomeClient from '../components/HomeClient';

export default function HomePage() {
  return (
    <HomeClient>
      <HeroAboutToggle />
      <ProjectsStatic />
    </HomeClient>
  );
} 