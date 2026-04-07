import { motion } from "framer-motion";
import { Trophy, Award, Star, Briefcase } from "lucide-react";

const achievements = [
  { rank: "01", icon: Trophy, title: "HISTORICAL APEX", desc: "Maharashtra's leading Ranji wicket-taker with 287 dismissals. A record that stands as a testament to nearly two decades of dominance." },
  { rank: "02", icon: Award, title: "NATIONAL HONOR", desc: "Vijay Hazare Trophy's leading wicket-taker (2018-19). Sharing the summit of India's premier List A competition." },
  { rank: "03", icon: Star, title: "FINALIST VISION", desc: "Co-architect of Maharashtra's 2013-14 Ranji Final run. A match-winning 4-wicket haul that echoed through the SMAT 2010 finals." },
  { rank: "04", icon: Briefcase, title: "STRATEGIC COMMAND", desc: "Head Coach of Nashik Titans (MPL). Transforming a legendary playing career into a visionary coaching legacy." },
];

const AchievementItem = ({ item, index }: { item: typeof achievements[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative py-12 md:py-24 border-b border-white/5 flex flex-col lg:flex-row items-center gap-12 cursor-default overflow-hidden"
    >
      {/* Structural Glow */}
      <div className="absolute inset-x-0 h-full bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 pointer-events-none" />

      {/* Monolithic Rank - Responsive scale */}
      <div className="flex-shrink-0 relative z-10">
        <span className="text-[10rem] md:text-[18rem] font-heading font-black text-white/[0.02] group-hover:text-accent/10 transition-all duration-1000 leading-none tracking-tighter shimmer-text">
          {item.rank}
        </span>
      </div>

      {/* Content Narrative */}
      <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10 w-full px-6">
        <div className="max-w-2xl text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-6 mb-8 overflow-hidden">
              <motion.div 
                initial={{ x: -30 }}
                whileInView={{ x: 0 }}
                className="h-[1px] w-12 bg-accent/30" 
              />
              <span className="text-accent/60 tracking-[0.5em] uppercase text-[9px] md:text-[10px] font-heading font-bold">ENTRY / {item.rank}</span>
           </div>
           <h3 className="text-4xl md:text-7xl font-heading font-black text-white group-hover:tracking-wider transition-all duration-1000 uppercase tracking-tighter !text-editorial-mask">
             {item.title}
           </h3>
           <p className="mt-8 text-white/30 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.4em] opacity-80 md:opacity-0 group-hover:opacity-100 transition-all duration-1000 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0">
             {item.desc}
           </p>
        </div>

        {/* Technical Identifier Icon */}
        <div className="flex items-center justify-center">
           <item.icon size={80} strokeWidth={0.5} className="text-white/5 group-hover:text-accent/20 transition-all duration-1000 rotate-12 group-hover:rotate-0 scale-75 md:scale-100" />
        </div>
      </div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative bg-[#020406] overflow-hidden">
      {/* Background Cinematic Atmos */}
      <div className="absolute top-0 right-0 w-full h-full bg-accent/5 blur-[250px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <header className="mb-24 md:mb-48 border-l border-accent/20 md:pl-20 pl-8 group">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           >
              <span className="text-accent/60 font-heading tracking-[1em] uppercase text-[9px] md:text-[10px] mb-10 block font-bold">
                RECORDS / HONORS DEPLOYED
              </span>
              <h2 className="text-white shimmer-text !text-editorial-mask">
                THE HERITAGE <br />
                <span className="text-white/20 group-hover:text-white transition-colors duration-1000">COLLECTION</span>
              </h2>
           </motion.div>
        </header>

        {/* Cinematic Record Sequence */}
        <div className="max-w-7xl mx-auto">
          {achievements.map((item, i) => (
            <AchievementItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Archival Metadata Footer */}
        <div className="mt-32 md:mt-64 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 border-t border-white/5 pt-16 group">
           <div className="font-heading text-[9px] md:text-[10px] uppercase tracking-[1em] text-white/40 group-hover:text-accent transition-colors duration-500 font-bold">
              VALIDATION / MCA / SF_ARCHIVE
           </div>
           <p className="max-w-md text-[9px] text-center md:text-right uppercase tracking-[0.3em] leading-loose text-white/30 group-hover:text-white/10 transition-colors duration-1000 font-light">
              SYSTEM STATUS: RECORDS VERIFIED AS OF JUNE 287-RK. <br />
              PROFESSIONAL TRAJECTORY ENCAPSULATED IN STERLING CORE.
           </p>
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

export default AchievementsSection;
