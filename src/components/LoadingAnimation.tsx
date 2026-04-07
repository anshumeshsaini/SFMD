import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShardData {
  id: number;
  centerX: number;
  centerY: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  distance: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
  delay: number;
  layer: number;
  points: string;
  specularAngle: number;
}

const GlassShard = ({ shard }: { shard: ShardData }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        clipPath: `polygon(${shard.points})`,
        background: `
          linear-gradient(
            ${shard.specularAngle}deg, 
            rgba(79, 143, 240, 0.4) 0%, 
            rgba(255, 255, 255, 0.1) 40%,
            rgba(79, 143, 240, 0.2) 60%,
            rgba(79, 143, 240, 0.6) 100%
          )
        `,
        backdropFilter: "blur(8px) contrast(1.2)",
        WebkitBackdropFilter: "blur(8px) contrast(1.2)",
        border: "0.5px solid rgba(79, 143, 240, 0.3)",
        boxShadow: `
          inset 0 0 30px rgba(79, 143, 240, 0.2),
          0 0 60px rgba(79, 143, 240, 0.2)
        `,
        transformOrigin: "center",
        animation: `shard-shatter 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        animationDelay: `${shard.delay}s`,
        opacity: 0,
        ["--tx" as string]: `${Math.cos((shard.startAngle + shard.endAngle) / 2) * shard.distance}px`,
        ["--ty" as string]: `${Math.sin((shard.startAngle + shard.endAngle) / 2) * shard.distance}px`,
        ["--tz" as string]: `${300 + Math.random() * 500}px`,
        ["--rx" as string]: `${shard.rotationX}deg`,
        ["--ry" as string]: `${shard.rotationY}deg`,
        ["--rz" as string]: `${shard.rotationZ}deg`,
        ["--sc" as string]: shard.scale,
        zIndex: shard.layer,
      }}
    >
       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/30 to-transparent rotate-45 scale-150" />
    </div>
  );
};

const CrackLine = ({ angle, length, delay }: { angle: number; length: number; delay: number }) => {
  const path = useMemo(() => {
    const segments = 6;
    let d = "M 50 50";
    for (let i = 1; i <= segments; i++) {
       const segLen = (i / segments) * length;
       const randAngle = angle + (Math.random() - 0.5) * 0.4;
       const x = 50 + Math.cos(randAngle) * segLen;
       const y = 50 + Math.sin(randAngle) * segLen;
       d += ` L ${x} ${y}`;
    }
    return d;
  }, [angle, length]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_12px_rgba(79,143,240,0.6)]">
      <path
        d={path}
        fill="none"
        stroke="rgba(79, 143, 240, 0.9)"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{
          strokeDasharray: length * 2.5,
          strokeDashoffset: length * 2.5,
          animation: `crack-draw 0.6s ${delay}s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        }}
      />
    </svg>
  );
};

const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"ball" | "impact" | "shatter" | "done">("ball");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("impact"), 1800),
      setTimeout(() => setPhase("shatter"), 2000),
      setTimeout(() => { setPhase("done"); onComplete(); }, 4800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const shards = useMemo(() => {
    const data: ShardData[] = [];
    const shardCount = 64;
    for (let i = 0; i < shardCount; i++) {
       const startAngle = (i / shardCount) * Math.PI * 2;
       const endAngle = ((i + 1) / shardCount) * Math.PI * 2;
       const midAngle = (startAngle + endAngle) / 2;
       const ring = Math.floor(i / 16);
       const radius = 25 + ring * 20;
       
       const p1 = { x: 50 + Math.cos(startAngle) * radius * 0.1, y: 50 + Math.sin(startAngle) * radius * 0.1 };
       const p2 = { x: 50 + Math.cos(midAngle) * radius, y: 50 + Math.sin(midAngle) * radius };
       const p3 = { x: 50 + Math.cos(endAngle) * radius * 0.1, y: 50 + Math.sin(endAngle) * radius * 0.1 };

       data.push({
          id: i, centerX: 50, centerY: 50, radius, startAngle, endAngle,
          distance: 700 + Math.random() * 900,
          rotationX: Math.random() * 1440 - 720,
          rotationY: Math.random() * 1440 - 720,
          rotationZ: Math.random() * 720 - 360,
          scale: 0.2 + Math.random() * 0.5,
          delay: ring * 0.08 + (i % 16) * 0.012,
          layer: 30 - ring,
          points: `${p1.x}% ${p1.y}%, ${p2.x}% ${p2.y}%, ${p3.x}% ${p3.y}%`,
          specularAngle: Math.random() * 360
       });
    }
    return data;
  }, []);

  const cracks = useMemo(() => 
    Array.from({ length: 24 }).map((_, i) => ({
      angle: (i / 24) * Math.PI * 2 + (Math.random() - 0.5) * 0.5,
      length: 100 + Math.random() * 50,
      delay: i * 0.015,
    })), []);

  if (phase === "done") return null;

  return (
    <div className={`fixed inset-0 z-[1000] flex items-center justify-center bg-[#020406] overflow-hidden ${phase === "impact" ? "animate-shake" : ""}`}>
      {/* Deep Obsidian Background with Sterling Glow */}
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-30" />
      <div className="absolute inset-0 bg-radial-vignette opacity-90" />
      <div className="absolute inset-0 bg-accent/5 blur-[200px] pointer-events-none" />

      {/* Sterling Core approach */}
      {phase === "ball" && (
        <div className="relative">
           <motion.div
             initial={{ scale: 0, opacity: 0, z: -2000 }}
             animate={{ scale: 1, opacity: 1, z: 0 }}
             transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
             className="w-40 h-40 md:w-56 md:h-56 rounded-full relative"
           >
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #FFFFFF 0%, #4F8FF0 40%, #001A4D 100%)",
                  boxShadow: "0 0 150px rgba(79, 143, 240, 0.3), inset -15px -15px 50px rgba(0,0,0,0.9)",
                }}
              />
              {/* Internal Energy Shimmer */}
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute inset-4 rounded-full border border-white/20 blur-[2px]"
              />
           </motion.div>
           <div className="absolute top-[130%] left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="font-heading text-[10px] md:text-[11px] tracking-[1.2em] text-accent font-black uppercase shimmer-text"
              >
                INITIALIZING STERLING_SYSTEM
              </motion.span>
           </div>
        </div>
      )}

      {/* Impact & Shatter Sequence */}
      {(phase === "impact" || phase === "shatter") && (
        <div className="absolute inset-0 flex items-center justify-center">
           {/* Sterling Impact Flash */}
           <div className="absolute inset-0 bg-accent/30 pointer-events-none opacity-0"
                style={{ animation: "impact-flash 0.6s ease-out forwards" }} />

           {/* Shards */}
           {phase === "shatter" && shards.map(shard => <GlassShard key={shard.id} shard={shard} />)}

           {/* Cracks */}
           {cracks.map((crack, i) => <CrackLine key={i} {...crack} />)}

           {/* Sterling Identity Reveal */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8, letterSpacing: "5em" }}
             animate={{ opacity: 0.15, scale: 1, letterSpacing: "2em" }}
             transition={{ delay: 0.4, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
             className="absolute font-heading font-black text-[18vw] text-white pointer-events-none select-none uppercase leading-none mix-difference blur-[1px]"
           >
             STERLING
           </motion.div>
        </div>
      )}

      <style>{`
        .bg-radial-vignette {
          background: radial-gradient(circle, transparent 30%, #000000 100%);
        }
        @keyframes shard-shatter {
          0% { opacity: 1; transform: translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0) scale(1.2); }
          100% { opacity: 0; transform: translate3d(var(--tx), var(--ty), var(--tz)) rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(var(--rz)) scale(var(--sc)); }
        }
        @keyframes impact-flash {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes crack-draw {
          to { stroke-dashoffset: 0; }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-3px, 0, 0); }
          20%, 80% { transform: translate3d(5px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-10px, 0, 0); }
          40%, 60% { transform: translate3d(10px, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;