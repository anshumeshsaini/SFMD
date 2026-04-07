import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const StatBox = ({ label, value, detail, delay, decimals = 0 }: { label: string; value: number; detail: string; delay: number; decimals?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    className="relative p-10 md:p-14 border border-white/5 bg-white/[0.01] backdrop-blur-2xl group hover:border-accent/40 transition-all duration-700 shadow-2xl"
  >
    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    <div className="text-6xl md:text-8xl font-heading font-black text-white mb-8 tabular-nums tracking-tighter shimmer-text">
       <AnimatedCounter end={value} decimals={decimals} />
    </div>
    <div className="flex items-center gap-4 mb-6">
       <div className="h-[1px] w-8 bg-accent/40 group-hover:w-16 group-hover:bg-accent transition-all duration-700" />
       <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.5em] text-accent/60 group-hover:text-white transition-colors">
         {label}
       </h3>
    </div>
    <p className="text-[10px] md:text-[11px] text-white/30 font-body font-light leading-loose uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">
      {detail}
    </p>
  </motion.div>
);

const StatsSection = () => {
  return (
    <section id="stats" className="relative bg-[#020406] overflow-hidden">
      {/* Cinematic Grid Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "clamp(50px, 10vw, 150px) clamp(50px, 10vw, 150px)" }} />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[200px] pointer-events-none" />

      <div className="section-container relative z-10">
        <header className="max-w-5xl mb-24 md:mb-48 border-l border-accent/20 md:pl-20 pl-8 group">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent/60 font-heading tracking-[1em] uppercase text-[9px] md:text-[10px] mb-10 inline-block font-bold">
              METRICS / THE STERLING SCALE
            </span>
            <h2 className="text-white shimmer-text !text-editorial-mask">
              STATISTICAL <br />
              <span className="text-white/20 group-hover:text-white transition-colors duration-1000 uppercase">LANDSCAPE</span>
            </h2>
          </motion.div>
        </header>

        {/* Primary Stats: Sequential Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-32 md:mb-64 shadow-2xl">
          <StatBox 
             label="FIRST CLASS / RECORD" 
             value={287} 
             detail="A MONSTROUS 12-SEASON CAREER IN THE RANJI TROPHY, LEADING MAHARASHTRA'S PACE ATTACK WITH SURGICAL PRECISION." 
             delay={0.1}
          />
          <StatBox 
             label="MAINTENANCE / AVG" 
             value={28.48} 
             decimals={2}
             detail="CONSISTENCY AT THE HIGHEST LEVEL. MAINTAINING AN ELITE PERFORMANCE DELTA OVER 78 MATCHES ON DIVERSE WICKETS." 
             delay={0.2}
          />
          <StatBox 
             label="MAX / BBI" 
             value={8.69} 
             decimals={2}
             detail="BEST BOWLING IN INNINGS: 8/69. A MASTERCLASS IN SWING DISRUPTION THAT DISMANTLED ELITE TOP-ORDER SYSTEMS." 
             delay={0.3}
          />
        </div>

        {/* Analytical Visualization Aspects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start">
          <div className="lg:col-span-8">
            <motion.div 
               initial={{ opacity: 0, y: 30 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="p-8 md:p-16 border border-white/10 bg-white/[0.01] backdrop-blur-2xl shadow-2xl group"
            >
              <h3 className="font-heading text-lg md:text-xl font-black text-white mb-16 tracking-[0.2em] uppercase !text-editorial-mask">COMPARATIVE DISRUPTION SCALE</h3>
              <div className="space-y-20">
                {[
                  { name: "JAYDEV UNADKAT", value: 316, total: 350, opacity: 0.2 },
                  { name: "SAMAD FALLAH / SUBJECT CORE", value: 287, total: 350, opacity: 1, isSubject: true },
                ].map((item, i) => (
                  <div key={item.name} className="group/item">
                    <div className="flex justify-between items-end mb-6">
                      <div className="flex flex-col gap-2">
                        <span className={`font-heading text-[9px] md:text-[10px] uppercase font-bold tracking-[0.5em] transition-colors duration-500 ${item.isSubject ? "text-accent" : "text-white/30"}`}>
                          {item.name}
                        </span>
                        <div className={`h-[1px] ${item.isSubject ? "w-12 bg-accent/40" : "w-6 bg-white/10"}`} />
                      </div>
                      <span className={`text-4xl md:text-5xl font-heading font-black transition-all duration-500 ${item.isSubject ? "text-white shimmer-text" : "text-white/20"}`}>
                        {item.value}
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                       <motion.div 
                         initial={{ scaleX: 0 }}
                         whileInView={{ scaleX: 1 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.8 + (i * 0.2), duration: 2, ease: [0.16, 1, 0.3, 1] }}
                         className={`h-full origin-left ${item.isSubject ? "bg-accent shadow-[0_0_20px_rgba(77,119,255,0.8)]" : "bg-white"}`}
                         style={{ opacity: item.opacity }}
                       />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-16 text-[9px] text-white/10 uppercase tracking-[0.4em] leading-loose">
                * GLOBAL DATASET: CUMULATIVE RANJI TROPHY WICKETS FOR LEFT-ARM PACE ASSETS.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-12">
             {[
               { 
                 label: "PEDIGREE / LEAGUE", 
                 title: "RAJASTHAN ROYALS", 
                 desc: "PART OF THE PRESTIGIOUS RR SQUAD (2011-2013). HONING SKILLS AMONG GLOBAL LEGENDS AT THE LEAGUE'S PEAK." 
               },
               { 
                 label: "CAPS / DURABILITY", 
                 title: "78 FIRST CLASS", 
                 desc: "PHYSICAL RESILIENCE AUDIT: SPEARHEADING THE ATTACK OVER A DECADE OF UNINTERRUPTED DOMINANCE." 
               }
             ].map((item, i) => (
               <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.2) }}
                  className="p-10 md:p-14 border border-white/10 group hover:border-accent/40 bg-white/[0.01] backdrop-blur-3xl transition-all duration-700 shadow-xl"
               >
                  <div className="flex items-center gap-6 mb-8 mt-2">
                     <div className="w-1.5 h-1.5 bg-accent group-hover:rotate-45 transition-transform duration-500" />
                     <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.6em] text-white/30 group-hover:text-accent transition-colors">
                       {item.label}
                     </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter shimmer-text">
                    {item.title.split(' ').map((word, idx) => (
                      <span key={idx} className={idx > 0 && idx === item.title.split(' ').length - 1 ? "text-white/20 group-hover:text-white transition-colors duration-1000" : ""}>
                        {word} {idx === 0 && item.title.split(' ').length > 1 ? <br /> : ""}
                      </span>
                    ))}
                  </h3>
                  <div className="mt-8 h-px w-8 bg-white/10 group-hover:w-16 group-hover:bg-accent transition-all duration-700" />
                  <p className="text-white/30 font-body font-light text-[11px] mt-8 leading-loose uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">
                     {item.desc}
                  </p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
