// client/src/pages/FAQ.jsx
import React, { useMemo, useState } from 'react';
import FAQAccordion from '../components/common/FAQAccordion';

const FAQ = () => {
  const allFaqs = [
    {
      id: 'start',
      category: 'Getting Started',
      question: 'How do I get started?',
      answer:
        'Fill out the contact form or call us. We’ll schedule a free consultation to understand your needs and discuss a personalised care plan.'
    },
    {
      id: 'modify',
      category: 'Service Options',
      question: 'Can I change or cancel services later?',
      answer:
        'Yes. Services are flexible — you can modify hours, switch caregivers, or cancel with notice. We’ll guide you through the process and confirm any changes in writing.'
    },
    {
      id: 'overnight',
      category: 'Care Types',
      question: 'Do caregivers stay overnight?',
      answer:
        'Yes — for premium 24/7 care or live-in arrangements our trained caregivers can stay overnight as agreed in your care plan. We ensure breaks and supervision protocols are followed.'
    },
    {
      id: 'safety',
      category: 'Safety & Training',
      question: 'Are caregivers background checked and trained?',
      answer:
        'All caregivers undergo background checks, basic medical training, and regular on-the-job supervision. We also run periodic refresher trainings to keep skills current.'
    },
    {
      id: 'coverage',
      category: 'Service Area',
      question: 'Which areas do you serve in Pune?',
      answer:
        'We serve most major localities across Pune. During the free consultation we will confirm availability for your specific pin code.'
    },
    {
      id: 'payment',
      category: 'Billing',
      question: 'How is billing handled?',
      answer:
        'We invoice monthly or per the package you select. Payments can be made by bank transfer, UPI or cash (where applicable). Detailed invoices are provided for transparency.'
    }
  ];

  // derive unique categories
  const categories = useMemo(() => ['All', ...Array.from(new Set(allFaqs.map((f) => f.category)))], [allFaqs]);

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allFaqs.filter((f) => {
      const inCategory = activeCategory === 'All' || f.category === activeCategory;
      const matchesQuery =
        q === '' ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      return inCategory && matchesQuery;
    });
  }, [allFaqs, query, activeCategory]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-2xl">
          Answers to common questions about Maa &amp; Paa services, safety, billing and how to get started. Can't find
          what you're looking for? <strong>Contact us</strong> — we're happy to help.
        </p>
      </header>

      {/* Search + categories */}
      <div className="mb-6 grid gap-4 md:grid-cols-3 md:items-center">
        <div className="md:col-span-2">
          <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
          <div className="relative">
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions or keywords (e.g. 'caregivers', 'billing')"
              className="w-full border rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg className="w-5 h-5 absolute right-3 top-3 text-gray-400" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18A7.5 7.5 0 1 1 10.5 3a7.5 7.5 0 0 1 0 15z"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`text-sm px-3 py-1 rounded-full border transition ${
                activeCategory === c ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700'
              }`}
              aria-pressed={activeCategory === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: accordion list */}
        <section className="md:col-span-2">
          {filtered.length === 0 ? (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-sm text-yellow-800">
                No results found for <strong>{query}</strong>. Try different keywords or <a href="/contact" className="underline text-primary">contact us</a> for help.
              </p>
            </div>
          ) : (
            <FAQAccordion items={filtered} />
          )}
        </section>

        {/* Right: Helpful resources / contact CTA */}
        <aside className="space-y-4">
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Need personal help?</h3>
            <p className="text-sm text-gray-600 mb-3">If your question is specific to a case, it’s best to talk to us directly.</p>
            <div className="flex gap-2">
              <a href="/contact" className="inline-flex items-center px-3 py-2 rounded-lg bg-primary text-white text-sm">Contact Us</a>
              <a href={`https://wa.me/919359815924?text=${encodeURIComponent("Hi, I'm looking for elderly care support")}`} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 rounded-lg border text-sm">Chat on WhatsApp</a>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4 shadow-sm text-sm text-gray-700">
            <h4 className="font-medium mb-2">Common topics</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>How we assess care needs</li>
              <li>Caregiver screening & training</li>
              <li>Billing & packages</li>
            </ul>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-3 rounded text-sm text-emerald-800">
            <strong>Tip:</strong> For urgent enquiries call <a href="tel:+919359815924" className="underline">+91 9359815924</a>.
          </div>
        </aside>
      </div>
    </main>
  );
};

export default FAQ;
