import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 text-red-800 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Algo salió mal</h2>
          <p>{this.state.error?.message || 'Error desconocido'}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;