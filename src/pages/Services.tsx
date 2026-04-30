import { motion } from 'motion/react';
import { 
  BarChart3, 
  Target, 
  Megaphone, 
  PenTool, 
  Code, 
  MessageSquare, 
  Workflow, 
  Globe2 
} from 'lucide-react';

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
      ]
    },
    {
      id: 'bpo',
      title: 'BPO & Operations',
      items: [
        { title: 'Customer Support', icon: MessageSquare, desc: '24/7 multi-lingual support across voice, chat, and email channels.' },
        { title: 'Process Automation', icon: Workflow, desc: 'Identifying and automating redundant tasks to maximize efficiency.' },
        { title: 'Web Development', icon: Code, desc: 'Scalable infrastructure and application maintenance for digital growth.' },
        { title: 'Global Compliance', icon: Globe2, desc: 'Navigating international data laws and industry-specific regulations.' },
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full py-20 px-4 md:px-8 max-w-[1280px] mx-auto min-h-[80vh]"
    >
      <div className="mb-20 text-center max-w-2xl mx-auto">
        <h1 className="mb-6">Global Solutions for Global Enterprise</h1>
        <p className="text-body-lg text-on-surface-variant">
          We offer a comprehensive suite of services that integrate seamlessly into your existing operations, providing the stability and scale your brand requires.
        </p>
      </div>

      <div className="space-y-32">
        {serviceCategories.map((category, catIdx) => (
          <div key={category.id} className="relative">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-on-surface">{category.title}</h2>
              <div className="flex-1 h-[1px] bg-outline-variant"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.items.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 + catIdx * 0.1 }}
                  className="p-8 border border-outline-variant rounded-xl bg-white hover:shadow-lg transition-all"
                >
                  <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-primary">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-body-lg font-bold mb-4">{service.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trust Quote */}
      <section className="mt-32 p-12 bg-surface-container rounded-3xl border border-outline-variant text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl font-medium text-on-surface italic mb-8">
            "Primelink didn't just rebuild our marketing funnel; they transformed our entire approach to operational scaling. Their methodology is institutional-grade."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20"></div>
            <div className="text-left">
              <p className="text-label-bold">Marcus Sterling</p>
              <p className="text-caption">CTO, Global Tech Holdings</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
