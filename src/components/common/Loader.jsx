import React from 'react';

const Loader = () => (
  <div className="flex justify-center py-10" role="status" aria-label="Loading">
    <div className="h-8 w-8 rounded-full border-4 border-gray-300 border-t-primary animate-spin" />
  </div>
);

export default Loader;
