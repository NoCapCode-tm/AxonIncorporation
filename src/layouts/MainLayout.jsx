import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import styles from './MainLayout.module.css';
// import GlobalNavbar from '@/components/layout/GlobalNavbar';
// import GlobalFooter from '@/components/layout/GlobalFooter';

const MainLayout = () => {
  return (
    <div className={styles.layoutWrapper}>
      {/* 
        <GlobalNavbar /> 
      */}
      
      {/* 
        The Outlet is where React Router dynamically injects the page content 
        (e.g., Operations.jsx, Home.jsx) based on the current URL.
      */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>

      {/* 
        <GlobalFooter /> 
      */}

      {/* 
        ScrollRestoration ensures that when a user clicks a link, 
        they start at the top of the new page, rather than maintaining their scroll depth.
      */}
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;