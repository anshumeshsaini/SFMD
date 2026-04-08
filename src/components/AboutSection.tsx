import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutPortrait from "@/assets/img6.jpg";

const technicalSpecs = [
  { label: "ID / 001", value: "SAMAD FALLAH" },
  { label: "STATUS / CORE", value: "PLATINUM" },
  { label: "DISMISSALS", value: "287 REGISTERED" },
  { label: "SYSTEM YEARS", value: "17 SEASONS" },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={containerRef} id="about" className="relative bg-white overflow-hidden">
      {/* Cinematic Typographic Layer */}
      <motion.div 
        style={{ y: textY }}
        className="absolute top-20 md:top-40 left-0 right-0 pointer-events-none select-none z-0 px-6 opacity-[0.03]"
      >
        <span className="text-[20vw] font-heading font-black text-black leading-none uppercase tracking-tighter block">
          DOSSIER_CORE
        </span>
      </motion.div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-center">
          
          {/* Visual Asset */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
             <motion.div 
               style={{ y: imageY }}
               className="relative"
             >
                {/* Structural Glow */}
                <div className="absolute -inset-10 bg-black/3 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Primary Asset Frame */}
                <div className="relative overflow-hidden aspect-[4/5] bg-neutral-100 border border-black/10 group-hover:border-black/30 transition-colors duration-700">
                   <img 
                     src={aboutPortrait} 
                     alt="Samad Fallah" 
                     className="w-full h-full object-cover contrast-110 brightness-100 group-hover:brightness-105 group-hover:scale-105 transition-all duration-1000" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                   
                   {/* Scanlines */}
                   <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "100% 3px" }} />
                </div>

                {/* Sterling Marker */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-10 -left-6 md:-left-12 bg-white/90 backdrop-blur-3xl border border-black/10 p-8 md:p-12 group-hover:border-black/30 transition-colors duration-500 shadow-2xl"
                >
                   <span className="font-heading text-black text-5xl md:text-7xl font-black block leading-none shimmer-text">287</span>
                   <div className="flex items-center gap-4 mt-3">
                      <div className="h-px w-6 bg-black/30" />
                      <p className="text-[9px] md:text-[10px] text-black/40 uppercase tracking-[0.5em] font-bold whitespace-nowrap">
                        RECORDED DISMISSALS
                      </p>
                   </div>
                </motion.div>
             </motion.div>
          </div>

          {/* Narrative Dossier */}
          <div className="lg:col-span-7 order-1 lg:order-2">
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             >
                <header className="mb-12 md:mb-20">
                   <div className="flex items-center gap-4 mb-10 overflow-hidden">
                      <motion.div 
                        initial={{ x: -50 }}
                        whileInView={{ x: 0 }}
                        className="h-px w-16 bg-black/30" 
                      />
                      <span className="text-black/50 font-heading tracking-[1em] uppercase text-[9px] md:text-[10px] font-bold">
                         SUBJECT / FALLAH.S
                      </span>
                   </div>
                   <h2 className="text-black shimmer-text !text-editorial-mask">
                     THE SWING <br />
                     <span className="text-black/20">REDACTED</span>
                   </h2>
                </header>

                <div className="space-y-12 max-w-2xl border-l border-black/10 md:pl-16 pl-8 group">
                   <p className="text-2xl md:text-4xl font-heading font-black text-black leading-[1.1] uppercase tracking-tighter group-hover:text-black/60 transition-colors duration-700">
                     "I AM NOT A PRODUCT OF AN ACADEMY. <br />
                     I AM A PRODUCT OF RAW PHYSICS."
                   </p>
                   <p className="text-black/40 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.25em]">
                     Samad Fallah's emergence was a disruption to the established order. Forged in the tennis-ball circuits of Nashik, his mechanics bypassed tradition, delivering a lethal, untamed swing that left the domestic system re-evaluating its metrics.
                   </p>
                   <p className="text-black/40 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.25em]">
                     For 17 seasons, he remained a technical anomaly—a left-arm powerhouse whose trajectory challenged every defensive system in the Ranji Trophy.
                   </p>
                </div>

                {/* Digital Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/5 mt-16 md:mt-24 border border-black/5 shadow-xl">
                   {technicalSpecs.map((spec, i) => (
                     <motion.div 
                        key={spec.label} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 md:p-10 group hover:bg-black/[0.02] transition-colors"
                     >
                        <span className="block text-[8px] md:text-[9px] text-black/20 uppercase tracking-[0.5em] mb-4 group-hover:text-black/50 transition-colors font-bold">
                           {spec.label}
                        </span>
                        <span className="font-heading text-lg md:text-xl font-bold text-black tracking-widest">
                           {spec.value}
                        </span>
                     </motion.div>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
