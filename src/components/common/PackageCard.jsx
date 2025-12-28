import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({ name, price, services, duration, highlighted }) => (
  <div
    className={`rounded-2xl border p-6 flex flex-col gap-3 ${
      highlighted ? 'border-primary shadow-lg bg-white' : 'bg-white'
    }`}
  >
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-xl font-bold text-primary">{price}</p>
    <p className="text-xs text-gray-500 mb-2">Duration: {duration}</p>
    <ul className="text-sm text-gray-600 space-y-1">
      {services.map((s, idx) => (
        <li key={idx}>• {s}</li>
      ))}
    </ul>
   
    <Link
  to="/contact"
  className="mt-4 px-4 py-2 rounded-full bg-primary text-center text-white text-sm font-semibold"
>
  Get Started
</Link>
  </div>
);

export default PackageCard;
