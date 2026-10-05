import React from 'react';
import styles from './GlobalErrorBoundary.module.css'; // You'll create this CSS module

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // In production, send this to Sentry, Datadog, or your analytics
    console.error("Axon Frontend Crash:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>Something went wrong.</h1>
          <p className={styles.errorMessage}>
            The Axon workspace encountered an unexpected error. Our engineering team has been notified.
          </p>
          <button 
            className={styles.reloadButton}
            onClick={() => window.location.reload()}
          >
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;