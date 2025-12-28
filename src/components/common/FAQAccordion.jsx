// client/src/components/common/FAQAccordion.jsx
import React, { useId, useState, useRef } from 'react';

/**
 * FAQAccordion
 * Props:
 * - items: [{ id?, question, answer, category? }]
 *
 * Accessible accordion with smooth height animation and keyboard support.
 */
const FAQAccordion = ({ items = [] }) => {
  const [openId, setOpenId] = useState(null);
  const uid = useId();

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <AccordionItem
          key={item.id ?? `${uid}-${idx}`}
          id={item.id ?? `${uid}-${idx}`}
          question={item.question}
          answer={item.answer}
          isOpen={openId === (item.id ?? `${uid}-${idx}`)}
          onToggle={() => toggle(item.id ?? `${uid}-${idx}`)}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ id, question, answer, isOpen, onToggle }) => {
  const panelRef = useRef(null);

  // compute height for smooth transition
  const panelStyle = isOpen
    ? { height: panelRef.current ? panelRef.current.scrollHeight : 'auto' }
    : { height: 0 };

  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      <h3 className="flex items-center justify-between">
        <button
          aria-expanded={isOpen}
          aria-controls={`panel-${id}`}
          id={`button-${id}`}
          onClick={onToggle}
          className="w-full text-left px-4 py-3 flex items-center justify-between gap-4 focus:outline-none"
        >
          <span className="text-sm font-medium text-gray-800">{question}</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} text-gray-500`}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h3>

      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`button-${id}`}
        style={panelStyle}
        className="overflow-hidden transition-[height] duration-200"
      >
        <div ref={panelRef} className="px-4 pb-4 pt-0 text-sm text-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
