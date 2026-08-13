import React, { useRef, useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import portfolioData from '../data/portfolioData.json';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const { personal } = portfolioData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus({ loading: false, success: true, error: null });
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
        }
      );
  };

  return (
    <section 
      id="contact" 
      className="py-20 border-t border-matte-black/20 font-['Times_New_Roman',serif]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-matte-black/60 font-sans">04. Contact</h2>
            <p className="text-3xl font-bold text-matte-black">Let's Connect</p>
            <p className="text-base text-matte-black/80 leading-relaxed pt-2">
              Have a project in mind or an open role? Reach out directly or drop a message here.
            </p>
            
            <div className="pt-6">
              <span className="text-xs font-sans uppercase tracking-wider text-matte-black/60 block mb-1">
                Direct Email
              </span>
              <a 
                href={`mailto:${personal?.email}`} 
                className="text-lg font-semibold text-matte-black hover:underline underline-offset-4"
              >
                {personal?.email || 'chanuthi.avindi@gmail.com'}
              </a>
            </div>
          </div>

          <div className="md:col-span-8">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans text-matte-black/70 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-bone-white border border-matte-black/30 rounded-lg px-4 py-3 text-base text-matte-black focus:outline-none focus:border-matte-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-matte-black/70 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-bone-white border border-matte-black/30 rounded-lg px-4 py-3 text-base text-matte-black focus:outline-none focus:border-matte-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans text-matte-black/70 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full bg-bone-white border border-matte-black/30 rounded-lg px-4 py-3 text-base text-matte-black focus:outline-none focus:border-matte-black transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center gap-2.5 bg-matte-black text-studio-bg px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-matte-black/85 disabled:opacity-50 transition-colors cursor-pointer shadow-sm"
              >
                {status.loading ? 'Sending...' : 'Send Message'} <Send size={15} />
              </button>

              {status.success && (
                <div className="flex items-center gap-2 text-emerald-700 text-sm pt-2">
                  <CheckCircle2 size={16} /> Message sent successfully!
                </div>
              )}
              {status.error && (
                <div className="flex items-center gap-2 text-rose-700 text-sm pt-2">
                  <AlertCircle size={16} /> {status.error}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}