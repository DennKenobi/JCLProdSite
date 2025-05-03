import React from 'react';
import { useLocation } from 'react-router-dom'; // added by chatgpt
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyber';
}

const Layout: React.FC<LayoutProps> = ({ children, variant = 'default' }) => {
  // const location = useLocation();
  // const variant = location.pathname.startsWith('/cyber') ? 'cyber' : 'default';

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant={variant} />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer variant={variant} />
    </div>
  );
};

export default Layout;