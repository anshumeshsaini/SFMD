import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import nashikLogo from "@/assets/nashik-logo.png";
import img2007 from "@/assets/2007.png";
import img2010 from "@/assets/2010.png";
import img2014 from "@/assets/2014.png";
import img2024 from "@/assets/2024.png";
import bioCardBg from "@/assets/bio-card-bg.jpg";
import statsBadges from "@/assets/stats-badges.png";
import samadRetirement from "@/assets/samad_retirement.jpg";
import samadTrophy from "@/assets/samad_trophy.jpg";

const timelineData = [
  { 
    year: "2007", 
    title: "THE RAW ENTRY", 
    desc: "A 22-year-old with no age-group background. A 'tennis-ball' legend stepping into the First Class arena.",
    stat: "DEBUT SEASON",
    detail: "Zero academy training. Pure instinct. The tennis-ball circuits of Nashik forged a weapon the system never saw coming.",
    icon: "◆",
    img: img2007
  },
  { 
    year: "2010", 
    title: "NATIONAL ECHO", 
    desc: "A match-winning 4-wicket haul in the SMAT Final. The nation finally hears the name: Samad Fallah.",
    stat: "4 WICKETS / FINAL",
    detail: "The Syed Mushtaq Ali Trophy Final became the stage. Four wickets dismantled the opposition's spine in a display of brutal swing mastery.",
    icon: "◇",
    img: img2010
  },
  { 
    year: "2014", 
    title: "THE APEX", 
    desc: "Ranji Trophy Final. 7 wickets against Bengal. A masterclass in the art of the moving ball.",
    stat: "7/MATCH / FINAL",
    detail: "The biggest stage in domestic cricket. Seven dismissals in the Ranji Trophy Final. Bengal's batting order was systematically dismantled.",
    icon: "◈",
    img: img2014
  },
  { 
    year: "2024", 
    title: "THE HERITAGE", 
    desc: "Retiring as Maharashtra's highest Ranji wicket-taker. 287 wickets. An era ends.",
    stat: "287 WICKETS / LEGACY",
    detail: "A 17-year archive sealed. Maharashtra's all-time leading Ranji wicket-taker. The swing king's final chapter written in sterling precision.",
    icon: "◉",
    img: img2024
  },
];

// Animated word-by-word reveal
const AnimatedTitle = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, rotateX: -40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: i * 0.08, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="inline-block mr-[0.3em]"
          style={{ perspective: "600px" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Milestone marker
const TimelineMarker = ({ isActive, index }: { isActive: boolean; index: number }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, type: "spring", stiffness: 300, damping: 20 }}
    className="relative z-20 flex items-center justify-center"
  >
    <motion.div
      animate={isActive ? { 
        boxShadow: [
          "0 0 0px rgba(0,0,0,0.1)",
          "0 0 20px rgba(0,0,0,0.2)",
          "0 0 0px rgba(0,0,0,0.1)"
        ]
      } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={`w-4 h-4 border-2 rotate-45 transition-all duration-700 ${
        isActive 
          ? "border-black bg-black/50 shadow-[0_0_15px_rgba(0,0,0,0.2)]" 
          : "border-black/50 bg-black/10 hover:border-black/70"
      }`}
    />
    {isActive && (
      <>
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-4 h-4 border border-black/50 rotate-45"
        />
        <motion.div
          animate={{ scale: [1, 3], opacity: [0.15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          className="absolute w-4 h-4 border border-black/40 rotate-45"
        />
      </>
    )}
  </motion.div>
);

const TimelineItem = ({ item, index, activeIndex, onHover }: { 
  item: typeof timelineData[0]; 
  index: number; 
  activeIndex: number;
  onHover: (index: number) => void;
}) => {
  const isEven = index % 2 === 0;
  const isActive = activeIndex === index;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  return (
    <div 
      className={`relative flex items-center mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row`}
      onMouseEnter={() => onHover(index)}
    >
      {/* Year parallax background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className={`absolute -top-8 md:-top-20 pointer-events-none z-0 ${isEven ? "left-0 md:left-4" : "right-0 md:right-4"}`}
      >
        <motion.span 
          animate={{ y: isActive ? -10 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-[6rem] md:text-[16rem] font-heading font-black select-none leading-none tracking-tighter transition-all duration-1000 ${
            isActive ? "text-black/[0.06]" : "text-black/[0.02]"
          }`}
        >
          {item.year}
        </motion.span>
      </motion.div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        className={`relative z-10 w-full md:w-[calc(50%-40px)] ${isEven ? "md:pr-0" : "md:pl-0"}`}
      >
        <motion.div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4 }}
          className={`relative p-8 md:p-12 border bg-white backdrop-blur-2xl cursor-pointer overflow-hidden
            transition-all duration-700 shadow-lg group
            ${isActive ? "border-black/20 bg-white" : "border-black/5 bg-white hover:border-black/15"}`}
        >
          {/* Card Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={bioCardBg} 
              alt="Stadium Atmosphere" 
              className="w-full h-full object-cover opacity-[0.5] transition-opacity duration-1000 group-hover:opacity-[0.08]" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent" />
          </div>
          {/* Mouse-tracking spotlight */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              x: springX,
              y: springY,
              background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
              transform: "translate(-50%, -50%)"
            }}
          />

          {/* Corner accent */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            className="absolute top-0 left-0 h-[2px] w-16 bg-gradient-to-r from-black/40 to-transparent origin-left"
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
            className="absolute top-0 left-0 w-[2px] h-16 bg-gradient-to-b from-black/40 to-transparent origin-top"
          />

          {/* Year & Status Badge */}
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-5">
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="h-[1px] w-10 bg-black/50 group-hover:w-16 group-hover:bg-black transition-all duration-700" 
              />
              <span className="font-heading text-[10px] font-bold tracking-[0.6em] uppercase text-black/70 group-hover:text-black transition-colors duration-500">
                {item.year}
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              {item.img && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="w-12 h-12 md:w-16 md:h-16 relative group/logo p-1 border border-black/5 bg-white shadow-sm overflow-hidden"
                >
                  <img 
                    src={item.img} 
                    alt={`${item.year} Era`} 
                    className="w-full h-full object-contain filter transition-transform duration-700 group-hover/logo:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/[0.02] mix-blend-multiply pointer-events-none" />
                </motion.div>
              )}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`text-[8px] font-heading font-bold tracking-[0.4em] uppercase px-4 py-2 border transition-all duration-700
                  ${isActive 
                    ? "border-black/30 text-black bg-black/5" 
                    : "border-black/10 text-black/20 group-hover:border-black/20 group-hover:text-black/40"
                  }`}
              >
                {item.stat}
              </motion.span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-5xl font-heading font-black mb-6 text-black leading-tight uppercase tracking-tighter relative z-10">
            <AnimatedTitle text={item.title} className="!text-editorial-mask" />
          </h3>

          {/* Description */}
          <p className="text-black/65 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.3em] relative z-10 group-hover:text-black/50 transition-colors duration-700">
            {item.desc}
          </p>

          {/* Expandable Detail */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden relative z-10"
              >
                <div className="pt-8 mt-8 border-t border-black/5">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-black/60 text-lg">{item.icon}</span>
                    <span className="text-[9px] font-heading font-bold tracking-[0.5em] uppercase text-black/70">
                      EXPANDED ARCHIVE
                    </span>
                  </div>
                  
                  <p className="text-black/70 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.2em]">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Click indicator */}
          <motion.div 
            animate={{ opacity: isExpanded ? 0 : [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 flex items-center gap-3 relative z-10"
          >
            <motion.span 
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-black/30 text-[10px]"
            >
              →
            </motion.span>
            <span className="text-[8px] font-heading tracking-[0.4em] uppercase text-black/15">
              {isExpanded ? "" : "TAP TO EXPAND"}
            </span>
          </motion.div>

          {/* Bottom border glow */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent origin-center"
          />
        </motion.div>
      </motion.div>

      {/* Center Timeline Marker (desktop) */}
      <div className="hidden md:flex w-[80px] justify-center flex-shrink-0">
        <TimelineMarker isActive={isActive} index={index} />
      </div>

      {/* Mobile marker */}
      <div className="md:hidden flex justify-center my-8">
        <TimelineMarker isActive={isActive} index={index} />
      </div>

      <div className="hidden md:block w-[calc(50%-40px)]" />
    </div>
  );
};

const BiographySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const spineProgress = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const springProgress = useSpring(spineProgress, { stiffness: 100, damping: 30 });
  const headerY = useTransform(scrollYProgress, [0, 0.3], ["0%", "10%"]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.min(Math.floor(v * timelineData.length * 1.2), timelineData.length - 1);
      setActiveIndex(Math.max(0, idx));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} id="biography" className="relative bg-white overflow-hidden">
      {/* Mouse-following ambient glow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.02] transition-all duration-[2000ms] ease-out blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)",
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)"
        }}
      />

      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black/[0.01] to-transparent pointer-events-none" />
      
      {/* Grid layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)", 
             backgroundSize: "clamp(60px, 8vw, 120px) clamp(60px, 8vw, 120px)" 
           }} 
      />

      {/* Giant parallax background text */}
      <motion.div 
        style={{ y: bgTextY }}
        className="absolute top-1/4 left-0 right-0 pointer-events-none select-none z-0 px-6 opacity-[0.02]"
      >
        <span className="text-[18vw] font-heading font-black text-black leading-none uppercase tracking-tighter block text-center">
          ARCHIVE
        </span>
      </motion.div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.header 
          style={{ y: headerY }}
          className="max-w-5xl mb-24 md:mb-48 border-l border-black/15 md:pl-20 pl-8 group"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-black/70 font-heading tracking-[0.8em] uppercase text-[9px] md:text-[10px] mb-10 inline-block font-bold">
              THE HERITAGE COLLECTION / ARCHIVAL ODYSSEY
            </span>
            <h2 className="text-black shimmer-text !text-editorial-mask">
              A LEGACY OF <br />
              <span className="text-black/50 group-hover:text-black transition-colors duration-1000 uppercase">SWING & FORCE</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 md:mt-16 h-[2px] bg-black/60 group-hover:!w-48 group-hover:bg-black transition-all duration-1000" 
            />
            <p className="mt-12 text-black/65 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.4em] max-w-2xl">
              From the tennis-ball circuits of Nashik to the hallowed turf of the Ranji Trophy. A 17-year odyssey documented in First-Class blood and Sterling precision.
            </p>

            {/* Scroll prompt */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="mt-16 flex items-center gap-4"
            >
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-8 border border-black/20 rounded-full flex items-start justify-center p-1"
              >
                <motion.div 
                  animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-2 bg-black/40 rounded-full"
                />
              </motion.div>
              <span className="text-[8px] font-heading tracking-[0.5em] uppercase text-black/15 font-bold">
                SCROLL TO EXPLORE TIMELINE
              </span>
            </motion.div>
          </motion.div>
        </motion.header>

        {/* Timeline with Animated Spine */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto md:pt-20">
          
          {/* Vertical Timeline Spine (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px]">
            <div className="absolute inset-0 bg-black/5" />
            <motion.div 
              style={{ scaleY: springProgress }}
              className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 via-black to-black/40 origin-top shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            />
            <motion.div
              style={{ top: useTransform(springProgress, [0, 1], ["0%", "100%"]) }}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* Mobile progress */}
          <div className="md:hidden flex justify-center mb-12">
            <div className="flex items-center gap-3">
              {timelineData.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    backgroundColor: i <= activeIndex ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.1)",
                    scale: i === activeIndex ? 1.3 : 1
                  }}
                  className="w-2 h-2 rounded-full transition-all"
                />
              ))}
            </div>
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, i) => (
            <TimelineItem 
              key={item.year} 
              item={item} 
              index={i} 
              activeIndex={activeIndex}
              onHover={setActiveIndex}
            />
          ))}

          {/* Featured Heritage Highlights */}
          <div className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 px-6">
            {[
              { img: samadRetirement, title: "FINAL GLANCE", label: "RETIREMENT_ENTRY" },
              { img: samadTrophy, title: "THE APEX", label: "MOMENT_OF_IMPACT" }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] md:aspect-square overflow-hidden group shadow-2xl border border-black/5 bg-white p-4"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-[10px] font-bold tracking-[0.6em] text-white/40 mb-2 block uppercase">{item.label}</span>
                    <h4 className="text-2xl font-heading font-black text-white uppercase tracking-tighter">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center mt-24"
          >
            <div className="w-6 h-6 border-2 border-black/30 rotate-45 bg-black/5 shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative py-32 md:py-64 border-y border-black/5 text-center mt-32 md:mt-48 overflow-hidden group"
        >
          {/* Corner brackets */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-black/5 group-hover:border-black/20 group-hover:w-20 group-hover:h-20 transition-all duration-1000" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-black/5 group-hover:border-black/20 group-hover:w-20 group-hover:h-20 transition-all duration-1000" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-black/5 group-hover:border-black/20 group-hover:w-20 group-hover:h-20 transition-all duration-1000" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-black/5 group-hover:border-black/20 group-hover:w-20 group-hover:h-20 transition-all duration-1000" />

          <div className="absolute inset-0 bg-black/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
               style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.02) 0%, transparent 70%)" }} />
          
          <div className="relative z-10 px-6">
            {/* Quote mark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.08, y: 0 }}
              viewport={{ once: true }}
              className="text-8xl md:text-[12rem] font-heading font-black text-black leading-none mb-[-2rem] md:mb-[-5rem]"
            >
              "
            </motion.div>

            <blockquote className="text-3xl md:text-7xl lg:text-8xl font-heading font-black text-black leading-[0.9] max-w-6xl mx-auto uppercase tracking-tighter">
              <AnimatedTitle text="THEY SAID SWING IS A GIFT." className="shimmer-text block mb-4" />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-black/50 block mb-4"
              >
                I SAY IT'S EARNED IN THE
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.2 }}
                className="text-transparent stroke-text block" 
                style={{ WebkitTextStroke: "1px rgba(0,0,0,0.6)" }}
              >
                NASHIK SUN.
              </motion.span>
            </blockquote>

            {/* Nashik Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 flex justify-center"
            >
              <div className="relative group/logo cursor-pointer">
                <div className="absolute -inset-8 bg-black/3 blur-[60px] rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                <div className="relative p-6 md:p-8 border border-black/5 bg-white backdrop-blur-2xl group-hover/logo:border-black/20 transition-all duration-700">
                  <img 
                    src={nashikLogo} 
                    alt="Eagle Nashik Titans - Nashik Son" 
                    className="w-20 h-20 md:w-28 md:h-28 object-contain group-hover/logo:scale-110 transition-all duration-700" 
                  />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-transparent group-hover/logo:border-black/20 transition-all duration-700" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-transparent group-hover/logo:border-black/20 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-transparent group-hover/logo:border-black/20 transition-all duration-700" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-transparent group-hover/logo:border-black/20 transition-all duration-700" />
                </div>
                <span className="block mt-4 text-[8px] font-heading tracking-[0.6em] uppercase text-black/15 group-hover/logo:text-black/40 transition-colors duration-700 text-center">
                  NASHIK ORIGIN
                </span>
              </div>
            </motion.div>
            
            <div className="mt-20 flex flex-col items-center gap-10">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="h-[2px] bg-black/20 group-hover:!w-32 group-hover:bg-black transition-all duration-1000" 
              />
              <motion.cite 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="font-heading text-[9px] md:text-[10px] tracking-[1em] uppercase text-black/30 font-bold not-italic hover:text-black transition-colors duration-500 cursor-default"
              >
                SUBJECT ARCHIVE: 287-RK / THE SWING KING
              </motion.cite>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5 border border-black/5 mt-24 md:mt-32"
        >
          {[
            { label: "SEASONS", value: "17", pos: "0%" },
            { label: "WICKETS", value: "287", pos: "33.33%" },
            { label: "MATCHES", value: "78", pos: "66.66%" },
            { label: "BEST", value: "8/69", pos: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-white p-6 md:p-8 group hover:bg-black/[0.02] transition-all duration-500 text-center flex flex-col items-center justify-center border-r border-black/5 last:border-r-0"
            >
               <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 overflow-hidden">
                 <img 
                   src={statsBadges} 
                   alt={stat.label} 
                   className="absolute h-full max-w-none transition-transform duration-700 group-hover:scale-110"
                   style={{ 
                     left: `-${i * 100}%`,
                     width: "400%" 
                   }}
                 />
               </div>
               <div className="flex items-center justify-center gap-3">
                 <div className="h-[1px] w-4 bg-black/10 group-hover:w-8 group-hover:bg-black transition-all duration-700" />
                 <span className="text-[8px] md:text-[9px] font-heading font-bold tracking-[0.5em] uppercase text-black/20 group-hover:text-black/50 transition-colors">
                   {stat.label}
                 </span>
                 <div className="h-[1px] w-4 bg-black/10 group-hover:w-8 group-hover:bg-black transition-all duration-700" />
               </div>
            </motion.div>
          ))}
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
