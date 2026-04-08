import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lionMascot from "@/assets/img1.jpg";

const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    // Stage 1: Initial focus on mascot
    const exitTimer = setTimeout(() => setIsExiting(true), 2500);
    
    // Stage 2: Signal website display and cleanup
    const completeTimer = setTimeout(() => {
      setShowWebsite(true);
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!showWebsite && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Subtle archival texture */}
          <div className="absolute inset-0 pointer-events-none  grain-overlay" 
               style={{ 
                 backgroundImage: "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)", 
                 backgroundSize: "80px 80px" 
               }} 
          />
          
          <div className="relative flex flex-col items-center">
            {/* Mascot Entrance & Exit */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={isExiting ? { 
                scale: 0.5, 
                opacity: 0, 
                x: "40vw", 
                y: "30vh",
                transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
              } : { 
                scale: 1, 
                opacity: 0.15, // Matching the hero section's blended opacity
                y: 0,
                transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
              }}
              className="w-64 h-64 md:w-[500px] md:h-[500px] mix-blend-multiply contrast-125"
            >
              <img 
                src={lionMascot} 
                alt="Swing King Mascot" 
                className="w-full h-full object-contain" 
              />
            </motion.div>

            {/* Branded Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-[-100px] text-center"
            >
              <span className="font-heading text-[10px] md:text-[12px] tracking-[1.5em] text-black font-black uppercase shimmer-text whitespace-nowrap">
                STERLING_SYSTEM / INITIALIZING
              </span>
              <div className="mt-6 flex justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 1, 0.2]
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-1.5 h-1.5 bg-black rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vignette overlay */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.05)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;