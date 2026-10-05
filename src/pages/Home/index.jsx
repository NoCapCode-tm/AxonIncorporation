import React from 'react';
import SEOHead from '@/components/seo/SEOHead';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <SEOHead title="Home" description="Welcome to Axon" />
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Axon ERP Running</h1>
      <p>Rsbuild is successfully compiling your CSS Modules and React 19 setup.</p>
    </div>
  );
};

export default Home;