// import ServiceCard from '../components/common/ServiceCard';
// import React from 'react';

// const Services = () => {
//   const services = [
//     {
//       icon: '🏠',
//       title: 'In-home Care',
//       description:
//         'Support with bathing, grooming, dressing, toileting, mobility, and daily routines.'
//     },
//     {
//       icon: '💉',
//       title: 'Medical Assistance',
//       description:
//         'Basic medical care support such as vitals monitoring, post-surgery care (as per doctor guidance).'
//     },
//     {
//       icon: '🤝',
//       title: 'Companionship',
//       description:
//         'Conversation, games, walks, and emotional support to reduce loneliness and anxiety.'
//     },
//     {
//       icon: '🍲',
//       title: 'Meal Feeding',
//       description:
//         'Nutritious meal feeding support based on dietary preferences and doctor’s advice.'
//     },
//     {
//       icon: '💊',
//       title: 'Medication Management',
//       description:
//         'Reminders, tracking, and assistance to ensure medicines are taken correctly and on time.'
//     },
//     {
//       icon: '🧑‍⚕️',
//       title: 'Physical Therapy Support',
//       description:
//         'Assistance with simple exercises prescribed by physiotherapists to support mobility and recovery.'
//     },
//     {
//       icon: '🚑',
//       title: '24/7 Emergency Care',
//       description:
//         'On-call support and coordination in case of medical emergencies, including hospital escorts.'
//     }
//   ];

//   return (
//     <main className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-4">Our Services</h1>
//       <p className="text-gray-700 mb-6">
//         We provide a complete range of elderly care services to support safety,
//         comfort, and independence—whether you need a few hours a day or round-the-clock
//         assistance.
//       </p>
//       <div className="grid md:grid-cols-3 gap-6">
//         {services.map((s) => (
//           <ServiceCard key={s.title} {...s} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Services;


import ServiceCard from '../components/common/ServiceCard';
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'In-Home Personal Care',
      description:
        'Assistance with bathing, grooming, dressing, toileting, mobility, and daily living activities to ensure comfort and dignity.'
    },
    {
      icon: '💉',
      title: 'Basic Medical Support',
      description:
        'Monitoring vitals, post-surgery assistance, and doctor-advised medical care support for safe recovery at home.'
    },
    {
      icon: '🤝',
      title: 'Companionship & Engagement',
      description:
        'Meaningful conversations, walks, games, and emotional support to reduce loneliness and promote mental well-being.'
    },
    {
      icon: '🍲',
      title: 'Meal Assistance',
      description:
        'Support in serving and feeding nutritious meals as per dietary requirements and medical recommendations.'
    },
    {
      icon: '💊',
      title: 'Medication Support',
      description:
        'Timely reminders, tracking, and assistance to ensure accurate and consistent medicine intake.'
    },
    {
      icon: '🧑‍⚕️',
      title: 'Physiotherapy Assistance',
      description:
        'Help with light exercises prescribed by physiotherapists to support mobility, strength, and faster recovery.'
    },
    {
      icon: '🚑',
      title: '24/7 Emergency Response',
      description:
        'Round-the-clock support, emergency coordination, and hospital escort assistance when urgent care is needed.'
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Maa & Paa offers comprehensive elderly care solutions designed to ensure safety, comfort,
        and independence. Whether you require part-time assistance or round-the-clock care,
        our trained caregivers provide reliable and compassionate support tailored to your needs.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </main>
  );
};

export default Services;
