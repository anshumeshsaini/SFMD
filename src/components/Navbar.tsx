import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "01 / ARCHIVE", href: "#hero" },
  { label: "02 / LEGACY", href: "#biography" },
  { label: "03 / DATASET", href: "#stats" },
  { label: "04 / VISUAL", href: "#gallery" },
  { label: "05 / LOG", href: "#blog" },
  { label: "06 / INQUIRY", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ${
        scrolled ? "py-4" : "py-8 md:py-12"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative flex items-center justify-between">
          
          {/* Brand: Sterling Cinematic */}
          <a href="#hero" className="group flex flex-col items-start">
            <div className="overflow-hidden">
               <motion.span 
                 className="font-heading text-lg md:text-2xl font-black tracking-tighter text-white block"
                 whileHover={{ y: -2 }}
                 transition={{ duration: 0.4 }}
               >
                 FALLAH<span className="text-accent">.</span>
               </motion.span>
            </div>
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.6em] text-white/30 font-bold group-hover:text-accent transition-colors duration-500">
               STERLING / 287-RK
            </span>
          </a>

          {/* Desktop Nav: Refined Glass Pill */}
          <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full border transition-all duration-1000 ${
            scrolled 
              ? "bg-white/[0.02] backdrop-blur-3xl border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] scale-95" 
              : "bg-transparent border-transparent"
          }`}>
             {navLinks.map((link) => (
               <a 
                 key={link.href} 
                 href={link.href}
                 className="px-6 py-2.5 rounded-full font-heading text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white hover:bg-white/[0.05] transition-all duration-500"
               >
                 {link.label}
               </a>
             ))}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center">
             <button 
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               className="lg:hidden flex flex-col gap-1.5 p-3 hover:bg-white/5 rounded-full transition-colors relative z-[110]"
               aria-label="Toggle Menu"
             >
                <div className={`h-[1px] bg-white transition-all duration-500 ${mobileMenuOpen ? "rotate-45 translate-y-2 w-6" : "w-6"}`} />
                <div className={`h-[1px] bg-white transition-all duration-500 ${mobileMenuOpen ? "opacity-0 w-6" : "w-4 self-end"}`} />
                <div className={`h-[1px] bg-white transition-all duration-500 ${mobileMenuOpen ? "-rotate-45 -translate-y-2 w-6" : "w-6"}`} />
             </button>
          </div>
        </div>
      </div>

      {/* Cinematic Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed inset-0 z-[100] bg-[#020406]/95 flex flex-col justify-center px-12 lg:hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
             <div className="absolute inset-0 grain-overlay opacity-5" />
             
             <div className="relative z-10 space-y-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.1 + (i * 0.08),
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex flex-col"
                  >
                    <span className="text-[10px] font-bold tracking-[0.5em] text-accent mb-2">{link.label.split(' / ')[0]}</span>
                    <span className="text-5xl font-heading font-black text-white group-hover:text-accent transition-all duration-500 uppercase tracking-tighter">
                      {link.label.split(' / ')[1]}
                    </span>
                  </motion.a>
                ))}
             </div>
             
             <div className="mt-32 pt-12 border-t border-white/10 relative z-10">
                <div className="flex justify-between items-center">
                   <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
                      STERLING CORE v2.0
                   </p>
                   <div className="h-px w-12 bg-white/10" />
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
