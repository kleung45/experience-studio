
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import ImpactPage from './pages/ImpactPage';
import ContactPage from './pages/ContactPage';

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const routes: { [key: string]: React.ReactElement } = {
  '/': <HomePage />,
  '/work': <WorkPage />,
  '/services': <ServicesPage />,
  '/process': <ProcessPage />,
  '/impact': <ImpactPage />,
  '/contact': <ContactPage />,
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial path
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const ActivePage = routes[currentPath] || routes['/'];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header currentPath={currentPath} />
      <main className="flex-1">
        {ActivePage}
      </main>
      <Footer />
    </div>
  );
};

export default App;