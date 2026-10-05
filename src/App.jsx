import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { appRouter } from '@/routes/AppRouter';
import { Loader2 } from 'lucide-react';
import GlobalErrorBoundary from '@/components/common/GlobalErrorBoundary'; // See below
import styles from './App.module.css'; 

const GlobalLoader = () => (
  <div className={styles.loaderContainer}>
    <Loader2 className={styles.spinner} />
    <p className={styles.loadingText}>Loading Axon Workspace...</p>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <Suspense fallback={<GlobalLoader />}>
          <RouterProvider router={appRouter} />
        </Suspense>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;