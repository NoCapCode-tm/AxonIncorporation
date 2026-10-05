import React, { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';

// Import Global configurations and assets
import '@/config/i18n';
import '@/assets/global.css';

const container = document.getElementById('root');

// Sanity check to ensure the mount point exists in index.html
if (!container) {
  throw new Error("Failed to find the root element. Ensure there is a <div id='root'></div> in your index.html");
}

// Enterprise Hydration Logic:
// If the HTML was pre-rendered (Static Site Generation / Server Side Rendering), 
// hydrate it to attach event listeners without re-drawing the DOM.
// Otherwise, fall back to standard Client Side Rendering (CSR).
if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}