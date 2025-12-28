
// import React from 'react';
// import PackageCard from '../components/common/PackageCard';

// const Packages = () => {
//   const packages = [
//     {
//       name: 'Basic Care',
//       price: '8,000–12,000 / month',
//       duration: '4 hours / day',
//       services: ['Basic in-home care', 'Meal assistance', 'Medication reminders', 'Light housekeeping']
//     },
//     {
//       name: 'Standard Care',
//       price: '15,000–22,000 / month',
//       duration: '8 hours / day',
//       services: ['All Basic Care features', 'Companionship & activities', 'Vitals monitoring', 'Doctor appointment coordination'],
//       highlighted: true
//     },
//     {
//       name: 'Premium 24/7 Care',
//       price: '35,000+ / month',
//       duration: 'Live-in or 24/7',
//       services: ['Round-the-clock caregiver presence', 'Post-surgery/high-dependency care', 'Emergency coordination', 'Regular family updates']
//     }
//   ];

//   return (
//     <main className="max-w-6xl mx-auto px-4 py-12">
//       <header className="mb-8">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Care Packages</h1>
//         <p className="text-gray-600 mt-2 max-w-2xl">
//           Choose a package that suits your loved one, or contact us for a fully custom care plan. Pricing shown is indicative; final quotes are provided after assessment.
//         </p>
//       </header>

//       {/* Cards */}
//       <section className="grid gap-6 md:grid-cols-3 mb-8">
//         {packages.map((p) => (
//           <PackageCard key={p.name} {...p} />
//         ))}
//       </section>

//       {/* Comparison Table - responsive */}
//       <section aria-labelledby="comparison-heading" className="mb-8">
//         <h2 id="comparison-heading" className="text-2xl font-semibold mb-4">Package Comparison</h2>

//         {/* Small screens: stacked list */}
//         <div className="md:hidden space-y-4">
//           {packages.map((p) => (
//             <div key={p.name} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="font-semibold">{p.name}</div>
//                   <div className="text-xs text-gray-500">{p.duration}</div>
//                 </div>
//                 <div className="text-sm font-bold text-gray-900">₹ {p.price}</div>
//               </div>
//               <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
//                 {p.services.map((s,i) => <li key={i}>{s}</li>)}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Medium+ screens: table */}
//         <div className="hidden md:block overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
//           <table className="min-w-full text-sm">
//             <thead className="bg-secondary">
//               <tr>
//                 <th className="px-5 py-3 text-left">Feature</th>
//                 {packages.map((p) => (
//                   <th key={p.name} className="px-5 py-3 text-left">
//                     <div className="flex flex-col">
//                       <span className="font-semibold">{p.name}</span>
//                       <span className="text-xs text-gray-500">{p.duration}</span>
//                       <span className="text-sm font-bold mt-1">₹ {p.price}</span>
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody>
//               {[
//                 { feature: 'In-home care', values: ['✔', '✔', '✔'] },
//                 { feature: 'Companionship', values: ['Limited', '✔', '✔'] },
//                 { feature: '24/7 Care', values: ['—', 'On request', '✔'] },
//                 { feature: 'Medication management', values: ['✔', '✔', '✔'] },
//                 { feature: 'Emergency coordination', values: ['—', 'On request', '✔'] }
//               ].map((row, idx) => (
//                 <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                   <td className="px-5 py-3 align-top font-medium">{row.feature}</td>
//                   {row.values.map((v, i) => (
//                     <td key={i} className="px-5 py-3 align-top">{v}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-white rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
//         <div>
//           <h3 className="text-lg font-semibold">Need a custom plan?</h3>
//           <p className="text-sm text-gray-600">We’ll design a package around your loved one’s needs — schedule a free consultation.</p>
//         </div>
//         <div className="flex gap-3">
//           <a href="/contact" className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white font-semibold">Request Consultation</a>
//           <a href="tel:+919359815924" className="inline-flex items-center px-4 py-2 rounded-full border">Call Us</a>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Packages;

// client/src/pages/Packages.jsx
import React from 'react';
import PackageCard from '../components/common/PackageCard';

const Packages = () => {
  const packages = [
    {
      name: 'Daily Care',
      duration: '4–8 hours per day',
      services: [
        'In-home personal care',
        'Meal assistance',
        'Medication reminders',
        'Light housekeeping',
        'Companionship'
      ]
    },
    {
      name: 'Weekly Care',
      duration: '5–6 days per week',
      services: [
        'All Daily Care features',
        'Vitals monitoring',
        'Doctor appointment coordination',
        'Mobility support',
        'Family updates'
      ],
      highlighted: true
    },
    {
      name: 'Monthly Care',
      duration: 'Long-term scheduled care',
      services: [
        'Regular caregiver visits',
        'Post-hospitalization support',
        'Emergency coordination',
        'Routine-based care',
        '24/7 care available on request'
      ]
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Care Packages</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Choose a package based on your care schedule needs — daily visits, flexible weekly support,
          or a stable monthly care plan. Contact us for a personalized package.
        </p>
      </header>

      {/* Cards */}
      <section className="grid gap-6 md:grid-cols-3 mb-8">
        {packages.map((p) => (
          <PackageCard key={p.name} {...p} />
        ))}
      </section>

      {/* Comparison Table - Responsive */}
      <section aria-labelledby="comparison-heading" className="mb-8">
        <h2 id="comparison-heading" className="text-2xl font-semibold mb-4">
          Package Comparison
        </h2>

        {/* Small screens */}
        <div className="md:hidden space-y-4">
          {packages.map((p) => (
            <div key={p.name} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.duration}</div>
                </div>
              </div>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                {p.services.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Large screens */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-5 py-3 text-left">Feature</th>
                {packages.map((p) => (
                  <th key={p.name} className="px-5 py-3 text-left">
                    <div className="flex flex-col">
                      <span className="font-semibold">{p.name}</span>
                      <span className="text-xs text-gray-500">{p.duration}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                { feature: 'In-home care', values: ['✔', '✔', '✔'] },
                { feature: 'Companionship', values: ['✔', '✔', '✔'] },
                { feature: 'Vitals monitoring', values: ['—', '✔', '✔'] },
                { feature: 'Doctor coordination', values: ['—', '✔', '✔'] },
                { feature: 'Emergency support', values: ['—', '—', '✔'] }
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-5 py-3 align-top font-medium">{row.feature}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-5 py-3 align-top">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Need a custom plan?</h3>
          <p className="text-sm text-gray-600">
            We’ll design a schedule-based package tailored to your loved one’s needs.
          </p>
        </div>
        <div className="flex gap-3">
          <a href="/contact" className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white font-semibold">
            Request Consultation
          </a>
          <a href="tel:+919359815924" className="inline-flex items-center px-4 py-2 rounded-full border">
            Call Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Packages;
