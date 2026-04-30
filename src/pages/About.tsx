import { motion } from 'motion/react';

export default function About() {
  const values = [
    { title: 'Integrity', desc: 'Uncompromising adherence to professional standards and ethical conduct in every engagement.' },
    { title: 'Agility', desc: 'The speed of a startup with the reliability of an institution. We adapt to market shifts in real-time.' },
    { title: 'Excellence', desc: 'Continuous optimization is not a goal; it is our baseline operational requirement.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full py-20 px-4 md:px-8 max-w-[1280px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <span className="text-primary text-label-bold uppercase tracking-widest mb-4 block">Our Story</span>
          <h1 className="mb-8">Merging Tradition with Innovation</h1>
          <p className="text-body-lg text-on-surface-variant mb-6">
            Founded with the vision of bridging the gap between legacy business models and the digital-first economy, Primelink Marketing Solution LLC has evolved into a global leader in integrated marketing and BPO solutions.
          </p>
          <p className="text-body-lg text-on-surface-variant">
            We believe that true business excellence is found at the intersection of robust data science and human-centric operational design.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
              className="rounded-xl object-cover h-64 w-full"
              alt="Team meeting"
            />
            <div className="bg-primary aspect-video rounded-xl flex items-center justify-center p-8">
              <p className="text-white text-3xl font-bold italic">10+</p>
              <p className="text-white/80 ml-2">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-4">
             <div className="bg-surface-container-high aspect-square rounded-xl flex items-center justify-center p-8 border border-outline-variant">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                className="rounded-xl object-cover h-full w-full"
                alt="Collaboration"
              />
            </div>
             <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
              className="rounded-xl object-cover h-48 w-full"
              alt="Office space"
            />
          </div>
        </div>
      </div>

      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Core Values</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">The principles that guide every strategic decision and operational workflow we undertake.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="p-10 border border-outline-variant rounded-2xl bg-white text-center">
              <div className="text-5xl font-black text-primary/10 mb-6 uppercase">{v.title.slice(0,1)}</div>
              <h3 className="mb-4">{v.title}</h3>
              <p className="text-on-surface-variant">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low p-16 rounded-3xl border border-outline-variant">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           <div className="lg:w-1/2">
            <h2 className="mb-6">Global Footprint</h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              With offices in Chicago, London, and Singapore, we are positioned to support our clients across all time zones. Our distributed workforce model ensures that we attract and retain the best talent regardless of geography.
            </p>
            <div className="space-y-4">
              {['North America Hub', 'EMEA Headquarters', 'APAC Operations'].map((locale, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-label-bold">{locale}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
             <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
              alt="Corporate building"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
