import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

const container = document.getElementById('root')!;
const app = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
// Keeps caught errors off reportError(), which would raise the dev overlay.
const onCaughtError = (error: unknown, errorInfo: { componentStack?: string }) => {
  console.error(error, errorInfo.componentStack);
};

// The production build ships prerendered HTML, so attach to it; in dev the
// root is empty and the app renders from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app, { onCaughtError });
} else {
  createRoot(container, { onCaughtError }).render(app);
}
