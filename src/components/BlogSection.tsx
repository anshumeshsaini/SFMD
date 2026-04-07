import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import blogSwing from "@/assets/blog-swing.jpg";
import blogFitness from "@/assets/blog-fitness.jpg";
import blogWickets from "@/assets/blog-wickets.jpg";
import galleryCoaching from "@/assets/gallery-coaching.jpg";
import galleryStadium from "@/assets/gallery-stadium.jpg";

const blogPosts = [
  { id: 1, img: blogSwing, tag: "PHYSICS / CORE", title: "THE ART OF REVERSE SWING", excerpt: "Understanding the physics behind making the ball move in the air — the weapon that earned me 287 First-Class wickets.", date: "MAR 15, 2024", readTime: "8 MIN", size: "large" },
  { id: 2, img: blogFitness, tag: "SYSTEMS / FITNESS", title: "ELITE LONGEVITY AUDIT", excerpt: "A fast bowler's body is everything. My technical approach to longevity in the most demanding role in elite sport.", date: "FEB 28, 2024", readTime: "6 MIN", size: "small" },
  { id: 3, img: blogWickets, tag: "ARCHIVE / CAREER", title: "TOP 5 DISMISSALS", excerpt: "From 7/58 against Bengal to the national finals — reliving the deliveries that defined the monolithic legacy.", date: "JAN 20, 2024", readTime: "10 MIN", size: "small" },
  { id: 4, img: galleryCoaching, tag: "LOGIC / MENTOR", title: "MENTOR PERSPECTIVE", excerpt: "Transitioning to Head Coach of Nashik Titans taught me more about the game's architecture than playing.", date: "JAN 5, 2024", readTime: "7 MIN", size: "medium" },
  { id: 5, img: galleryStadium, tag: "REFLECTIONS", title: "DOMESTIC BACKBONE", excerpt: "The Ranji Trophy shaped me. It shapes every Indian cricketer. Why it deserves a technical audit.", date: "DEC 15, 2023", readTime: "5 MIN", size: "medium" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative bg-[#020406] overflow-hidden">
      {/* Precision Axis Accents */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[150px] pointer-events-none opacity-20" />
      
      <div className="section-container relative z-10">
        <header className="mb-24 md:mb-48 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-24 border-l border-accent/20 md:pl-20 pl-8 group">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-5xl"
           >
              <span className="text-accent/60 font-heading tracking-[1em] uppercase text-[9px] md:text-[10px] mb-10 inline-block font-bold">
                ARCHIVE / TECHNICAL JOURNAL
              </span>
              <h2 className="text-white shimmer-text !text-editorial-mask">
                LETTERS ON <br />
                <span className="text-white/20 group-hover:text-white transition-colors duration-1000 uppercase">THE GAME</span>
              </h2>
           </motion.div>
           <p className="text-white/30 font-body font-light text-[10px] md:text-right max-w-xs leading-loose uppercase tracking-[0.3em] hidden lg:block group-hover:text-white/10 transition-colors duration-1000">
              ARCHIVED THOUGHTS AND TECHNICAL BLUEPRINTS FROM A CAREER DEPLOYED ACROSS THE 22-YARD SYSTEM.
           </p>
        </header>

        {/* Sterling Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
           {/* Featured Narrative Stream */}
           <div className="lg:col-span-8 flex flex-col gap-24 md:gap-40">
              {blogPosts.filter(p => p.size === "large" || p.size === "medium").map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative cursor-pointer"
                >
                   <div className="grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-20 items-center">
                      <div className="md:col-span-6 relative overflow-hidden aspect-[16/10] bg-white/[0.01] border border-white/10 group-hover:border-accent/40 transition-colors duration-700 shadow-2xl">
                         <img 
                           src={post.img} 
                           alt={post.title} 
                           className="w-full h-full object-cover contrast-110 brightness-[0.7] group-hover:brightness-95 group-hover:scale-105 transition-all duration-1000" 
                         />
                         <div className="absolute top-6 left-6 z-10">
                            <span className="bg-white/5 backdrop-blur-3xl text-white px-5 py-2.5 font-heading text-[9px] font-black tracking-[0.5em] uppercase border border-white/10 group-hover:border-accent/40 transition-colors duration-500">
                               {post.tag}
                            </span>
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-[#020406] to-transparent opacity-40" />
                      </div>
                      <div className="md:col-span-4 mt-6 md:mt-0">
                         <div className="flex items-center gap-6 text-white/20 text-[9px] tracking-[0.5em] uppercase mb-10 font-bold group-hover:text-accent/60 transition-colors">
                            <span className="flex items-center gap-3"><Clock size={16} strokeWidth={1} /> {post.readTime}</span>
                            <div className="h-px w-6 bg-white/10" />
                            <span>{post.date}</span>
                         </div>
                         <h3 className="text-4xl lg:text-6xl font-heading font-black text-white leading-[0.95] mb-10 uppercase tracking-tighter shimmer-text">
                            {post.title}
                          </h3>
                         <p className="text-white/30 font-body font-light text-[11px] leading-loose uppercase tracking-[0.3em] mb-12 hidden md:block">
                            {post.excerpt}
                          </p>
                         <div className="flex items-center gap-8 group/link">
                            <span className="font-heading text-[10px] font-black tracking-[0.6em] uppercase text-white/40 group-hover/link:text-white transition-colors duration-500">
                               DECONSTRUCT_LOG
                            </span>
                            <div className="h-[1px] flex-1 bg-white/5 group-hover/link:bg-accent/40 transition-all duration-700" />
                            <ArrowUpRight className="text-white/20 w-7 h-7 group-hover/link:text-accent group-hover/link:rotate-45 transition-all duration-500" />
                         </div>
                      </div>
                   </div>
                </motion.article>
              ))}
           </div>

           {/* Analytical Sidebar Stream */}
           <div className="lg:col-span-4 flex flex-col gap-16 md:gap-24">
              <div className="p-10 md:p-14 border border-white/10 bg-white/[0.01] backdrop-blur-3xl shadow-xl mb-12 group">
                 <h4 className="font-heading text-[9px] md:text-[10px] font-bold tracking-[0.8em] uppercase text-white/20 mb-10 group-hover:text-accent transition-colors">ARCHIVE_FILTERS</h4>
                 <div className="flex flex-wrap gap-4">
                    {["THEORY", "BIOLOGY", "LEGACY", "SYSTEMS"].map(t => (
                      <span key={t} className="px-6 py-2.5 border border-white/5 bg-white/[0.02] text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 hover:text-white hover:border-accent/40 hover:bg-accent/10 cursor-pointer transition-all duration-500">
                        {t}
                      </span>
                    ))}
                 </div>
              </div>

              {blogPosts.filter(p => p.size === "small").map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.2), duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer border-t border-white/5 pt-12 hover:border-accent/20 transition-colors duration-700"
                >
                   <div className="relative overflow-hidden aspect-[16/9] mb-10 bg-white/[0.01] border border-white/10">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover contrast-110 brightness-[0.4] group-hover:brightness-90 group-hover:scale-105 transition-all duration-1000" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020406] to-transparent opacity-90" />
                      <div className="absolute bottom-6 left-6">
                         <div className="flex items-center gap-4 text-accent/60 text-[8px] md:text-[9px] font-bold tracking-[0.6em] uppercase">
                            <span>{post.tag}</span>
                         </div>
                      </div>
                   </div>
                   <h3 className="text-3xl font-heading font-black text-white mb-8 uppercase leading-[1.1] tracking-tighter shimmer-text">
                      {post.title}
                   </h3>
                   <div className="flex justify-between items-center text-white/20 text-[9px] font-bold tracking-[0.6em] uppercase group-hover:text-accent/40 transition-colors">
                      <span>{post.date}</span>
                      <ArrowUpRight size={20} strokeWidth={1} className="text-white/20 group-hover:text-accent group-hover:rotate-45 transition-all duration-500" />
                   </div>
                </motion.article>
              ))}
           </div>
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

export default BlogSection;
