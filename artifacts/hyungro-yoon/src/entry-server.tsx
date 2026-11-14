import { renderToString } from 'react-dom/server';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

// Used only at build time: produces the page's HTML so search engines that
// do not run JavaScript still see the full content.
export function render() {
  return renderToString(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  );
}
