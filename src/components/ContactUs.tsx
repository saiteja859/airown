import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertTriangle, Loader2, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');

    const isPlaceholder =
      EMAILJS_CONFIG.PUBLIC_KEY.includes('PLACEHOLDER') ||
      EMAILJS_CONFIG.SERVICE_ID.includes('PLACEHOLDER') ||
      EMAILJS_CONFIG.TEMPLATE_ID.includes('PLACEHOLDER');

    if (isPlaceholder) {
      setTimeout(() => {
        setStatus('success');
        console.warn(
          'EmailJS is in simulation mode. Update src/config/emailjs.ts with your active Service, Template, and Public Key.'
        );
      }, 1500);
      return;
    }

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          formRef.current,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        setStatus('success');
      }
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setErrorMessage(err?.text || 'Could not establish transmission.');
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <section id="contact-us" className="relative py-16 md:py-20 bg-gray-50 overflow-hidden border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-bold uppercase tracking-widest text-luxury-blue mb-2 block">
            Initiate Contact
          </span>
          <h2 className="text-2xl md:text-4xl font-light tracking-tight text-luxury-dark leading-tight">
            Connect with Our <span className="font-semibold text-gradient-metallic">Logistics Office</span>
          </h2>
        </div>

        {/* Contact Form Card */}
        <div className="relative bg-white rounded-3xl border-2 border-gray-300 overflow-hidden shadow-sm max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* IDLE & SUBMITTING STATE */}
            {(status === 'idle' || status === 'submitting') && (
              <motion.form
                key="contact-form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-6 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-luxury-graphite uppercase tracking-widest mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={status === 'submitting'}
                      placeholder="e.g. Alexander Mercer"
                      className={`w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-gray-300 text-base text-luxury-dark placeholder-luxury-titanium/60 focus:outline-none focus:border-luxury-blue focus:bg-white transition-all duration-300 ${
                        errors.name ? 'border-red-400 focus:border-red-400 bg-red-50/10' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-luxury-graphite uppercase tracking-widest mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={status === 'submitting'}
                      placeholder="alexander@mercer.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-gray-300 text-base text-luxury-dark placeholder-luxury-titanium/60 focus:outline-none focus:border-luxury-blue focus:bg-white transition-all duration-300 ${
                        errors.email ? 'border-red-400 focus:border-red-400 bg-red-50/10' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-luxury-graphite uppercase tracking-widest mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={status === 'submitting'}
                    placeholder="+1 (555) 019-2834"
                    className={`w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-gray-300 text-base text-luxury-dark placeholder-luxury-titanium/60 focus:outline-none focus:border-luxury-blue focus:bg-white transition-all duration-300 ${
                      errors.phone ? 'border-red-400 focus:border-red-400 bg-red-50/10' : ''
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertTriangle size={12} /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-luxury-graphite uppercase tracking-widest mb-1.5">
                    Transmission Content
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={status === 'submitting'}
                    rows={4}
                    placeholder="Describe your cargo needs, coordinates, or system inquiry..."
                    className={`w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-gray-300 text-base text-luxury-dark placeholder-luxury-titanium/60 focus:outline-none focus:border-luxury-blue focus:bg-white transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-400 focus:border-red-400 bg-red-50/10' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertTriangle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Increased Submit Button Size */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-3 bg-luxury-dark text-white font-bold uppercase tracking-widest text-sm py-5 rounded-2xl shadow-md transition-all duration-300 hover:bg-luxury-blue hover:text-white disabled:bg-luxury-titanium"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting Vector Data...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>
              </motion.form>
            )}

            {/* SUCCESS STATE */}
            {status === 'success' && (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]"
              >
                <div className="mb-4 p-4 rounded-full bg-luxury-blue/5 border border-luxury-blue text-luxury-blue relative">
                  <CheckCircle2 size={36} className="relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-luxury-dark mb-2">
                  Telemetry Transmitted
                </h3>
                <p className="text-sm font-light text-luxury-graphite max-w-xs mb-6 leading-relaxed">
                  Your message has been sent. The Airown flight command center will review your coordinates and respond shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full border border-gray-300 text-luxury-dark hover:border-luxury-blue"
                >
                  <Sparkles size={12} className="text-luxury-blue" />
                  New Vector Submission
                </button>
              </motion.div>
            )}

            {/* ERROR STATE */}
            {status === 'error' && (
              <motion.div
                key="error-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]"
              >
                <div className="mb-4 p-4 rounded-full bg-red-50 border border-red-200 text-red-500">
                  <AlertTriangle size={36} />
                </div>
                <h3 className="text-xl font-bold text-luxury-dark mb-2 text-red-600">
                  Transmission Failed
                </h3>
                <p className="text-xs font-light text-luxury-graphite max-w-xs mb-6 leading-relaxed">
                  We encountered an atmospheric block while broadcasting your message.
                  <span className="text-xs text-red-400 font-mono mt-2 block">{errorMessage}</span>
                </p>
                <button
                  onClick={resetForm}
                  className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full border border-gray-300 text-luxury-dark hover:border-red-400"
                >
                  Try Again
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
