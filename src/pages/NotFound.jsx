import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import { Search, Home, HelpCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <SEOHead title="Page Not Found" noindex={true} />
      
      <h1 className="text-9xl font-bold text-slate-200">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-slate-900">We lost that page.</h2>
      <p className="mt-4 text-lg text-slate-600 max-w-md">
        The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Home size={18} /> Return Home
        </Link>
        <Link 
          to="/resources/support" 
          className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition"
        >
          <HelpCircle size={18} /> Help Center
        </Link>
      </div>
    </div>
  );
};

export default NotFound;