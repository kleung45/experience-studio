import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * Logs those errors and displays a fallback UI instead of crashing
 * 
 * Usage:
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * Update state so the next render will show the fallback UI
   */
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  /**
   * Log the error for debugging purposes
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error info:', errorInfo);
    
    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="max-w-md w-full mx-4">
            <div className="text-center">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
                  <span className="material-symbols-outlined text-red-600 text-4xl">error</span>
                </div>
              </div>

              {/* Error Title */}
              <h1 className="text-2xl font-bold text-slate-900 mb-2 font-display">
                Oops! Something went wrong
              </h1>

              {/* Error Description */}
              <p className="text-slate-600 mb-6">
                We're sorry for the inconvenience. An unexpected error occurred while loading this page.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                  <p className="text-xs font-mono text-red-600 break-words">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full h-12 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 active:scale-95 transition-all"
                >
                  Refresh Page
                </button>
                <button
                  onClick={() => window.location.href = '#/'}
                  className="w-full h-12 px-6 py-3 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-slate-200 active:scale-95 transition-all"
                >
                  Go to Home
                </button>
              </div>

              {/* Support Info */}
              <p className="text-xs text-slate-500 mt-6">
                If this problem persists, please contact us at{' '}
                <a href="mailto:info@yookdesign.com" className="text-primary hover:underline">
                  info@yookdesign.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
