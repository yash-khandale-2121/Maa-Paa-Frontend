

import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitContactForm } from '../services/contactService';

const WHATSAPP_NUMBER = '919359815924';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus
  } = useForm();

  const [message, setMessage] = useState(null);
  const liveRef = useRef(null);

  useEffect(() => setFocus('fullName'), [setFocus]);

  useEffect(() => {
    if (message && liveRef.current) liveRef.current.focus();
  }, [message]);

  const onSubmit = async (data) => {
    if (data.website?.trim()) {
      setMessage({ type: 'error', text: 'Spam detected. Submission ignored.' });
      return;
    }

    try {
      setMessage(null);
      const res = await submitContactForm(data);
      setMessage({ type: 'success', text: res?.message || 'Thanks — we will contact you shortly.' });
      reset();
    } catch (err) {
      console.error(err);
      setMessage({
        type: 'error',
        text: err?.response?.data?.message || 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">

      {/* PAGE HEADING */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Fill the Contact Form</h1>
        <p className="text-gray-600 mt-2 text-sm">
          We’re here to help you choose the right elderly care service.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-md p-8 space-y-5"
        noValidate
        aria-describedby="form-status"
      >
        {/* Honeypot */}
        <input type="text" {...register('website')} className="hidden" autoComplete="off" />

        <h2 className="text-xl font-semibold mb-2">Request a Callback</h2>
        <p className="text-gray-600 text-sm mb-4">
          Fill in your details and our team will contact you within 24 hours.
        </p>

        <div>
          <label className="block text-sm mb-1">Full Name *</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            placeholder="e.g. Savita Patil"
            {...register('fullName', { required: 'Please enter full name' })}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Email *</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email'
                }
              })}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1">Phone Number *</label>
            <input
              type="tel"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="+91 9XXXXXXXXX"
              {...register('phone', {
                required: 'Phone is required',
                pattern: {
                  value: /^(\+?\d{2,4}[- ]?)?\d{10}$/,
                  message: 'Enter a valid phone number'
                }
              })}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Service Interest</label>
          <select
            className="w-full border rounded-lg px-3 py-2 text-sm"
            {...register('serviceInterest')}
          >
            <option value="">Select a service (optional)</option>
            <option value="In-home care">Daily care</option>
            <option value="Medication management">Weekly Care</option>
            <option value="Companionship">Monthly Care</option>
            <option value="24/7 emergency care">24/7 emergency care</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Preferred Contact Method</label>
          <div className="flex gap-4 text-sm">
            {['phone', 'email', 'whatsapp', 'any'].map((m) => (
              <label key={m} className="flex items-center gap-2">
                <input type="radio" value={m} {...register('preferredContactMethod')} />
                <span className="capitalize">{m}</span>
              </label>
            ))}
          </div>
        </div>
     <div>
  <label className="block text-sm mb-1">Address *</label>
  <textarea
    rows={3}
    className="w-full border rounded-lg px-3 py-2 text-sm"
    placeholder="House no, street, area, city, pincode"
    {...register('address', {
      required: 'Address is required',
      minLength: {
        value: 10,
        message: 'Please enter complete address'
      }
    })}
  />
  {errors.address && (
    <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>
  )}
</div>


        <div>
          <label className="block text-sm mb-1">Message / Requirements</label>
          <textarea
            rows={4}
            className="w-full border rounded-lg px-3 py-2 text-sm"
            {...register('message')}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-2.5 rounded-full font-semibold shadow-sm disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Request Callback'}
        </button>

        <div id="form-status" role="status" aria-live="polite" tabIndex={-1} ref={liveRef}>
          {message && (
            <p
              className={`mt-2 text-sm ${
                message.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message.text}
            </p>
          )}
        </div>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to be contacted regarding your enquiry.
        </p>
      </form>

      {/* CONTACT INFORMATION BELOW FORM */}
      <div className="bg-white rounded-2xl shadow-md p-8 mt-10">
        <h2 className="text-xl font-semibold mb-3">Contact Information</h2>

        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Phone:</strong>{' '}
          <a href="tel:+919359815924" className="underline">
            +91 9359815924
          </a>
          <br />
          <strong>Email:</strong>{' '}
          <a href="mailto:maapaacaretakers@gmail.com" className="underline">
            maapaacaretakers@gmail.com
          </a>
          <br />
          <strong>Address:</strong> Pune, Maharashtra
          <br />
          <strong>Hours:</strong> Mon–Sat, 9:00 AM – 8:00 PM
        </p>

        <div className="mt-5 flex gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi, I'm interested in Maa & Paa elderly care services."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 bg-green-600 text-white text-sm rounded-full text-center"
          >
            WhatsApp
          </a>

          <a
            href="tel:+919359815924"
            className="flex-1 px-3 py-2 border text-sm rounded-full text-center"
          >
            Call
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
