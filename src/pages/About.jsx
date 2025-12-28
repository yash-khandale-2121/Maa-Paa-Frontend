
import React from 'react';
import { Link } from 'react-router-dom';
import Akanksha from "../utils/Images/Akanksha.jpg";
import Yash from "../utils/Images/Yash02.png";
const TeamCard = ({ img, name, role, bio }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5">
      <img
        src={img}
        alt={name}
        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-4"
      />

      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-sm text-gray-600 text-center mb-3">{role}</p>
      <p className="text-sm text-gray-700 text-center">{bio}</p>
    </div>
  );
};


const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Maa &amp; Paa — Care that Feels Like Family
          </h1>
          <p className="text-gray-700 mb-6">
            At Maa &amp; Paa, our promise is simple: to provide compassionate,
            professional elderly care that preserves dignity, independence, and
            emotional well-being. Based in Pune, we work closely with families to
            design personalised care plans that truly fit your loved one’s life.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-sm text-gray-500">Years of service</div>
              <div className="text-2xl font-bold text-primary">5+ years</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-sm text-gray-500">Verified caregivers</div>
              <div className="text-2xl font-bold text-primary">100% checked</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To make ageing safer and more fulfilling by offering personalised,
            reliable care delivered with empathy and respect.
          </p>

          <h3 className="font-semibold mb-1">Our Approach</h3>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1">
            <li>Understand your loved one’s medical & personal needs</li>
            <li>Design a flexible, evidence-based care plan</li>
            <li>Assign a trained caregiver and provide ongoing supervision</li>
            <li>Keep the family informed with regular updates</li>
          </ol>
        </div>
      </header>
       <section aria-labelledby="team" className="mb-10">
        <h2 id="team" className="text-2xl font-bold mb-4">Meet our team</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <TeamCard
            img={Yash} 
            name="Yash Khandale"
            role="CEO — Chief Executive Officer"
            bio="Our CEO leads Maa & Paa with a strong passion for senior well-being, ensuring dignity, reliability, and compassionate care for every family. With solid experience in caregiving and service management, they have guided Maa & Paa into a trusted and dependable brand known for quality and empathy."
          />
          <TeamCard
            img={Akanksha}   
            name="Akanksha Khandale"
            role="COO — Chief Operating Officer"
            bio="Our COO oversees daily operations, caregiver training, service quality, and customer support. With a strong focus on efficiency and care standards, they ensure every caregiver is well-trained, punctual, and aligned with each family’s needs—maintaining smooth coordination and high satisfaction across Pune."
          />
        
        </div>

      </section>

      <section aria-labelledby="why-choose" className="mb-10">
        <h2 id="why-choose" className="text-2xl font-bold mb-4">
          Why families choose Maa &amp; Paa
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 shadow">
            <h3 className="font-semibold mb-2">People First</h3>
            <p className="text-sm text-gray-700">
              We match caregivers based on personality, language, and the family’s preferences.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow">
            <h3 className="font-semibold mb-2">Clinical Oversight</h3>
            <p className="text-sm text-gray-700">
              Care plans are created in consultation with nurses and physiotherapists when needed.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow">
            <h3 className="font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-sm text-gray-700">
              No hidden fees. Packages and custom plans are explained clearly so you can decide with confidence.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="core-values" className="mb-10">
        <h2 id="core-values" className="text-2xl font-bold mb-4">Core values</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5 shadow flex flex-col">
            <strong className="mb-2">Compassion</strong>
            <p className="text-sm text-gray-700 mb-3">
              We prioritise emotional well-being and treat every client with warmth.
            </p>
            <strong className="mb-2">Respect</strong>
            <p className="text-sm text-gray-700">
              Dignity and independence are central to every care decision.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow">
             <strong className="mb-2">Safety</strong>
            <p className="text-sm text-gray-700 mb-3">
              We maintain strict safety standards to ensure complete peace of mind.
            </p>
            <strong className="mb-2">Reliability</strong>
            <p className="text-sm text-gray-700">
              Our caregivers arrive on time and follow care plans with commitment.
            </p>
            
          </div>
        </div>
      </section>

      <section aria-labelledby="how-we-work" className="mb-10">
        <h2 id="how-we-work" className="text-2xl font-bold mb-4">How we work — step by step</h2>

        <div className="bg-white rounded-xl p-6 shadow">
          <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-700">
            <div>
              <div className="font-semibold mb-1">1. Free Consultation</div>
              <div>We visit or call to understand needs and medical history.</div>
            </div>
            <div>
              <div className="font-semibold mb-1">2. Personalized Plan</div>
              <div>Care plan tailored to routines, medications and preferences.</div>
            </div>
            <div>
              <div className="font-semibold mb-1">3. Caregiver Match</div>
              <div>We match and introduce a caregiver suited to your family.</div>
            </div>
            <div>
              <div className="font-semibold mb-1">4. Ongoing Support</div>
              <div>Regular check-ins, updates, and adjustments as needed.</div>
            </div>
          </div>
        </div>
      </section>


      <section aria-labelledby="timeline" className="mb-10">
        <h2 id="timeline" className="text-2xl font-bold mb-4">Our story — a quick timeline</h2>

        <div className="bg-white rounded-xl p-6">
          <ul className="space-y-3 text-sm">
            <li><strong>2019</strong> — Maa &amp; Paa founded with the goal of providing trustworthy in-home care.</li>
            <li><strong>2020</strong> — First 100 families served across Pune.</li>
            <li><strong>2022</strong> — Launched caregiver training and clinical oversight program.</li>
            <li><strong>2024</strong> — Expanded services to include 24/7 emergency coordination.</li>
          </ul>
        </div>
      </section>

      <aside className="bg-white rounded-xl p-6 shadow mt-6">
        <h3 className="text-xl font-semibold mb-3">Ready to talk?</h3>
        <p className="text-gray-700 mb-4">
          Schedule a free consultation and home assessment. We’ll listen, advise, and design a care plan that fits.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold"
          >
            Book a Free Consultation
          </Link>
          <a
            href={`https://wa.me/7796980110?text=${encodeURIComponent(
              "Hi, I'm interested in Maa & Paa elderly care services."
            )}`}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </aside>

     
    </main>
  );
};

export default About;
