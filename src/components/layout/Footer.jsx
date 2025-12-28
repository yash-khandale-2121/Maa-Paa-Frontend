// // client/src/components/layout/Footer.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../utils/Images/logo.png'; // adjust if your path differs

// const SocialLink = ({ href, label, children }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label={label}
//     className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white shadow-sm hover:opacity-90"
//   >
//     {children}
//   </a>
// );

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [contrast, setContrast] = useState(false);

//   const handleNewsletter = (e) => {
//     e.preventDefault();
//     if (!email) return;
//     // open user's email client with prefilled subject/body — no backend required
//     const mailto = `mailto:care@maa-paa.in?subject=${encodeURIComponent(
//       'Newsletter signup - Maa & Paa'
//     )}&body=${encodeURIComponent('Please sign me up for the Maa & Paa newsletter:\n\n' + email)}`;
//     window.location.href = mailto;
//   };

//   const handleBackToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer
//       className={`border-t mt-1 ${contrast ? 'high-contrast' : ''}`}
//       role="contentinfo"
//     >
//       <div className="max-w-auto mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 bg-zinc-50">
//         {/* Brand & Contact */}
//         <div className="flex flex-col gap-4">
//           <div className="flex items-center gap-3">
//             <img src={logo} alt="Maa & Paa logo" className="h-12 w-12 object-contain rounded-md" />
//             <div>
//               <div className="text-lg font-bold text-black">Maa <span className='text-sky-500'>&amp;</span>  Paa</div>
//               <div className="text-xs text-gray-500">Elderly Care Services — Pune</div>
//             </div>
//           </div>

//           <div className="text-sm text-gray-700">
//             <div>Phone: <a className="underline" href="tel:+919359815924">+91 9359815924</a></div>
//             <div>Email: <a className="underline" href="mailto:care@maa-paa.in">care@maa-paa.in</a></div>
//             <div>Hours: Mon–Sat, 9:00 AM – 8:00 PM</div>
//           </div>

//           <div className="flex gap-2 mt-2">
//             <SocialLink href="https://facebook.com/" label="Maa & Paa on Facebook">
//               {/* Facebook SVG */}
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//                 <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.9V12h1.6V9.8c0-1.6 1-2.6 2.5-2.6.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 0-1 1v1.2h1.7l-.3 2.9h-1.4v7A10 10 0 0 0 22 12z" />
//               </svg>
//             </SocialLink>

//             <SocialLink href="https://instagram.com/" label="Maa & Paa on Instagram">
//               {/* Instagram SVG */}
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//                 <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A3 3 0 1 0 15 11.5 3 3 0 0 0 12 8.5zm4.6-3a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z" />
//               </svg>
//             </SocialLink>

//             <SocialLink href="https://wa.me/919999999999" label="Chat with Maa & Paa on WhatsApp">
//               {/* WhatsApp SVG */}
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//                 <path d="M20.5 3.5A11 11 0 1 0 12 23a10.9 10.9 0 0 0 6.1-1.8L23 23l-1.4-4.9A10.9 10.9 0 0 0 24 12 11 11 0 0 0 20.5 3.5zM12 20.5a8.3 8.3 0 0 1-4.5-1.3l-.3-.2-3 1 1-3-.2-.3A8.3 8.3 0 1 1 12 20.5z" />
//               </svg>
//             </SocialLink>
//           </div>
//         </div>

//         {/* Quick Links / Sitemap */}
//         <div>
//           <h4 className="font-semibold mb-3">Quick Links</h4>
//           <ul className="text-sm space-y-2">
//             <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
//             <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
//             <li><Link to="/services" className="text-gray-600 hover:text-primary">Services</Link></li>
//             <li><Link to="/packages" className="text-gray-600 hover:text-primary">Packages</Link></li>
//             <li><Link to="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
//             <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h4 className="font-semibold mb-3">Newsletter</h4>
//           <p className="text-sm text-gray-700 mb-3">
//             Join our newsletter for tips on elder care, health, and family support.
//           </p>

//           <form onSubmit={handleNewsletter} className="flex gap-2">
//             <label htmlFor="newsletter-email" className="sr-only">Email address</label>
//             <input
//               id="newsletter-email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               required
//               className="flex-1 border rounded-md px-3 py-2 text-sm"
//             />
//             <button
//               type="submit"
//               className="px-3 py-2 rounded-md bg-primary text-white text-sm font-semibold"
//             >
//               Subscribe
//             </button>
//           </form>

//           <p className="text-xs text-gray-500 mt-2">
//             We respect your privacy — no spam. <Link to="/privacy" className="underline">Privacy Policy</Link>
//           </p>
//         </div>

//         {/* Accessibility & Utilities */}
//         <div>
//           <h4 className="font-semibold mb-3">Support & Accessibility</h4>
//           <div className="flex flex-col gap-2 text-sm text-gray-700">
//             <button
//               onClick={() => setContrast(!contrast)}
//               className="text-left underline"
//               aria-pressed={contrast}
//             >
//               Toggle high-contrast mode
//             </button>
//             <button
//               onClick={handleBackToTop}
//               className="text-left underline"
//             >
//               Back to top
//             </button>
//             <Link to="/terms" className="underline">Terms & Conditions</Link>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white border-t py-4 text-center text-xs text-gray-500">
//         <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
//           <div>© {new Date().getFullYear()} Maa &amp; Paa Elderly Care. All rights reserved.</div>
//           <div>
//             <Link to="/sitemap.xml" className="underline mr-3">Sitemap</Link>
//             <Link to="/privacy" className="underline mr-3">Privacy</Link>
//             <Link to="/terms" className="underline">Terms</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// client/src/components/layout/Footer.jsx



// client/src/components/layout/Footer.jsx
import React from 'react';
import logo from '../../utils/Images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-4">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <div className="flex justify-center mb-3">
          <img 
            src={logo} 
            alt="Maa & Paa Logo" 
            className="h- w-12 object-contain rounded-md"
          />
        </div>

        <p className="text-sm text-gray-700 mb-1">
          Maa & Paa Elderly Care Services — Pune, India
        </p>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Maa & Paa. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
