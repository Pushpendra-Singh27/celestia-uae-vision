import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Error Boundary Component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error?: Error}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Something went wrong</h1>
            <p className="text-muted-foreground mb-4">Please refresh the page or try again later.</p>
            {this.state.error && (
              <details className="text-left bg-gray-100 p-4 rounded-md max-w-md mx-auto">
                <summary className="font-medium text-foreground cursor-pointer">Error Details</summary>
                <pre className="mt-2 text-sm text-red-600 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create root
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

// Get base URL from environment or use root
const baseUrl = import.meta.env.BASE_URL || '/';

// Render app with error boundary and strict mode
root.render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);

// Log build info in development
if (import.meta.env.DEV) {
  console.log('Development build');
} else {
  console.log('Production build');
}
