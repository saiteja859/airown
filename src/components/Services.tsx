import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, ShieldAlert, ShoppingBag, ArrowUpRight, Thermometer, ShieldCheck, Clock, Gauge } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<'food' | 'medicine' | 'grocery'>('food');

  const services = [
    {
      id: 'food',
      icon: UtensilsCrossed,
      tag: 'OPERATIONAL NOW',
      title: 'Premium Gastronomy',
      subtitle: 'Food Delivery',
      description: 'Partnered with Michelin-starred restaurants and top culinary artisans. Thermal-controlled flight vaults preserve your food at exact cooking temperatures inside sealed carbon modules.',
      timeline: 'Instant (10-15 Mins)',
      badgeColor: 'border-luxury-gold text-luxury-gold bg-luxury-gold/5',
      iconColor: 'text-luxury-gold',
      isLive: true,
      specs: {
        temp: 'Climate Controlled (65°C / 4°C)',
        payload: 'Up to 4.5 kg Cargo',
        speed: '80 km/h Direct Route',
        security: 'Biometric Pin Release',
      }
    },
    {
      id: 'medicine',
      icon: ShieldAlert,
      tag: 'CLINICAL TRIALS — 2027',
      title: 'Med-Tech Express',
      subtitle: 'Medicine Delivery',
      description: 'Secure, climate-regulated delivery for diagnostics, prescriptions, and critical biologicals. Integrated with emergency dispatches to bypass road traffic when seconds save lives.',
      timeline: 'Priority Skyway System',
      badgeColor: 'border-luxury-copper text-luxury-copper bg-luxury-copper/5',
      iconColor: 'text-luxury-copper',
      isLive: false,
      specs: {
        temp: 'Precision Sterile Vault (2°C - 8°C)',
        payload: 'Up to 3.0 kg Medical Vault',
        speed: '95 km/h Emergency Corridor',
        security: 'Encrypted Health Authority Key',
      }
    },
    {
      id: 'grocery',
      icon: ShoppingBag,
      tag: 'IN DEVELOPMENT — 2028',
      title: 'Urban Pantry',
      subtitle: 'Grocery Delivery',
      description: 'Cold-chain transportation of fresh organic harvests and artisan market groceries. Delivered in modular crates that snap directly into your residential landing container.',
      timeline: 'Scheduled Corridors',
      badgeColor: 'border-luxury-titanium text-luxury-graphite bg-luxury-silver/40',
      iconColor: 'text-luxury-graphite',
      isLive: false,
      specs: {
        temp: 'Dual-Zone Cold Compartments',
        payload: 'Up to 6.0 kg Fresh Crates',
        speed: '70 km/h Scheduled Dispatch',
        security: 'Home Landing Dock Snap-Lock',
      }
    },
  ];

  const activeData = services.find(s => s.id === selectedService)!;

  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#F5F5F7] overflow-hidden">
      <div className="absolute inset-0 bg-dots-silver opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-3 block">
              Autonomous Delivery Services
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-luxury-dark leading-tight">
              Bridging Today with the{' '}
              <span className="font-semibold text-gradient-metallic">Logistics of Tomorrow</span>
            </h2>
          </div>
          <p className="text-sm font-light text-luxury-graphite max-w-sm mt-4 md:mt-0 leading-relaxed">
            We are curating a luxury suite of aerial transit solutions. From hot dining to urgent medical items, our skyways elevate your lifestyle.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isSelected = selectedService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
                onClick={() => setSelectedService(service.id as any)}
                className={`group relative flex flex-col justify-between rounded-3xl p-8 cursor-pointer transition-all duration-500 ${
                  isSelected
                    ? 'bg-white shadow-luxury-glow border-2 border-luxury-gold -translate-y-2'
                    : 'glass-card border border-luxury-platinum/50 hover:border-luxury-gold/30 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-8">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.tag}
                    </span>
                    {service.isLive && (
                      <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-luxury-gold"></span>
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`p-4 w-14 h-14 rounded-2xl bg-luxury-silver/50 shadow-sm flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${service.iconColor}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xs font-bold tracking-widest text-luxury-titanium uppercase mb-1">
                    {service.subtitle}
                  </h3>
                  <h4 className="text-2xl font-light text-luxury-dark mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm font-light text-luxury-graphite leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer details */}
                <div className="mt-8 border-t border-luxury-platinum/30 pt-6 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-luxury-titanium block uppercase tracking-widest font-semibold mb-0.5">
                      Class & Velocity
                    </span>
                    <span className="text-sm font-medium text-luxury-dark">
                      {service.timeline}
                    </span>
                  </div>
                  <button className="chrome-reflect relative flex h-10 w-10 items-center justify-center rounded-full bg-luxury-dark text-white shadow-sm group-hover:bg-luxury-gold group-hover:text-luxury-dark transition-colors duration-300">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Specification Inspector */}
        <div className="glass-card-interactive rounded-3xl p-8 border border-luxury-gold/30 shadow-premium">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-luxury-platinum/30 pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-luxury-gold uppercase block">
                TECHNICAL SPECIFICATION INSPECTOR
              </span>
              <h4 className="text-lg font-semibold text-luxury-dark">
                {activeData.title} Specifications
              </h4>
            </div>

            {/* Selector Buttons */}
            <div className="flex items-center gap-2 bg-luxury-silver/50 p-1 rounded-full border border-luxury-platinum/30">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id as any)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    selectedService === s.id
                      ? 'bg-luxury-dark text-white shadow-sm'
                      : 'text-luxury-graphite hover:text-luxury-dark'
                  }`}
                >
                  {s.subtitle}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="p-4 rounded-2xl bg-white/70 border border-luxury-platinum/40">
                <div className="flex items-center gap-2 text-luxury-gold mb-1">
                  <Thermometer size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Temperature</span>
                </div>
                <span className="text-xs font-semibold text-luxury-dark">{activeData.specs.temp}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-luxury-platinum/40">
                <div className="flex items-center gap-2 text-luxury-copper mb-1">
                  <Gauge size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Payload Limit</span>
                </div>
                <span className="text-xs font-semibold text-luxury-dark">{activeData.specs.payload}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-luxury-platinum/40">
                <div className="flex items-center gap-2 text-amber-500 mb-1">
                  <Clock size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Velocity Profile</span>
                </div>
                <span className="text-xs font-semibold text-luxury-dark">{activeData.specs.speed}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-luxury-platinum/40">
                <div className="flex items-center gap-2 text-luxury-graphite mb-1">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Security Lock</span>
                </div>
                <span className="text-xs font-semibold text-luxury-dark">{activeData.specs.security}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
