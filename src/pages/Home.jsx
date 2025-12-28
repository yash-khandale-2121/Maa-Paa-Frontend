
import React from 'react';
import Hero from '../components/common/Hero';
import ServiceCard from '../components/common/ServiceCard';
import FAQAccordion from '../components/common/FAQAccordion';
import Aniket from "../utils/Images/Aniket.jpg";
import Vedant from "../utils/Images/Vedant.jpg";
import Ankita from "../utils/Images/Ankita.jpg";
import Riya from "../utils/Images/Riya.jpg";
import TestimonialCard from '../components/common/TestimonialCard';


const Home = () => {
  const services = [
    {
      icon: '🏠',
      title: 'In-home Care',
      description:
        'Daily assistance with dressing, meals, and mobility in the comfort of home.'
    },
    {
      icon: '💊',
      title: 'Medication Management',
      description:
        'Timely reminders and support to ensure medicines are taken safely and correctly.'
    },
    {
      icon: '🤝',
      title: 'Companionship',
      description:
        'Kind, patient caregivers who listen, talk, and engage in meaningful activities.'
    },
    {
      icon: '⏰',
      title: '24/7 Emergency Care',
      description:
        'Round-the-clock support and emergency response to keep your loved ones safe.'
    }
  ];

  const faqs = [
    {
      question: 'Do you provide services across all of Pune?',
      answer:
        'Yes, we cover most major areas in Pune & Pimpri Chinchwad. Share your location and we will confirm availability.'
    },
    {
      question: 'Are your caregivers trained and verified?',
      answer:
        'All caregivers go through background checks, basic medical training, and regular supervision.'
    },
    {
      question: 'Can I customize a care plan?',
      answer:
        'Absolutely. We will discuss your loved one’s needs and design a personalized care plan.'
    }
  ];

   const testimonials = [
  {
    name: 'Aniket Umap',
    relation: 'Client',
    quote:
      'The caretaker provided by Maa & Paa treated my mother like family. Their support made our daily routine so much easier.',
    image: Aniket
  },
  {
    name: ' Riya Kapoor',
    relation: 'Client',
    quote:
      'Maa & Paa gave us peace of mind. Their team is professional, punctual, and truly understands elder needs.',
    image: Riya
  },
    {
    name: 'Ankita Pathare',
    relation: 'Client',
    quote:
      'Very helpful service. The caretaker was patient, kind, and handled all tasks smoothly. We are grateful to Maa & Paa.',
    image: Ankita
  },
  {
    name: 'Vedant Deshmukh',
    relation: 'Client',
    quote:
      'Excellent service! My grandfather felt comfortable and cared for. Highly recommended for anyone needing elder care.',
    image: Vedant 
  },

];


  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          How Maa &amp; Paa Supports Your Loved Ones
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={faqs} />
      </section>
    </main>
  );
};

export default Home;
