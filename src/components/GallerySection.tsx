import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Maximize2 } from "lucide-react";
import galleryBowling from "@/assets/img6.jpg";
import galleryCelebration from "@/assets/img4.jpg";
import galleryBall from "@/assets/gallery-ball.jpg";
import galleryTrophy from "@/assets/img5.jpg";
import galleryCoaching from "@/assets/gallery-coaching.jpg";
import galleryStadium from "@/assets/img3.jpg";

const galleryItems = [
  { id: 1, src: galleryBowling, alt: "Bowling action under floodlights", category: "MAHARASHTRA", caption: "THE CLASSIC DELIVERY", detail: "Left-arm swing bowling at the peak of his career.", size: "large" },
  { id: 2, src: galleryCelebration, alt: "Celebrating a victory", category: "TROPHY WINS", caption: "NATIONAL TRIUMPH", detail: "A match-winning moment in the Ranji Trophy.", size: "small" },
  { id: 3, src: galleryBall, alt: "Close-up of a new cricket ball", category: "STATIC / ASSET", caption: "THE RED CHERRY", detail: "The core instrument of the craft.", size: "small" },
  { id: 4, src: galleryTrophy, alt: "Lifting the SMAT trophy", category: "TROPHY WINS", caption: "NATIONAL PRIDE", detail: "Lifting the Syed Mushtaq Ali Trophy with Maharashtra.", size: "medium" },
  { id: 5, src: galleryCoaching, alt: "Coaching young cricketers", category: "LEGACY / COACH", caption: "THE MENTOR", detail: "Passing down the art of swing to the future.", size: "medium" },
  { id: 6, src: galleryStadium, alt: "Stadium floodlights", category: "ATMOSPHERE", caption: "NIGHT WATCH", detail: "The atmosphere of day-night cricket.", size: "medium" },
];

const tabs = ["ALL", "MAHARASHTRA", "TROPHY WINS", "STATIC / ASSET", "LEGACY / COACH"];

const GallerySection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredItems = activeTab === "ALL" ? galleryItems : galleryItems.filter(item => item.category === activeTab);
  const selectedItem = galleryItems.find((item) => item.id === selectedId);

  return (
    <section id="gallery" className="relative bg-white overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-black/5" />
      <div className="absolute top-1/2 left-0 w-[500px] h-full bg-black/[0.01] blur-[200px] pointer-events-none" />

      <div className="section-container relative z-10">
        <header className="mb-24 md:mb-48 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 md:gap-24 border-l border-black/15 md:pl-20 pl-8 group">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-4xl"
           >
              <span className="text-black/40 font-heading tracking-[1em] uppercase text-[9px] md:text-[10px] mb-10 block font-bold">
                RECORDS / VISUAL DATA_EXPANSION
              </span>
              <h2 className="text-black shimmer-text !text-editorial-mask">
                VISUAL <br />
                <span className="text-black/20 group-hover:text-black transition-colors duration-1000 uppercase">NARRATIVE</span>
              </h2>
           </motion.div>

           <div className="flex flex-col items-start lg:items-end gap-10 md:gap-16 w-full lg:w-auto">
              <div className="flex overflow-x-auto lg:overflow-visible no-scrollbar -mx-6 px-6 lg:px-0 lg:flex-wrap lg:justify-end gap-x-10 md:gap-x-12 pb-4 lg:pb-0 w-screen lg:w-auto">
                 {tabs.map((tab) => (
                   <button
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`font-heading text-[10px] tracking-[0.5em] font-bold uppercase transition-all duration-500 pb-3 border-b-2 whitespace-nowrap ${
                       activeTab === tab ? "text-black border-black" : "text-black/20 border-transparent hover:text-black/40"
                     }`}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
              <p className="text-black/30 font-body font-light text-[10px] lg:text-right max-w-xs leading-loose uppercase tracking-[0.3em] hidden md:block group-hover:text-black/10 transition-colors duration-1000">
                 CAPTURING THE INTENSITY, THE FLUIDITY, AND THE SYSTEMIC PRECISION OF AN ARCHIVAL LEGEND.
              </p>
           </div>
        </header>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/5 border border-black/5 shadow-xl"
        >
           <AnimatePresence mode="popLayout">
           {filteredItems.map((item) => (
             <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedId(item.id)}
                className={`relative cursor-pointer group overflow-hidden bg-white ${
                  item.size === "large" ? "md:col-span-8 md:row-span-2" : 
                  item.size === "medium" ? "md:col-span-6" : 
                  "md:col-span-4"
                }`}
             >
                <div className="relative h-full aspect-[4/3] md:aspect-auto overflow-hidden">
                   <motion.img
                     src={item.src}
                     alt={item.alt}
                     className="w-full h-full object-cover contrast-105 brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                   />
                   
                   {/* Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-all duration-700" />
                   
                   {/* Overlay */}
                   <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="flex justify-between items-start">
                         <span className="font-heading text-[9px] tracking-[0.6em] text-white font-bold uppercase bg-black/60 backdrop-blur-3xl px-6 py-3 border border-black/20">
                           REC_REF / 0{item.id}
                         </span>
                         <motion.div 
                           whileHover={{ rotate: 45 }}
                           className="w-12 h-12 bg-black flex items-center justify-center shadow-2xl"
                         >
                            <ArrowUpRight className="text-white w-6 h-6" />
                         </motion.div>
                      </div>

                      <div className="max-w-md">
                         <h3 className="font-heading text-3xl md:text-5xl text-white mb-3 uppercase font-black tracking-tighter shimmer-text">{item.caption}</h3>
                         <div className="flex items-center gap-4">
                            <div className="h-px w-8 bg-white/60" />
                            <p className="text-[9px] text-white font-bold uppercase tracking-[0.5em]">{item.category}</p>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
           </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-white/98 backdrop-blur-3xl overflow-y-auto lg:overflow-hidden"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`gallery-item-${selectedId}`}
              className="relative max-w-7xl w-full h-fit lg:h-full flex flex-col lg:flex-row gap-10 md:gap-20 bg-white border border-black/5 p-8 md:p-16"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-black/[0.01] pointer-events-none" />
              
              <div className="flex-[1.5] overflow-hidden relative border border-black/10 group shadow-xl">
                 <img src={selectedItem.src} alt={selectedItem.alt} className="w-full h-full object-contain md:object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                 <Maximize2 className="absolute bottom-8 right-8 text-white/50 group-hover:text-white transition-colors" size={24} />
              </div>

              <div className="flex-1 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/10 pt-10 lg:pt-0 lg:pl-20 py-4">
                <header>
                   <div className="flex items-center gap-6 mb-12 overflow-hidden">
                      <motion.div 
                        initial={{ x: -30 }}
                        animate={{ x: 0 }}
                        className="h-[2px] w-12 bg-black" 
                      />
                      <span className="font-heading text-[10px] md:text-[11px] tracking-[0.8em] text-black font-black uppercase">{selectedItem.category}</span>
                   </div>
                   <h2 className="text-4xl md:text-7xl font-heading font-black text-black uppercase leading-[0.9] tracking-tighter mb-10 shimmer-text">{selectedItem.caption}</h2>
                   <p className="text-black/40 font-body font-light text-sm md:text-base leading-loose uppercase tracking-[0.3em] max-w-md">
                     {selectedItem.detail}
                   </p>
                </header>

                <div className="space-y-12 mt-16 md:mt-0">
                   <div className="flex flex-col gap-6 font-body text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-black/20 border-t border-black/5 pt-12">
                      <div className="flex items-center gap-4">
                         <span className="text-black/40 font-bold">STATUS:</span>
                         <span>SYSTEMS_OPERATIONAL / ARCHIVE_READY</span>
                      </div>
                      <div className="flex items-center gap-4">
                         <span className="text-black/40 font-bold">RECORD_ID:</span>
                         <span>SF_CORE_0{selectedItem.id}_STERLING</span>
                      </div>
                   </div>

                   <button 
                      onClick={() => setSelectedId(null)}
                      className="group flex items-center justify-between py-8 border-y border-black/5 hover:border-black/30 transition-all duration-700 w-full px-4"
                   >
                      <div className="flex items-center gap-8">
                         <div className="relative">
                            <X className="w-6 h-6 text-black group-hover:rotate-90 transition-transform duration-700 relative z-10" />
                            <div className="absolute inset-0 bg-black/10 scale-0 group-hover:scale-150 rounded-full blur-xl transition-transform duration-700" />
                         </div>
                         <span className="font-heading text-[10px] font-black tracking-[0.8em] text-black/40 group-hover:text-black transition-colors uppercase">EXIT_MODULE</span>
                      </div>
                      <div className="h-px w-12 bg-black/10 group-hover:w-24 group-hover:bg-black transition-all duration-700" />
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .stroke-text {
          -webkit-text-fill-color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
