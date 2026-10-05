// src/utils/helpers.js

// ==========================================
// 1. DOM & STYLING UTILITIES
// ==========================================

/**
 * Conditionally joins classNames together. 
 * Essential for dynamic UI components (like active navbar states or error borders).
 * @param  {...string} classes 
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}


// ==========================================
// 2. DATA FORMATTERS
// ==========================================

/**
 * Formats raw numbers into localized currency (used on Pricing and Leadership dashboards).
 * @param {number} amount - e.g., 50000
 * @param {string} currency - 'USD', 'GBP', 'INR'
 * @returns {string} - e.g., "$50,000"
 */
export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats ISO date strings into readable text (used in Release Notes and Newsroom).
 * @param {string} dateString 
 * @param {'short' | 'medium' | 'long'} format 
 * @returns {string} - e.g., "October 6, 2026"
 */
export function formatDate(dateString, format = 'medium') {
  const date = new Date(dateString);
  const options = {
    short: { month: 'short', day: 'numeric', year: 'numeric' },
    medium: { month: 'long', day: 'numeric', year: 'numeric' },
    long: { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' },
  };
  return new Intl.DateTimeFormat('en-US', options[format] || options.medium).format(date);
}

/**
 * Compresses large metrics (used in Case Studies and Social Proof).
 * @param {number} num - e.g., 15400
 * @returns {string} - e.g., "15.4K"
 */
export function formatMetric(num) {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(num);
}


// ==========================================
// 3. ANALYTICS & EVENT TRACKING
// ==========================================

/**
 * Global event dispatcher. Wires into Google Analytics 4, HubSpot, or Mixpanel.
 * Prevents direct window.dataLayer calls from polluting React components.
 */
export const analytics = {
  trackEvent: (eventName, properties = {}) => {
    // Only log to console during development to keep the terminal clean
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event Tracked] 📊: ${eventName}`, properties);
      return;
    }

    try {
      // Example integration for standard GA4/GTM:
      // if (window.dataLayer) {
      //   window.dataLayer.push({ event: eventName, ...properties });
      // }
      
      // Example integration for Mixpanel:
      // if (window.mixpanel) {
      //   window.mixpanel.track(eventName, properties);
      // }
    } catch (error) {
      console.error("Analytics tracking failed", error);
    }
  },
};