import { motion } from 'motion/react';
import { Network, Shield, TrendingUp, Globe, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Global Offices', value: '12+', icon: Globe },
    { label: 'Campaigns', value: '450+', icon: TrendingUp },
    { label: 'Client Retention', value: '98%', icon: Users },
    { label: 'Support', value: '24/7', icon: Clock },
  ];

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
        <link rel="canonical" href="https://www.primelinkmktg.com/" />
        <meta property="og:title" content="Primelink Marketing Solution LLC | Global BPO & Marketing Agency" />
        <meta property="og:description" content="Institutional-grade integrated marketing and BPO solutions. 450+ campaigns, 98% client retention, 24/7 global support." />
        <meta property="og:url" content="https://www.primelinkmktg.com/" />
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

        {/* Global Reach */}
        <section className="py-16 md:py-24 bg-white overflow-hidden" id="home-global" aria-labelledby="global-heading">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
              <div className="w-full md:w-1/2">
                <h2 id="global-heading" className="text-on-surface mb-4 text-2xl md:text-3xl font-bold">Global Reach, Local Expertise</h2>
                <p className="text-base text-on-surface-variant mb-8">
                  With strategic hubs across three continents, we provide around-the-clock excellence for brands that operate without borders.
                </p>
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-4">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5">{stat.value}</div>
                      <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden relative">
                  <img
                    alt="Aerial satellite view of Earth showing global network connections"
                    className="w-full h-64 md:h-96 object-cover opacity-80"
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                    referrerPolicy="no-referrer" loading="lazy" width="1000" height="384"
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                </div>
              </div>
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
