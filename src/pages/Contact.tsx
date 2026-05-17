import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Primelink Marketing Solution LLC</title>
        <meta name="description" content="Get in touch with Primelink Marketing Solution LLC. Reach our global team in Chicago, London, Singapore, and Dubai for marketing and BPO inquiries." />
        <link rel="canonical" href="https://www.primelinkmktg.com/contact" />
        <meta property="og:title" content="Contact Us | Primelink Marketing Solution LLC" />
        <meta property="og:description" content="Connect with our global team. Strategic partners will respond within 24 business hours." />
        <meta property="og:url" content="https://www.primelinkmktg.com/contact" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="flex flex-col w-full py-14 md:py-20 px-4 md:px-8 max-w-[1280px] mx-auto"
      >
        <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto">
          <h1 className="mb-4 text-3xl md:text-4xl font-extrabold">Connect With Our Global Team</h1>
          <p className="text-base text-on-surface-variant">
            Ready to bridge the gap in your business? Complete the form below and one of our strategic partners will reach out within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-outline-variant shadow-sm">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>

              <address className="not-italic space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">Email Us</p>
                    <a href="mailto:contact@primelinkmktg.com" className="text-on-surface-variant text-sm hover:text-primary transition-colors block">contact@primelinkmktg.com</a>
                    <a href="mailto:careers@primelinkmktg.com" className="text-on-surface-variant text-sm hover:text-primary transition-colors block">careers@primelinkmktg.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">Call Us</p>
                    <a href="tel:+18005550199" className="text-on-surface-variant text-sm hover:text-primary transition-colors block">+1 (800) 555-0199</a>
                    <a href="tel:+13125550422" className="text-on-surface-variant text-sm hover:text-primary transition-colors block">+1 (312) 555-0422</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">Headquarters</p>
                    <p className="text-on-surface-variant text-sm">
                      1200 Enterprise Way, Suite 500<br />Chicago, IL 60601
                    </p>
                  </div>
                </div>
              </address>

              <div className="mt-8 pt-8 border-t border-outline-variant">
                <p className="font-bold mb-3 uppercase tracking-widest text-xs opacity-60">Global Presence</p>
                <div className="flex flex-wrap gap-2">
                  {['London', 'Singapore', 'Dubai', 'Sydney'].map((city) => (
                    <span key={city} className="px-3 py-1 bg-surface-container rounded-full text-xs">{city}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-10 rounded-2xl border border-outline-variant shadow-sm">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-bold text-sm" htmlFor="first-name">First Name</label>
                    <input
                      type="text" id="first-name" name="first-name" autoComplete="given-name"
                      className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-sm" htmlFor="last-name">Last Name</label>
                    <input
                      type="text" id="last-name" name="last-name" autoComplete="family-name"
                      className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-sm" htmlFor="email">Work Email</label>
                  <input
                    type="email" id="email" name="email" autoComplete="email"
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="jane.doe@company.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-sm" htmlFor="service">Interest Area</label>
                  <select
                    id="service" name="service"
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  >
                    <option value="marketing">Integrated Marketing</option>
                    <option value="bpo">BPO & Operations</option>
                    <option value="strategy">Strategic Audit</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-sm" htmlFor="message">How can we help?</label>
                  <textarea
                    id="message" name="message" rows={5}
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm"
                    placeholder="Tell us about your organizational goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
                >
                  Submit Consultation Request
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                </button>

                <p className="text-xs text-center text-on-surface-variant px-2">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. Your data is protected by institutional-grade encryption.
                </p>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
