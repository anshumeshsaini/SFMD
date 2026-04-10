import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import blogSwing from "@/assets/blog-swing.jpg";
import blogFitness from "@/assets/blog-fitness.jpg";
import blogWickets from "@/assets/blog-wickets.jpg";
import galleryCoaching from "@/assets/gallery-coaching.jpg";
import galleryStadium from "@/assets/gallery-stadium.jpg";

const blogPosts = [
  { 
    id: 1, 
    img: blogSwing, 
    tag: "LEGACY / ARCHIVE", 
    title: "MAHARASHTRA'S HIGHEST Ranji WICKET-TAKER RETIRE", 
    excerpt: "Samad Fallah officially announces his retirement from professional cricket. A 17-season odyssey concludes for Maharashtra's all-time leading seamer.", 
    date: "JUN 24, 2024", 
    readTime: "8 MIN", 
    size: "large",
    url: "https://timesofindia.indiatimes.com/sports/cricket/news/maharashtras-samad-fallah-announces-retirement-from-professional-cricket/articleshow/111191766.cms"
  },
  { 
    id: 2, 
    img: blogFitness, 
    tag: "TECHNICAL / THEORY", 
    title: "PUSHING THE SEAM BOWLING ENVELOPE", 
    excerpt: "A geek among seamers. Pushing the boundaries of technical mastery to make up for height and pace with exceptional swing skill.", 
    date: "OCT 03, 2019", 
    readTime: "6 MIN", 
    size: "small",
    url: "https://timesofindia.indiatimes.com/sports/cricket/news/in-quest-for-mastery-stupid-samad-fallah-pushes-seam-bowling-envelope/articleshow/71475579.cms"
  },
  { 
    id: 3, 
    img: blogWickets, 
    tag: "CANDID / DIALOGUE", 
    title: "IPL, RANJI, AND THE CANDID CHAT", 
    excerpt: "From leading the Maharashtra attack to IPL insights. A deep dive into 415 professional wickets across all formats in a candid session.", 
    date: "AUG 15, 2021", 
    readTime: "10 MIN", 
    size: "small",
    url: "https://cricketgraph.com/samad-fallah-ipl-maharashtra-uttarakhand-ranji-trophy-player-in-a-candid-chat-with-cricketgraph/"
  },
  { 
    id: 4, 
    img: galleryCoaching, 
    tag: "PHYSICS / CORE", 
    title: "THE FREE JAZZ OF SAMAD FALLAH’S BOWLING", 
    excerpt: "An unpredictable run-up and a hustling style. Scripting a tale of resilience and passion that defined the art of domestic swing.", 
    date: "NOV 27, 2017", 
    readTime: "7 MIN", 
    size: "medium",
    url: "https://www.espn.in/cricket/story/_/id/21567880/the-free-jazz-samad-fallah-bowling"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative bg-white overflow-hidden">
      {/* Accents */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/[0.01] blur-[150px] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <header className="mb-24 md:mb-48 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-24 border-l border-black/15 md:pl-20 pl-8 group">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-5xl"
           >
              <span className="text-black/70 font-heading tracking-[1em] uppercase text-[9px] md:text-[10px] mb-10 inline-block font-bold">
                ARCHIVE / TECHNICAL JOURNAL
              </span>
              <h2 className="text-black shimmer-text !text-editorial-mask">
                LETTERS ON <br />
                <span className="text-black/50 group-hover:text-black transition-colors duration-1000 uppercase">THE GAME</span>
              </h2>
           </motion.div>
           <p className="text-black/60 font-body font-light text-[10px] md:text-right max-w-xs leading-loose uppercase tracking-[0.3em] hidden lg:block group-hover:text-black/10 transition-colors duration-1000">
              ARCHIVED THOUGHTS AND TECHNICAL BLUEPRINTS FROM A CAREER DEPLOYED ACROSS THE 22-YARD SYSTEM.
           </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
           {/* Featured */}
           <div className="lg:col-span-8 flex flex-col gap-24 md:gap-40">
              {blogPosts.filter(p => p.size === "large" || p.size === "medium").map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative cursor-pointer"
                  onClick={() => window.open(post.url, '_blank')}
                >
                   <div className="grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-20 items-center">
                      <div className="md:col-span-6 relative overflow-hidden aspect-[16/10] bg-neutral-100 border border-black/10 group-hover:border-black/30 transition-colors duration-700 shadow-xl">
                         <img 
                           src={post.img} 
                           alt={post.title} 
                           className="w-full h-full object-cover contrast-105 brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
                         />
                         <div className="absolute top-6 left-6 z-10">
                            <span className="bg-white/90 backdrop-blur-3xl text-black px-5 py-2.5 font-heading text-[9px] font-black tracking-[0.5em] uppercase border border-black/10 group-hover:border-black/30 transition-colors duration-500">
                               {post.tag}
                            </span>
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-30" />
                      </div>
                      <div className="md:col-span-4 mt-6 md:mt-0">
                         <div className="flex items-center gap-6 text-black/50 text-[9px] tracking-[0.5em] uppercase mb-10 font-bold group-hover:text-black/70 transition-colors">
                            <span className="flex items-center gap-3"><Clock size={16} strokeWidth={1} /> {post.readTime}</span>
                            <div className="h-px w-6 bg-black/10" />
                            <span>{post.date}</span>
                         </div>
                         <h3 className="text-4xl lg:text-6xl font-heading font-black text-black leading-[0.95] mb-10 uppercase tracking-tighter shimmer-text">
                            {post.title}
                          </h3>
                         <p className="text-black/60 font-body font-light text-[11px] leading-loose uppercase tracking-[0.3em] mb-12 hidden md:block">
                            {post.excerpt}
                          </p>
                         <div className="flex items-center gap-8 group/link">
                            <span className="font-heading text-[10px] font-black tracking-[0.6em] uppercase text-black/70 group-hover/link:text-black transition-colors duration-500">
                               DECONSTRUCT_LOG
                            </span>
                            <div className="h-[1px] flex-1 bg-black/5 group-hover/link:bg-black/30 transition-all duration-700" />
                            <ArrowUpRight className="text-black/50 w-7 h-7 group-hover/link:text-black group-hover/link:rotate-45 transition-all duration-500" />
                         </div>
                      </div>
                   </div>
                </motion.article>
              ))}
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4 flex flex-col gap-16 md:gap-24">
              <div className="p-10 md:p-14 border border-black/10 bg-white shadow-lg mb-12 group">
                 <h4 className="font-heading text-[9px] md:text-[10px] font-bold tracking-[0.8em] uppercase text-black/50 mb-10 group-hover:text-black transition-colors">ARCHIVE_FILTERS</h4>
                 <div className="flex flex-wrap gap-4">
                    {["THEORY", "BIOLOGY", "LEGACY", "SYSTEMS"].map(t => (
                      <span key={t} className="px-6 py-2.5 border border-black/5 bg-black/[0.01] text-[9px] font-bold uppercase tracking-[0.4em] text-black/60 hover:text-black hover:border-black/30 hover:bg-black/5 cursor-pointer transition-all duration-500">
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
                  className="group cursor-pointer border-t border-black/5 pt-12 hover:border-black/20 transition-colors duration-700"
                  onClick={() => window.open(post.url, '_blank')}
                >
                   <div className="relative overflow-hidden aspect-[16/9] mb-10 bg-neutral-100 border border-black/10">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover contrast-105 brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-70" />
                      <div className="absolute bottom-6 left-6">
                         <div className="flex items-center gap-4 text-black/50 text-[8px] md:text-[9px] font-bold tracking-[0.6em] uppercase">
                            <span>{post.tag}</span>
                         </div>
                      </div>
                   </div>
                   <h3 className="text-3xl font-heading font-black text-black mb-8 uppercase leading-[1.1] tracking-tighter shimmer-text">
                      {post.title}
                   </h3>
                   <div className="flex justify-between items-center text-black/50 text-[9px] font-bold tracking-[0.6em] uppercase group-hover:text-black/70 transition-colors">
                      <span>{post.date}</span>
                      <ArrowUpRight size={20} strokeWidth={1} className="text-black/50 group-hover:text-black group-hover:rotate-45 transition-all duration-500" />
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
