import { motion } from "framer-motion";

const timelineData = [
  { year: "2007", title: "THE RAW ENTRY", desc: "A 22-year-old with no age-group background. A 'tennis-ball' legend stepping into the First Class arena." },
  { year: "2010", title: "NATIONAL ECHO", desc: "A match-winning 4-wicket haul in the SMAT Final. The nation finally hears the name: Samad Fallah." },
  { year: "2014", title: "THE APEX", desc: "Ranji Trophy Final. 7 wickets against Bengal. A masterclass in the art of the moving ball." },
  { year: "2024", title: "THE HERITAGE", desc: "Retiring as Maharashtra's highest Ranji wicket-taker. 287 wickets. An era ends." },
];

const TimelineItem = ({ item, index }: { item: typeof timelineData[0]; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center mb-32 md:mb-64 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Year as a massive background element - scaled down on mobile */}
      <div className={`absolute -top-12 md:-top-32 pointer-events-none z-0 ${isEven ? "left-0" : "right-0"} opacity-[0.02] md:opacity-[0.03]`}>
        <span className="text-[8rem] md:text-[22rem] font-heading font-black text-white select-none leading-none tracking-tighter shimmer-text">
          {item.year}
        </span>
      </div>

      {/* Content Card */}
      <div className={`relative z-10 w-full md:w-1/2 ${isEven ? "md:pr-24" : "md:pl-24 text-left"}`}>
        <div className="relative p-8 md:p-12 border border-white/5 bg-white/[0.01] backdrop-blur-2xl group hover:border-accent/30 transition-all duration-700 shadow-2xl">
          <div className="flex items-center gap-6 mb-10 overflow-hidden">
             <motion.div 
               initial={{ x: -50 }}
               whileInView={{ x: 0 }}
               className="h-[1px] w-12 bg-accent/40" 
             />
             <span className="font-heading text-[10px] font-bold tracking-[0.6em] uppercase text-accent/60">{item.year}</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-heading font-black mb-8 text-white leading-tight uppercase tracking-tighter !text-editorial-mask">
            {item.title}
          </h3>
          <p className="text-white/30 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.3em]">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Decorative vertical divider for mobile */}
      <div className="md:hidden h-20 w-px bg-white/10 my-10" />

      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

const BiographySection = () => {
  return (
    <section id="biography" className="relative bg-[#020406] overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <header className="max-w-5xl mb-24 md:mb-48 border-l border-accent/20 md:pl-20 pl-8 group">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent/60 font-heading tracking-[0.8em] uppercase text-[9px] md:text-[10px] mb-10 inline-block font-bold">
              TIMELINE / THE ARCHIVAL ODYSSEY
            </span>
            <h2 className="text-white shimmer-text !text-editorial-mask">
              A LEGACY OF <br />
              <span className="text-white/20 group-hover:text-white transition-colors duration-1000">SWING & FORCE</span>
            </h2>
            <div className="mt-12 md:mt-16 h-[2px] w-24 bg-accent/30 group-hover:w-48 group-hover:bg-accent transition-all duration-1000" />
            <p className="mt-12 text-white/30 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.4em] max-w-2xl">
              From the tennis-ball circuits of Nashik to the hallowed turf of the Ranji Trophy. A 17-year odyssey documented in First-Class blood and Sterling precision.
            </p>
          </motion.div>
        </header>

        {/* Timeline Sequence */}
        <div className="relative max-w-6xl mx-auto md:pt-20">
          {timelineData.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>

        {/* Immersive Quote Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative py-32 md:py-64 border-y border-white/5 text-center mt-32 md:mt-48 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="relative z-10 px-6">
            <blockquote className="text-4xl md:text-8xl font-heading font-black text-white leading-[0.9] max-w-6xl mx-auto uppercase tracking-tighter shimmer-text">
              "THEY SAID SWING IS A GIFT. <br />
              <span className="text-white/20">I SAY IT'S EARNED IN THE</span> <br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>NASHIK SUN."</span>
            </blockquote>
            
            <div className="mt-20 flex flex-col items-center gap-10">
               <div className="w-16 h-[2px] bg-accent/40 group-hover:w-32 group-hover:bg-accent transition-all duration-1000" />
               <cite className="font-heading text-[9px] md:text-[10px] tracking-[1em] uppercase text-white/30 font-bold not-italic hover:text-white transition-colors duration-500">
                 SUBJECT ARCHIVE: 287-RK / THE SWING KING
               </cite>
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

export default BiographySection;
