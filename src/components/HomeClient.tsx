'use client';

import { usePageViewTracking } from '../utils/analytics';

interface HomeClientProps {
  children: React.ReactNode;
}

const HomeClient = ({ children }: HomeClientProps) => {
  // Track main page view
  usePageViewTracking('homepage');

  return <>{children}</>;
};

export default HomeClient; 