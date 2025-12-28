import React from 'react';

const TestimonialCard = ({ name, relation, quote, image }) => {
  return (
    <div className="p-6 bg-secondary rounded-2xl shadow-md flex flex-col gap-4">
      
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{relation}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-700 italic leading-relaxed">“{quote}”</p>
    </div>
  );
};

export default TestimonialCard;
