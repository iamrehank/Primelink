import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PhoneCall, HeadphonesIcon, MousePointerClick, Users, Share2, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: PhoneCall,
    title: 'Call Centre Support',
    desc: 'Primebridge is a full-service Sales and Support provider catering to all our US-based clients. We deliver specialized services and sustainable business solutions, making outsourcing the ideal choice due to its cost-effectiveness and focus on digital services that attract premium and genuine customers nationwide.',
    detail: 'Our clientele ranges from Fortune 500 companies to top-class service providers, all with an overall ranking above 9 out of 10. Our experienced team excels in driving calls towards your business, ensuring optimal results.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer Service',
    desc: 'Primebridge offers the best customer service to all our clients, as compliance in this industry is key and a valuable asset. We commit to maintaining a market quality of 90% and above with a dedicated team providing real-time feedback to all support staff.',
    detail: 'We prioritize exceptional customer service as we understand how important it is for any company to understand their customers\' requirements. The customer\'s journey is essential to us, and their success is our overall organization\'s success.',
  },
  {
    icon: MousePointerClick,
    title: 'Pay Per Click',
    desc: 'Our clients leverage top-notch SEO strategies alongside Google, Facebook, and Instagram marketing to captivate the attention of potential customers seeking services. We play a pivotal role in providing valuable data insights, expert advice, and facilitating product sales.',
    detail: 'By employing robust SEO techniques and strategically advertising on Google, Facebook, and Instagram, our clients successfully engage their target audience — empowering them to flourish in the digital landscape.',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    desc: 'All our clients operate call centers within the US markets, allowing us to generate leads and seamlessly transfer them to their respective US-based teams. Leads are the lifeblood of any business — driving growth and prosperity.',
    detail: 'Acquiring the right leads translates to increased potential sales, higher profits, and enhanced customer loyalty. We serve as an indispensable extension to some of the world\'s largest and most successful companies.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Social media platforms facilitate the creation of a community of fans and followers who perceive your brand as more than just a business entity. Unlike traditional channels, social media enables two-way conversation — building trust that converts.',
    detail: 'By integrating social media into marketing efforts, businesses can maintain relevance, adapt to changing trends, and stay closely connected with their audience in an ever-evolving digital landscape.',
  },
  {
    icon: TrendingUp,
    title: 'Inbound Traffic',
    desc: 'The traffic built through social media and marketing is generated and integrated by our inbound channel. Inbound traffic is always easier and more effective than outbound cold calling, delivering higher-quality customer interactions.',
    detail: 'With Inbound Traffic, you can connect with your target audience in a non-intrusive manner, allowing them to reach out to you on their own terms — boosting conversion rates and enhancing your brand\'s reputation.',
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Primelink Marketing Solution LLC</title>
        <meta name="description" content="Primebridge delivers high-fidelity BPO and digital marketing strategies — Call Centre Support, Customer Service, PPC, Lead Generation, Social Media, and Inbound Traffic." />
        <link rel="canonical" href="https://www.primelinkmktg.com/services" />
        <meta property="og:title" content="Our Services | Primelink Marketing Solution LLC" />
        <meta property="og:description" content="Strategic BPO and digital marketing solutions: Call Centre Support, Customer Service, PPC, Lead Generation, Social Media, and Inbound Traffic." />
        <meta property="og:url" content="https://www.primelinkmktg.com/services" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="flex flex-col w-full"
      >
        {/* Hero */}
        <section className="bg-primary py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-[1280px] mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="inline-block text-white/70 text-xs font-bold uppercase tracking-widest mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            >
              Strategic Solutions for Modern Enterprise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/75 text-base md:text-lg max-w-2xl mx-auto"
            >
              Primebridge delivers high-fidelity business process outsourcing and digital marketing strategies tailored for institutional growth and operational excellence.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low" aria-label="Our services">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, idx) => (
                <motion.article
                  key={idx}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="bg-white rounded-2xl border border-outline-variant p-7 md:p-8 flex flex-col hover:shadow-xl hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors flex-shrink-0">
                    <service.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="font-extrabold text-lg md:text-xl text-on-surface mb-3">{service.title}</h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{service.desc}</p>
                  <p className="text-sm text-on-surface-variant/80 leading-relaxed border-t border-outline-variant pt-4 mt-auto">{service.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-20 px-4 md:px-8 bg-white border-t border-outline-variant">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-2">Ready to scale your operations?</h2>
              <p className="text-on-surface-variant text-base">Let's build a strategy tailored to your business goals.</p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </motion.div>
    </>
  );
}
