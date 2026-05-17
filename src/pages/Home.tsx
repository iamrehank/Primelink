import { motion } from 'motion/react';
import { Network, Shield, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Strategic Connection',
      desc: 'We bridge disconnected workflows into a unified strategy, ensuring every marketing dollar is aligned with your core operational objectives.',
      icon: Network,
    },
    {
      title: 'Unwavering Strength',
      desc: 'Built on institutional stability and compliance, providing the security needed to scale your operations fearlessly.',
      icon: Shield,
    },
    {
      title: 'Dynamic Growth',
      desc: 'Our data-driven engines deliver consistent and measurable growth across multiple digital channels.',
      icon: TrendingUp,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Primelink Marketing Solution LLC | Global BPO & Marketing Agency</title>
        <meta name="description" content="Primelink Marketing Solution LLC delivers institutional-grade integrated marketing and BPO solutions across 12+ global offices. 450+ campaigns, 98% client retention." />
        <link rel="canonical" href="https://www.primelinkmkt.com/" />
        <meta property="og:title" content="Primelink Marketing Solution LLC | Global BPO & Marketing Agency" />
        <meta property="og:description" content="Institutional-grade integrated marketing and BPO solutions. 450+ campaigns, 98% client retention, 24/7 global support." />
        <meta property="og:url" content="https://www.primelinkmkt.com/" />
      </Helmet>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col w-full">

        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-28" id="home-hero">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }} className="z-10 order-2 md:order-1"
            >
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">Institutional Excellence</span>
              <h1 className="text-on-surface mb-5 leading-tight text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Bridging the Gap to Business Excellence
              </h1>
              <p className="text-base text-on-surface-variant mb-8 max-w-lg">
                Primelink Marketing Solution LLC combines corporate stability with agile, data-driven energy to transform your business processes with surgical precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-primary-container text-on-primary px-7 py-3.5 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-center"
                >
                  Partner With Us
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="border border-outline-variant text-on-surface px-7 py-3.5 rounded-lg font-bold hover:bg-surface-container transition-all text-center"
                >
                  View Solutions
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative group order-1 md:order-2"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
              <img
                alt="Modern corporate office with collaborative workspace"
                className="relative rounded-xl shadow-2xl border border-outline-variant w-full h-56 sm:h-80 md:h-[460px] object-cover"
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
                referrerPolicy="no-referrer" loading="eager" width="1200" height="460"
              />
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-surface-container-low" id="home-why-us" aria-labelledby="why-us-heading">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 id="why-us-heading" className="text-on-surface mb-3 text-2xl md:text-3xl font-bold">Why Choose Us</h2>
              <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
                Delivering unparalleled value through a rigorous methodology designed for global marketing and BPO operations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 md:p-8 border border-outline-variant rounded-xl hover:border-primary transition-colors flex flex-col group"
                >
                  <div className="bg-primary/10 w-11 h-11 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <item.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="mb-3 font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do — creative alternating feature strip */}
        <section className="py-16 md:py-24 bg-white overflow-hidden" id="home-what-we-do">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">What We Do</span>
              <h2 className="text-on-surface text-2xl md:text-3xl font-bold mb-3">Built for Results, Designed for Scale</h2>
              <p className="text-on-surface-variant text-sm md:text-base max-w-xl mx-auto">
                Every solution we deliver is engineered to drive measurable outcomes — from the first touchpoint to long-term retention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large feature card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden md:row-span-2 min-h-[320px] md:min-h-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900"
                  alt="Team collaborating on strategy"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 block">Our Approach</span>
                  <h3 className="text-white text-xl md:text-2xl font-extrabold mb-2">People-First, Data-Driven</h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                    We combine human expertise with intelligent systems to deliver BPO and marketing solutions that consistently outperform industry benchmarks.
                  </p>
                </div>
              </motion.div>

              {/* Top-right card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden min-h-[200px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
                  alt="Digital marketing team at work"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-lg font-extrabold mb-1">Digital Marketing</h3>
                  <p className="text-white/75 text-sm">PPC, Social Media & Lead Generation that converts.</p>
                </div>
              </motion.div>

              {/* Bottom-right card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden min-h-[200px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
                  alt="Call centre support team"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-lg font-extrabold mb-1">BPO & Call Centre</h3>
                  <p className="text-white/75 text-sm">24/7 US-based support with 90%+ quality compliance.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary" id="home-cta">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
            <h2 className="text-white mb-4 text-2xl md:text-3xl font-bold">Ready to Optimize Your Growth?</h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
              Join hundreds of market-leading companies that leverage our BPO and marketing expertise to stay ahead of the competition.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold shadow-xl hover:bg-surface-container-lowest transition-all hover:scale-105"
            >
              Schedule a Strategic Audit
            </button>
          </div>
        </section>
      </motion.div>
    </>
  );
}
