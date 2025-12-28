// import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../../utils/constants';
// import React from 'react';

// const WhatsAppButton = () => {
//   const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//     WHATSAPP_MESSAGE
//   )}`;

//   return (
//     <a
//       href={url}
//       target="_blank"
//       rel="noreferrer"
//       aria-label="Chat with us on WhatsApp"
//       className="fixed bottom-4 right-4 rounded-full px-4 py-3 shadow-lg bg-green-500 text-white font-semibold flex items-center gap-2"
//     >
//       <span>WhatsApp</span>
//     </a>
//   );
// };

// export default WhatsAppButton;

import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../../utils/constants";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-4 right-4 
        flex items-center gap-2 
        bg-green-500 text-white font-semibold 
        px-4 py-3 rounded-full shadow-xl
        animate-bounce
        hover:scale-110 hover:bg-green-600
        transition-all duration-300
        z-50
      "
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:block">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
