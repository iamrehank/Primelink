import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full py-20 px-4 md:px-8 max-w-[1280px] mx-auto"
    >
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h1 className="mb-6">Connect With Our Global Team</h1>
        <p className="text-body-lg text-on-surface-variant">
          Ready to bridge the gap in your business? Complete the form below and one of our strategic partners will reach out within 24 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm h-full">
            <h2 className="text-2xl mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-label-bold">Email Us</p>
                  <p className="text-on-surface-variant text-body-md">contact@primelinkmktg.com</p>
                  <p className="text-on-surface-variant text-body-md">careers@primelinkmktg.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-label-bold">Call Us</p>
                  <p className="text-on-surface-variant text-body-md">+1 (800) 555-0199</p>
                  <p className="text-on-surface-variant text-body-md">+1 (312) 555-0422</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-label-bold">Headquarters</p>
                  <p className="text-on-surface-variant text-body-md">
                    1200 Enterprise Way<br />
                    Suite 500<br />
                    Chicago, IL 60601
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-outline-variant">
              <p className="text-label-bold mb-4 uppercase tracking-widest text-xs opacity-60">Global Presence</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full text-caption">London</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-caption">Singapore</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-caption">Dubai</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-caption">Sydney</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-10 rounded-2xl border border-outline-variant shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-label-bold text-sm" htmlFor="first-name">First Name</label>
                  <input 
                    type="text" 
                    id="first-name"
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-label-bold text-sm" htmlFor="last-name">Last Name</label>
                  <input 
                    type="text" 
                    id="last-name"
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-label-bold text-sm" htmlFor="email">Work Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="jane.doe@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-label-bold text-sm" htmlFor="service">Interest Area</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="marketing">Integrated Marketing</option>
                  <option value="bpo">BPO & Operations</option>
                  <option value="strategy">Strategic Audit</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-label-bold text-sm" htmlFor="message">How can we help?</label>
                <textarea 
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-surface-container-lowest border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your organizational goals..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg text-label-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                Submit Consultation Request
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-caption text-center text-on-surface-variant px-4">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. Your data is protected by institutional-grade encryption.
              </p>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
