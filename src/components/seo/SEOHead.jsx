import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage, 
  schemaMarkup,
  noindex = false 
}) => {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://axon.com${location.pathname}`;
  const siteTitle = `${title} | Axon Education ERP`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Indexing Control */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* GEO & Internationalization (Hreflang mapping) */}
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="ar" href={`https://axon.com/ar${location.pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* Open Graph / Social */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage || 'https://axon.com/default-og.png'} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Structured Data / JSON-LD for Google Rich Snippets */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;