import { motion } from "framer-motion";
import samadAction from "@/assets/samad_action_2024.jpg";
import AnimatedCounter from "./AnimatedCounter";

const StatBox = ({ label, value, detail, delay, decimals = 0 }: { label: string; value: number; detail: string; delay: number; decimals?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    className="relative p-10 md:p-14 border border-black/5 bg-white group hover:border-black/20 transition-all duration-700 shadow-lg"
  >
    <div className="absolute inset-0 bg-black/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    <div className="text-6xl md:text-8xl font-heading font-black text-black mb-8 tabular-nums tracking-tighter shimmer-text">
      <AnimatedCounter end={value} decimals={decimals} />
    </div>
    <div className="flex items-center gap-4 mb-6">
      <div className="h-[1px] w-8 bg-black/20 group-hover:w-16 group-hover:bg-black transition-all duration-700" />
      <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.5em] text-black/70 group-hover:text-black transition-colors">
        {label}
      </h3>
    </div>
    <p className="text-[10px] md:text-[11px] text-black/60 font-body font-light leading-loose uppercase tracking-[0.3em] group-hover:text-black/40 transition-colors">
      {detail}
    </p>
  </motion.div>
);

const StatsSection = () => {
  return (
    <section id="stats" className="relative bg-white overflow-hidden">
      {/* Grid Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)", backgroundSize: "clamp(50px, 10vw, 150px) clamp(50px, 10vw, 150px)" }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/3 blur-[200px] pointer-events-none" />

      <div className="section-container relative z-10">
        <header className="max-w-5xl mb-24 md:mb-48 border-l border-black/15 md:pl-20 pl-8 group">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-black/70 font-heading tracking-[1em] uppercase text-[9px] md:text-[10px] mb-10 inline-block font-bold">
              METRICS / THE STERLING SCALE
            </span>
            <h2 className="text-black shimmer-text !text-editorial-mask">
              STATISTICAL <br />
              <span className="text-black/50 group-hover:text-black transition-colors duration-1000 uppercase">LANDSCAPE</span>
            </h2>
          </motion.div>
        </header>

        {/* Primary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 mb-32 md:mb-64 shadow-xl">
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

        {/* Featured Visual: Statistical Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto overflow-hidden group shadow-2xl border border-black/5 bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0 p-8 md:p-12 lg:p-0">
             <div className="lg:col-span-8 overflow-hidden h-64 md:h-[500px] relative">
               <img 
                 src={samadAction} 
                 alt="Samad Fallah Action Shot" 
                 className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-1000" 
               />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90 hidden lg:block" />
             </div>
             
             <div className="lg:col-span-4 lg:-ml-12 relative z-10 lg:pr-12">
               <div className="p-10 md:p-14 border border-black/10 bg-white/95 backdrop-blur-md shadow-2xl">
                 <div className="flex items-center gap-6 mb-8 group-hover:pl-4 transition-all duration-700">
                   <div className="w-2 h-2 bg-black rotate-45" />
                   <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-black/70">DOMINANCE IN MOTION / THE STATISTICAL LANDSCAPE</span>
                 </div>
                 
                 <h3 className="text-3xl md:text-5xl font-heading font-black text-black leading-tight uppercase tracking-tighter mb-8 !text-editorial-mask">
                   DOMINANCE <br />
                   <span className="text-black/50 group-hover:text-black transition-colors duration-1000">IN MOTION</span>
                 </h3>
                 
                 <div className="h-[1px] w-12 bg-black/50 mb-10 group-hover:w-24 group-hover:bg-black transition-all duration-700" />
                 
                 <p className="text-[10px] md:text-[11px] text-black/70 font-body font-light uppercase tracking-[0.3em] leading-loose group-hover:text-black/60 transition-colors duration-700">
                   A SNAPSHOT FROM THE 2024 SEASON. CAPTURING THE PRECISE MOMENT OF RELEASE THAT HAS DISMANTLED 287 RANJI DISMISSALS. 
                   <br /><br />
                   <span className="text-black font-bold">CORE_ARCHIVE: 2024_ACTIVE_SYSTEM.</span>
                 </p>
               </div>
             </div>
          </div>
        </motion.div>
        
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
