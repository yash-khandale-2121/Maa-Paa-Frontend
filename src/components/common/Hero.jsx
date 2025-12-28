import { Link } from 'react-router-dom';
import React from 'react';
import walkVideo from '../../utils/Images/walkupdated.mp4';

const Hero = () => (
  <section className="bg-secondary py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Trusted Elderly Care services across Pune.
        </h1>
        <p className="text-gray-700 mb-6">
          Maa &amp; Paa provides trusted in-home elderly care services—companionship,
          medical assistance, daily support, and 24/7 emergency care—so your loved
          ones feel safe, respected, and loved.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold"
          >
            Book a Free Consultation
          </Link>
          <Link
            to="/services"
            className="px-5 py-2.5 rounded-full border border-primary text-primary text-sm font-semibold"
          >
            View Services
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-700">
          <div>
            <div className="font-bold text-lg">Genuine</div>
            <div>Patient care</div>
          </div>
          <div>
            <div className="font-bold text-lg">Certified</div>
            <div>Caregivers</div>
          </div>
          <div>
            <div className="font-bold text-lg">24/7</div>
            <div>Emergency Support</div>
          </div>
        </div>
      </div>
      <div
        className="bg-white rounded-3xl shadow-lg p-0 flex flex-col gap-4"
        aria-label="Image description: Smiling elderly person with a caregiver"
      >
         <video
  src={walkVideo}
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-auto rounded-3xl shadow-lg object-cover"
></video>

      </div>
    </div>
  </section>
);

export default Hero;
