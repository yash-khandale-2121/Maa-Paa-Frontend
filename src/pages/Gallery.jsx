import React from 'react';

const Gallery = () => (
  <main className="max-w-6xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold mb-4">Gallery</h1>
    <p className="text-gray-700 mb-4">
      A glimpse of the warmth, care, and activities that make our elders feel at
      home. (Replace placeholders with real photos with consent.)
    </p>
    <div className="grid md:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow h-40 flex items-center justify-center text-gray-400 text-sm"
        >
          Photo {i} Placeholder
        </div>
      ))}
    </div>
  </main>
);

export default Gallery;
