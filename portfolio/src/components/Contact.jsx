import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const { personal } = portfolioData;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatus({ loading: false, success: true, error: null });
          formRef.current.reset();
        },
        (error) => {
          setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200/80">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Section Header */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">04. Contact</h2>
          <p className="text-xl font-semibold text-gray-900">Let's Connect</p>
          <p className="text-sm text-gray-600 mt-2">
            Have a project in mind or an open role? Reach out directly or drop a message here.
          </p>
          <div className="mt-6">
            <span className="text-xs font-mono text-gray-400 block uppercase">Email</span>
            <a href={`mailto:${personal?.email}`} className="text-sm font-medium text-gray-900 hover:underline">
              {personal?.email || 'email@example.com'}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="How can I help you?"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              {status.loading ? 'Sending...' : 'Send Message'} <Send size={14} />
            </button>

            {/* Status Feedback */}
            {status.success && (
              <div className="flex items-center gap-2 text-emerald-600 text-sm pt-2">
                <CheckCircle2 size={16} /> Message sent successfully!
              </div>
            )}
            {status.error && (
              <div className="flex items-center gap-2 text-rose-600 text-sm pt-2">
                <AlertCircle size={16} /> {status.error}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}