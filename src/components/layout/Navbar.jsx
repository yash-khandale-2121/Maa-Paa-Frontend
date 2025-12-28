// // client/src/components/layout/Navbar.jsx
// import React, { useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import logo from '../../utils/Images/logo02.png'; // adjust if needed

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : '';
//     return () => (document.body.style.overflow = '');
//   }, [open]);

//   // Close on Escape key
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === 'Escape') setOpen(false);
//     };
//     window.addEventListener('keydown', onKey);
//     return () => window.removeEventListener('keydown', onKey);
//   }, []);

//   const navItems = [
//     { to: '/', label: 'Home' },
//     { to: '/about', label: 'About' },
//     { to: '/services', label: 'Services' },
//     { to: '/packages', label: 'Packages' },
//     { to: '/gallery', label: 'Gallery' },
//     { to: '/faq', label: 'FAQ' },
//     { to: '/contact', label: 'Contact' }
//   ];

//   return (
//     <header className="w-full bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-14 md:h-16">
//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Maa & Paa logo"
//               className="h-10 w-10 object-contain rounded-md"
//             />
//             <div className="hidden sm:block leading-tight">
//               <div className="text-lg font-semibold text-black">Maa <span className="text-sky-500">&amp;</span> Paa</div>
//               <div className="text-xs text-gray-500">Elderly Care Services</div>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden sm:flex items-center gap-6" aria-label="Primary navigation">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `text-sm font-medium px-2 py-1 rounded ${
//                     isActive ? 'text-white bg-primary' : 'text-gray-700 hover:text-primary'
//                   } transition-colors`
//                 }
//                 end={item.to === '/'}
//               >
//                 {item.label}
//               </NavLink>
//             ))}

//             <Link
//               to="/contact"
//               className="ml-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-sm hover:opacity-95"
//             >
//               Book a Call
//             </Link>
//           </nav>

//           {/* Mobile hamburger */}
//           <div className="sm:hidden flex items-center">
//             <button
//               aria-label={open ? 'Close menu' : 'Open menu'}
//               aria-expanded={open}
//               aria-controls="mobile-menu"
//               onClick={() => setOpen((v) => !v)}
//               className="p-2 rounded-md inline-flex items-center justify-center border hover:bg-gray-50"
//             >
//               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
//                 {open ? (
//                   <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu (slideover) */}
//       <div
//         id="mobile-menu"
//         className={`sm:hidden fixed inset-0 z-40 transform ${
//           open ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out`}
//         aria-hidden={!open}
//       >
//         {/* backdrop */}
//         <button
//           aria-hidden="true"
//           onClick={() => setOpen(false)}
//           className="absolute inset-0 bg-black/30"
//           tabIndex={open ? 0 : -1}
//         />

//         {/* menu panel */}
//         <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-lg p-5 overflow-auto">
//           <div className="flex items-center justify-between mb-4">
//             <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
//               <img src={logo} alt="Maa & Paa" className="h-9 w-9 object-contain rounded-md" />
//               <div>
//                 <div className="font-semibold text-sm">Maa &amp; Paa</div>
//                 <div className="text-xs text-gray-500">Elderly Care</div>
//               </div>
//             </Link>
//             <button
//               onClick={() => setOpen(false)}
//               aria-label="Close menu"
//               className="p-2 rounded-md border"
//             >
//               <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
//                 <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           <nav className="flex flex-col gap-2" aria-label="Mobile primary">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 onClick={() => setOpen(false)}
//                 className={({ isActive }) =>
//                   `block px-3 py-2 rounded text-sm font-medium ${
//                     isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'
//                   }`
//                 }
//                 end={item.to === '/'}
//               >
//                 {item.label}
//               </NavLink>
//             ))}

//             <Link
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="mt-3 inline-block w-full text-center px-4 py-2 rounded-full bg-primary text-white font-semibold"
//             >
//               Book a Call
//             </Link>

//             <div className="mt-6 border-t pt-4 text-xs text-gray-500">
//               <div>Phone: <a href="tel:+919999999999" className="underline">+91 99999 99999</a></div>
//               <div>Email: <a href="mailto:care@maa-paa.in" className="underline">care@maa-paa.in</a></div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;











// client/src/components/layout/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../utils/Images/logo02.png'; // <- update path if needed

/**
 * Responsive Navbar
 * - Desktop: horizontal menu + CTA
 * - Mobile: slide-over menu from right, locks body scroll, closes on backdrop/ESC/Link
 * - Accessible: aria attributes, keyboard close (Escape), proper focus containment
 */

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // focus first link when opening (accessibility)
  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [open]);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img
              src={logo}
              alt="Maa & Paa logo"
              className="flex-shrink-0 h-9 sm:h-10 md:h-12 object-contain rounded-md"
              width={64}
              height={64}
            />
            <div className="min-w-0">
              <div
                className="text-base sm:text-lg md:text-xl font-semibold text-black leading-tight truncate"
                title="Maa & Paa — Elderly Care Services"
              >
                Maa <span className="text-sky-500">&amp;</span> Paa
              </div>
              <div className="text-xs text-gray-500 mt-0.5 hidden md:block truncate">
                Elderly Care Services
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-4" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="ml-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-sm hover:opacity-95"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="sm:hidden flex items-center">
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md inline-flex items-center justify-center border hover:bg-gray-50"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                {open ? (
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu slide-over */}
      <div
        id="mobile-menu"
        className={`sm:hidden fixed inset-0 z-40 pointer-events-none ${open ? 'pointer-events-auto' : ''}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Panel */}
        <aside
          ref={panelRef}
          className={`absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-2xl p-5 transform transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-4">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <img src={logo} alt="Maa & Paa" className="h-9 w-9 object-contain rounded-md" />
              <div>
                <div className="font-semibold text-sm">Maa & Paa</div>
                <div className="text-xs text-gray-500">Elderly Care</div>
              </div>
            </Link>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md border"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {NAV_ITEMS.map((item, idx) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-medium ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                ref={idx === 0 ? firstLinkRef : null}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-block w-full text-center px-4 py-2 rounded-full bg-primary text-white font-semibold"
            >
              Book a Call
            </Link>

            <div className="mt-6 border-t pt-4 text-xs text-gray-500">
              <div>Phone: <a href="tel:+919359815924" className="underline">+91 9359815924</a></div>
              <div>Email: <a href="mailto:maapaacaretakers@gmail.com" className="underline">maapaacaretakers@gmail.com</a></div>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;

