import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const values = [
    { title: 'Integrity', desc: 'Uncompromising adherence to professional standards and ethical conduct in every engagement.' },
    { title: 'Agility', desc: 'The speed of a startup with the reliability of an institution. We adapt to market shifts in real-time.' },
    { title: 'Excellence', desc: 'Continuous optimization is not a goal; it is our baseline operational requirement.' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Primelink Marketing Solution LLC</title>
        <meta name="description" content="Learn about Primelink Marketing Solution LLC — a global leader in integrated marketing and BPO solutions with offices in Chicago, London, and Singapore." />
        <link rel="canonical" href="https://www.primelinkmkt.com/about" />
        <meta property="og:title" content="About Us | Primelink Marketing Solution LLC" />
        <meta property="og:description" content="Founded to bridge legacy business models with the digital-first economy. 10+ years of excellence in global marketing and BPO." />
        <meta property="og:url" content="https://www.primelinkmkt.com/about" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="flex flex-col w-full py-14 md:py-20 px-4 md:px-8 max-w-[1280px] mx-auto"
      >
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">Our Story</span>
            <h1 className="mb-6 text-3xl md:text-4xl font-extrabold">Merging Tradition with Innovation</h1>
            <p className="text-base text-on-surface-variant mb-4">
              Founded with the vision of bridging the gap between legacy business models and the digital-first economy, Primelink Marketing Solution LLC has evolved into a global leader in integrated marketing and BPO solutions.
            </p>
            <p className="text-base text-on-surface-variant">
              We believe that true business excellence is found at the intersection of robust data science and human-centric operational design.
            </p>
          </div>

          {/* Image grid — hidden on small, shown on md+ */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-10">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                className="rounded-xl object-cover h-56 w-full"
                alt="Professional team in a boardroom strategy session"
                loading="lazy" width="800" height="224"
              />
              <div className="bg-primary rounded-xl flex items-center justify-center p-6 aspect-video">
                <p className="text-white text-3xl font-bold italic">10+</p>
                <p className="text-white/80 ml-2 text-sm">Years of Excellence</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-outline-variant aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
                  className="object-cover h-full w-full"
                  alt="Collaborative team working together in a bright modern office"
                  loading="lazy" width="800" height="800"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
                className="rounded-xl object-cover h-40 w-full"
                alt="Sleek minimalist corporate office interior"
                loading="lazy" width="800" height="160"
              />
            </div>
          </div>

          {/* Single image on mobile */}
          <div className="md:hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
              className="rounded-xl object-cover w-full h-56"
              alt="Professional team in a boardroom strategy session"
              loading="lazy" width="800" height="224"
            />
          </div>
        </div>

        {/* Values */}
        <section className="mb-20 md:mb-32" aria-labelledby="values-heading">
          <div className="text-center mb-10 md:mb-16">
            <h2 id="values-heading" className="mb-3 text-2xl md:text-3xl font-bold">Our Core Values</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-sm md:text-base">
              The principles that guide every strategic decision and operational workflow we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-8 border border-outline-variant rounded-2xl bg-white text-center">
                <div className="text-5xl font-black text-primary/10 mb-4 uppercase" aria-hidden="true">{v.title.slice(0, 1)}</div>
                <h3 className="mb-3 font-bold text-lg">{v.title}</h3>
                <p className="text-on-surface-variant text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Footprint */}
        <section className="bg-surface-container-low p-8 md:p-16 rounded-3xl border border-outline-variant" aria-labelledby="footprint-heading">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 id="footprint-heading" className="mb-4 text-2xl md:text-3xl font-bold">Global Footprint</h2>
              <p className="text-base text-on-surface-variant mb-6">
                With offices in Chicago, London, and Singapore, we support our clients across all time zones. Our distributed workforce model ensures we attract and retain the best talent regardless of geography.
              </p>
              <div className="space-y-3">
                {['North America Hub', 'EMEA Headquarters', 'APAC Operations'].map((locale, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    <span className="font-bold text-sm">{locale}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1000"
                alt="Dramatic glass skyscraper facade representing Primelink global headquarters"
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy" width="1000" height="384"
              />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
