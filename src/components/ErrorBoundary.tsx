import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { playStoreUrl } from '../links';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

/** If the page ever crashes, still give visitors a way to reload or get the app. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="wrap center" style={{ padding: '96px 16px' }}>
        <h1 style={{ fontSize: '1.6rem', marginBottom: 12 }}>Something went wrong</h1>
        <p className="lead" style={{ marginBottom: 24 }}>Please reload the page, or get the GharBanoo app directly.</p>
        <div className="contact-actions">
          <button type="button" className="btn btn-outline" onClick={() => window.location.reload()}>
            Reload page
          </button>
          <a className="btn btn-primary" href={playStoreUrl('error')}>
            Get the app
          </a>
        </div>
      </div>
    );
  }
}
