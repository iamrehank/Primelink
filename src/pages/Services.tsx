import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Target, Megaphone, PenTool, Code, MessageSquare, Workflow, Globe2 } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      id: 'marketing',
      title: 'Integrated Marketing',
      items: [
        { title: 'Data-Driven Strategy', icon: Target, desc: 'Holistic planning focused on performance metrics and conversion optimization.' },
        { title: 'Digital Advertising', icon: Megaphone, desc: 'Omni-channel campaigns managed through advanced programmatic buying.' },
        { title: 'Content & Branding', icon: PenTool, desc: 'Elevating your brand voice with high-impact creative and visual design.' },
        { title: 'Performance Analytics', icon: BarChart3, desc: 'Deep-dive reporting that turns raw data into actionable business intelligence.' },
      ],
    },
    {
      id: 'bpo',
      title: 'BPO & Operations',
      items: [
        { title: 'Customer Support', icon: MessageSquare, desc: '24/7 multi-lingual support across voice, chat, and email channels.' },
        { title: 'Process Automation', icon: Workflow, desc: 'Identifying and automating redundant tasks to maximize efficiency.' },
        { title: 'Web Development', icon: Code, desc: 'Scalable infrastructure and application maintenance for digital growth.' },
        { title: 'Global Compliance', icon: Globe2, desc: 'Navigating international data laws and industry-specific regulations.' },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Primelink Marketing Solution LLC</title>
        <meta name="description" content="Explore Primelink's full suite of integrated marketing and BPO services — data-driven strategy, digital advertising, customer support, process automation, and global compliance." />
        <link rel="canonical" href="https://www.primelinkmktg.com/services" />
        <meta property="og:title" content="Our Services | Primelink Marketing Solution LLC" />
        <meta property="og:description" content="Integrated marketing and BPO services: data-driven strategy, digital advertising, content & branding, customer support, process automation, and more." />
        <meta property="og:url" content="https://www.primelinkmktg.com/services" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="flex flex-col w-full py-14 md:py-20 px-4 md:px-8 max-w-[1280px] mx-auto"
      >
        <div className="mb-14 md:mb-20 text-center max-w-2xl mx-auto">
          <h1 className="mb-4 text-3xl md:text-4xl font-extrabold">Global Solutions for Global Enterprise</h1>
          <p className="text-base text-on-surface-variant">
            A comprehensive suite of services that integrate seamlessly into your existing operations, providing the stability and scale your brand requires.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {serviceCategories.map((category, catIdx) => (
            <section key={category.id} aria-labelledby={`cat-${category.id}`}>
              <div className="flex items-center gap-4 mb-8 md:mb-12">
                <h2 id={`cat-${category.id}`} className="text-on-surface font-bold text-xl md:text-2xl whitespace-nowrap">{category.title}</h2>
                <div className="flex-1 h-px bg-outline-variant" aria-hidden="true" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
                {category.items.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: idx * 0.05 + catIdx * 0.1 }}
                    className="p-6 md:p-8 border border-outline-variant rounded-xl bg-white hover:shadow-lg transition-all"
                  >
                    <div className="bg-primary/5 w-11 h-11 rounded-lg flex items-center justify-center mb-5 text-primary" aria-hidden="true">
                      <service.icon size={24} />
                    </div>
                    <h3 className="font-bold text-base mb-3">{service.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Testimonial */}
        <section className="mt-20 md:mt-32 p-8 md:p-12 bg-surface-container rounded-3xl border border-outline-variant text-center" aria-label="Client testimonial">
          <div className="max-w-3xl mx-auto">
            <blockquote>
              <p className="text-lg md:text-2xl font-medium text-on-surface italic mb-6">
                "Primelink didn't just rebuild our marketing funnel; they transformed our entire approach to operational scaling. Their methodology is institutional-grade."
              </p>
              <footer className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex-shrink-0" aria-hidden="true" />
                <cite className="not-italic text-left">
                  <p className="font-bold text-sm">Marcus Sterling</p>
                  <p className="text-xs text-on-surface-variant">CTO, Global Tech Holdings</p>
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>
      </motion.div>
    </>
  );
}
