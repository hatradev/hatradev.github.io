import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl text-text mb-8">Page not found</p>
      <Link to="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
