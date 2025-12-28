import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="min-h-[60vh] flex flex-col items-center justify-center px-4">
    <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
    <p className="text-gray-600 mb-4">
      The page you&apos;re looking for may have been moved or doesn&apos;t exist.
    </p>
    <Link
      to="/"
      className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold"
    >
      Go Back Home
    </Link>
  </main>
);

export default NotFound;
