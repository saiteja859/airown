import { motion } from 'framer-motion';
import { MapPin, Globe2, Heart, Award } from 'lucide-react';

export default function Roadmap() {
  const milestones = [
    {
      year: '2026',
      phase: 'PHASE 01',
      title: 'Gastronomy Skyways',
      service: 'Food Delivery',
      desc: 'Active launch of city-wide hot-food aerial networks in selected metropolitan centers. Integrating directly with culinary collectives and luxury dining services.',
      status: 'Active Deployment',
      icon: Award,
      color: 'border-luxury-blue text-luxury-blue',
    },
    {
      year: '2027',
      phase: 'PHASE 02',
      title: 'Clinical Diagnostics Corridor',
      service: 'Medicine Delivery',
      desc: 'Expanding networks to support medical centers, pharmacies, and emergency supplies. Delivering diagnostic samples and therapeutics under secure temperature control.',
      status: 'Beta Testing',
      icon: Heart,
      color: 'border-luxury-copper text-luxury-copper',
    },
    {
      year: '2028',
      phase: 'PHASE 03',
      title: 'Integrated Fresh Pantry',
      service: 'Grocery Delivery',
      desc: 'Enabling on-demand grocery and market transport. Custom cargo lockers fitting directly into residential rooftop landing containers.',
      status: 'In Development',
      icon: MapPin,
      color: 'border-luxury-graphite text-luxury-graphite',
    },
    {
      year: 'FUTURE',
      phase: 'PHASE 04',
      title: 'Autonomous Logistics Fabric',
      service: 'Global Network',
      desc: 'Connecting cities globally with complete high-altitude freight pathways and localized skyway routing for a fully autonomous shipping structure.',
      status: 'Strategic Vision',
      icon: Globe2,
      color: 'border-luxury-titanium text-luxury-titanium',
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-radial-gradient from-luxury-silver/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] bg-radial-gradient from-luxury-blueLight/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="text-sm font-semibold uppercase tracking-widest text-luxury-blue mb-3 block">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-luxury-dark leading-tight">
            Charting the <span className="font-semibold text-gradient-metallic">Decade Ahead</span>
          </h2>
          <p className="text-base font-light text-luxury-graphite max-w-sm mx-auto mt-4 leading-relaxed">
            Our systematic expansion plan ensures safe, reliable, and thorough scaling across diverse cargo delivery segments.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-16 md:space-y-24 relative">
          
          {milestones.map((milestone, idx) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row gap-8 items-start relative group"
              >
                {/* Year Indicator Column */}
                <div className="w-full md:w-1/4 flex flex-row md:flex-col justify-between items-baseline md:items-start border-b md:border-b-0 border-luxury-platinum/40 pb-4 md:pb-0">
                  <span className="text-5xl md:text-7xl font-extralight tracking-tighter text-luxury-platinum transition-colors duration-500 group-hover:text-luxury-blue select-none font-sans">
                    {milestone.year}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-luxury-titanium uppercase mt-1">
                    {milestone.phase}
                  </span>
                </div>

                {/* Vertical Divider line */}
                <div className="hidden md:flex flex-col items-center h-full pt-4">
                  <div className={`p-1.5 rounded-full border-2 bg-white ${milestone.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={14} strokeWidth={2} />
                  </div>
                </div>

                {/* Content Card Column */}
                <div className="w-full md:w-3/4">
                  <div className="glass-card rounded-3xl p-8 border border-luxury-platinum/40 group-hover:border-luxury-blue/30 group-hover:shadow-luxury-glow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-xs font-bold text-luxury-blue uppercase tracking-widest block mb-0.5">
                          {milestone.service}
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold text-luxury-dark">
                          {milestone.title}
                        </h3>
                      </div>
                      <span className="self-start sm:self-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-luxury-silver/80 border border-luxury-platinum/40 text-luxury-graphite">
                        {milestone.status}
                      </span>
                    </div>

                    <p className="text-base font-light text-luxury-graphite leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
