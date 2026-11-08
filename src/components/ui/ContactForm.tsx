import { useState, useEffect, type FC, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const ContactForm: FC = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setForm((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?\d[\d\s-]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const serviceName = siteConfig.services.find((s) => s.id === form.service)?.shortTitle || form.service;
    const text = [
      `*New Enquiry from Website*`,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : '',
      serviceName ? `*Service:* ${serviceName}` : '',
      `*Message:* ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n');
    
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const inputClasses =
    'w-full bg-navy-800/50 border border-gold-500/20 rounded-lg px-4 py-3 text-off-white placeholder-off-white/30 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-colors';
  const errorClasses = 'text-red-400 text-xs mt-1';

  return (
    <div>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-heading text-gold-400 mb-2">Thank You!</h3>
            <p className="text-off-white/70 mb-6">
              We've received your enquiry and will get back to you within 24 hours.
            </p>
            <button onClick={() => setStatus('idle')} className="btn-outline text-sm">
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
          >
            <div>
              <label htmlFor="cf-name" className="block text-sm text-off-white/70 mb-1.5">
                Full Name <span className="text-gold-500">*</span>
              </label>
              <input
                id="cf-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                className={inputClasses}
                required
              />
              {errors.name && <p className={errorClasses}>{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cf-phone" className="block text-sm text-off-white/70 mb-1.5">
                  Phone Number <span className="text-gold-500">*</span>
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={inputClasses}
                  required
                />
                {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="cf-email" className="block text-sm text-off-white/70 mb-1.5">
                  Email Address
                </label>
                <input
                  id="cf-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="cf-service" className="block text-sm text-off-white/70 mb-1.5">
                Service Interested In
              </label>
              <select
                id="cf-service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClasses}
              >
                <option value="">Select a service</option>
                {siteConfig.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.shortTitle}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cf-message" className="block text-sm text-off-white/70 mb-1.5">
                Your Message <span className="text-gold-500">*</span>
              </label>
              <textarea
                id="cf-message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project or requirement..."
                rows={4}
                className={`${inputClasses} resize-none`}
                required
              />
              {errors.message && <p className={errorClasses}>{errors.message}</p>}
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again or contact us via WhatsApp.
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg bg-green-600 hover:bg-green-500 text-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Send on WhatsApp
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
