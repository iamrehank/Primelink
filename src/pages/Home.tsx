import { motion } from 'motion/react';
import { Network, Shield, TrendingUp, Globe, Users, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: any) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const stats = [
    { label: 'Global Offices', value: '12+', icon: Globe },
    { label: 'Campaigns', value: '450+', icon: TrendingUp },
    { label: 'Client Retention', value: '98%', icon: Users },
    { label: 'Operational Support', value: '24/7', icon: Clock },
  ];

  const features = [
    {
      title: 'Strategic Connection',
      desc: 'We bridge disconnected workflows into a unified strategy, ensuring every marketing dollar spent is aligned with your core operational objectives.',
      icon: Network,
    },
    {
      title: 'Unwavering Strength',
      desc: 'Built on a foundation of institutional stability and compliance, providing you with the security needed to scale your operations fearlessly.',
      icon: Shield,
    },
    {
      title: 'Dynamic Growth',
      desc: 'Our data-driven engines are tuned for performance, delivering consistent and measurable growth across multiple digital channels.',
      icon: TrendingUp,
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-32" id="home-hero">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="text-primary text-label-bold uppercase tracking-widest mb-4 block">Institutional Excellence</span>
            <h1 className="text-on-surface mb-6 leading-tight">
              Bridging the Gap to Business Excellence
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg">
              Primelink Marketing Solution LLC combines corporate stability with agile, data-driven energy to transform your business processes with surgical precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-primary-container text-on-primary px-8 py-4 rounded-lg text-label-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
              >
                Partner With Us
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="border border-outline-variant text-on-surface px-8 py-4 rounded-lg text-label-bold hover:bg-surface-container transition-all"
              >
                View Solutions
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
            <img 
              alt="Modern corporate office" 
              className="relative rounded-xl shadow-2xl border border-outline-variant w-full h-[300px] md:h-[500px] object-cover" 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low" id="home-why-us">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-on-surface mb-4">Why Choose Us</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Delivering unparalleled value through a rigorous methodology designed for the complexities of global marketing and BPO operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 border border-outline-variant rounded-xl hover:border-primary transition-colors flex flex-col h-full group"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-white overflow-hidden" id="home-global">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-on-surface mb-6">Global Reach, Local Expertise</h2>
              <p className="text-body-lg text-on-surface-variant mb-12">
                With strategic hubs across three continents, we provide around-the-clock excellence for brands that operate without borders.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-6">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-label-bold text-on-surface-variant uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="p-8 bg-surface border border-outline-variant rounded-xl aspect-square flex items-center justify-center relative overflow-hidden">
                 <img 
                  alt="World Map" 
                  className="w-full h-full object-contain opacity-80" 
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-on-primary" id="home-cta">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Optimize Your Growth?</h2>
          <p className="text-on-primary-container text-body-lg max-w-2xl mx-auto mb-10">
            Join hundreds of market-leading companies that leverage our BPO and marketing expertise to stay ahead of the competition.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-primary px-10 py-5 rounded-lg text-label-bold shadow-xl hover:bg-surface-container-lowest transition-all hover:scale-105"
          >
            Schedule a Strategic Audit
          </button>
        </div>
      </section>
    </motion.div>
  );
}
