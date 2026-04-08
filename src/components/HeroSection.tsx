import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import stadiumBg from "@/assets/img2.jpg";
import lionMascot from "@/assets/img1.jpg";
import AnimatedCounter from "./AnimatedCounter";

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white py-24 md:py-0">
      {/* Dynamic Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-x-0 h-[120%] z-0">
        <img src={stadiumBg} alt="Stadium Background" className="w-full h-full object-cover brightness-[0.95] contrast-[1.1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white to-transparent" />
      </motion.div>

      {/* Subtle Glow */}
      <div className="absolute top-1/4 -right-1/4 w-[80%] h-[80%] bg-black/3 blur-[150px] rounded-full pointer-events-none" />

      {/* Lion Mascot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 3, scale: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-10 right-0 md:right-[5%] w-[280px] md:w-[400px] pointer-events-none z-10 opacity-[0.15] mix-blend-multiply"
      >
        <img src={lionMascot} alt="Lion Mascot" className="w-full h-full object-contain contrast-125" />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
        {/* Monolithic Narrative */}
        <div className="lg:col-span-9 pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-10 overflow-hidden">
               <motion.div 
                 initial={{ x: -100 }}
                 animate={{ x: 0 }}
                 transition={{ delay: 0.5, duration: 1 }}
                 className="h-[1px] w-12 bg-black/30" 
               />
               <span className="font-heading text-black tracking-[0.6em] uppercase text-[9px] md:text-[10px] font-bold opacity-50">
                 STERLING PRECISION / DOMESTIC RECORD
               </span>
            </div>

            <h1 className="relative flex flex-col items-start gap-2 md:gap-0">
              <span className="font-heading font-black leading-[0.85] text-black tracking-tighter shimmer-text">
                SAMAD
              </span>
              <span className="font-heading font-black leading-[0.8] text-transparent stroke-text tracking-tighter -mt-2 md:-mt-8"
                    style={{ WebkitTextStroke: "1px rgba(0,0,0,0.2)" }}>
                FALLAH
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-24 flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-center"
          >
            <MagneticButton>
              <a href="#biography" className="btn-sterling group flex items-center gap-8 bg-black/5 backdrop-blur-md">
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500 font-bold text-[10px] tracking-[0.4em]">DECONSTRUCT ARCHIVE</span>
                <div className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              </a>
            </MagneticButton>

             <div className="max-w-xs space-y-4 border-l border-black/10 pl-10 group cursor-default">
               <p className="text-[10px] md:text-[11px] text-black/40 font-body font-light uppercase tracking-[0.3em] leading-loose group-hover:text-black transition-colors duration-700">
                 A 17-YEAR ODYSSEY ACROSS THE 22-YARD SYSTEM. <br />
                 287 REGISTERED DISMISSALS. LETHAL SWING MECHANICS. <br />
                 <span className="text-black/60 font-bold">STATUS: STERLING CORE ONLINE.</span>
               </p>
             </div>
          </motion.div>
        </div>

        {/* Cinematic Metrics */}
        <div className="lg:col-span-3 flex flex-col justify-end gap-12 md:gap-20 lg:pb-12">
           
        </div>
      </div>

      {/* Sequential Identifier */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 right-12 hidden lg:flex items-center gap-10"
      >
        <div className="flex flex-col items-end gap-1">
           <span className="text-[8px] tracking-[0.8em] font-bold uppercase text-black/10">TECHNICAL CORE</span>
           <span className="text-[9px] tracking-[0.4em] text-black/30 font-heading font-bold">STERLING ARCHIVE v2.0</span>
        </div>
        <div className="h-16 w-[1px] bg-black/5" />
      </motion.div>

      <style>{`
        .stroke-text {
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
