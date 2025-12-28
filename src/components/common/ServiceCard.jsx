import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow p-5 h-full">
    <div className="text-3xl mb-3" aria-hidden="true">
      {icon}
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;
