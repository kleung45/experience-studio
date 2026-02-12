import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

/**
 * Application Entry Point - Optimized Version
 * 
 * Performance & Error Handling Improvements:
 * - ErrorBoundary wraps the entire app to catch errors
 * - Prevents white screen of death on component crashes
 * - Provides graceful fallback UI
 * - Better user experience during errors
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
