import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, ArrowUpRight, Send, Globe, Shield } from "lucide-react";
import samadPortrait from "@/assets/samad_portrait_new.webp";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Inquiry transmitted. We will respond within 48 hours.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-white overflow-hidden">
      {/* Background depth text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.02] overflow-hidden whitespace-nowrap">
         <span className="text-[35vw] font-heading font-black leading-none uppercase tracking-tighter block translate-y-1/3 shimmer-text">CONNECT_ALPHA</span>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start">
           
           {/* Info Side */}
           <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                 <span className="text-black/40 font-heading tracking-[1em] uppercase text-[9px] md:text-[10px] mb-10 block font-bold">
                    SYSTEM_INQUIRY / INTERFACE_START
                 </span>
                 <h2 className="text-black shimmer-text !text-editorial-mask mb-12">
                   OPEN FOR <br />
                   <span className="text-black/20 group-hover:text-black transition-colors duration-1000 uppercase">DIALOGUE</span>
                 </h2>
                 
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                   className="relative aspect-square w-full max-w-[200px] overflow-hidden group/portrait shadow-2xl border border-black/5 bg-white mb-16"
                 >
                    <img 
                      src={samadPortrait} 
                      alt="Samad Fallah Portrait" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/portrait:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                 </motion.div>
                 
                 <div className="space-y-12 md:space-y-20 max-w-sm mt-16">
                    <p className="text-black/30 font-body font-light text-xs md:text-sm leading-loose uppercase tracking-[0.3em]">
                       AVAILABLE FOR PROFESSIONAL COACHING CONSULTATIONS, TECHNICAL MASTERCLASSES, AND GLOBAL PERFORMANCE COLLABORATIONS IN THE 22-YARD SYSTEM.
                    </p>

                    <div className="space-y-8">
                       <a href="https://instagram.com/samad_fallah02" target="_blank" rel="noopener noreferrer" 
                          className="flex items-center justify-between group py-8 border-b border-black/5 hover:border-black/30 transition-all duration-700">
                          <div className="flex items-center gap-6">
                             <Instagram size={24} strokeWidth={1.5} className="text-black/30 group-hover:text-black transition-all duration-500" />
                             <span className="font-heading text-[10px] font-black tracking-[0.6em] uppercase text-black/50 group-hover:text-black transition-colors">INSTAGRAM_CORE</span>
                          </div>
                          <ArrowUpRight size={22} className="text-black/10 group-hover:text-black group-hover:rotate-45 transition-all duration-500" />
                       </a>
                       <div className="flex items-center justify-between group py-8 border-b border-black/5">
                          <div className="flex items-center gap-6">
                             <Mail size={24} strokeWidth={1.5} className="text-black/30 group-hover:text-black transition-all duration-500" />
                             <span className="font-heading text-[10px] font-black tracking-[0.6em] uppercase text-black/50">DIRECT_TRANSMSN</span>
                          </div>
                          <span className="text-[9px] text-black/30 uppercase tracking-[0.5em] font-bold">READY_STATE</span>
                       </div>
                    </div>

                    <div className="pt-16 border-l border-black/15 md:pl-12 pl-8 group">
                       <span className="font-heading text-[10px] tracking-[0.8em] uppercase text-black/30 leading-relaxed block font-bold transition-colors group-hover:text-black">
                          CURRENT ASSIGNMENT: <br />
                          <span className="text-black/50">NASHIK TITANS / MPL_HQ</span>
                       </span>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Form */}
           <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-black/10 p-10 md:p-20 relative overflow-hidden group hover:border-black/20 transition-colors duration-1000 shadow-xl"
              >
                 <div className="absolute inset-0 bg-black/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                 <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)", backgroundSize: "100% 4px" }} />
                 
                 <form onSubmit={handleSubmit} className="relative z-10 space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                       <div className="relative group/field">
                          <input 
                            type="text" 
                            required
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent border-b border-black/10 py-6 text-black focus:outline-none focus:border-black transition-all font-body peer uppercase text-xs tracking-[0.3em]"
                            placeholder=" "
                          />
                          <label className="absolute left-0 top-6 text-[9px] uppercase font-bold tracking-[0.6em] text-black/20 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-6 peer-focus:-top-6 peer-focus:text-black">
                            IDENTIFICATION_TAG
                          </label>
                       </div>
                       <div className="relative group/field">
                          <input 
                            type="email" 
                            required
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-black/10 py-6 text-black focus:outline-none focus:border-black transition-all font-body peer uppercase text-xs tracking-[0.3em]"
                            placeholder=" "
                          />
                          <label className="absolute left-0 top-6 text-[9px] uppercase font-bold tracking-[0.6em] text-black/20 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-6 peer-focus:-top-6 peer-focus:text-black">
                            RESPONSE_CHANNEL
                          </label>
                       </div>
                    </div>

                    <div className="relative group/field">
                       
                       
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="relative w-full py-10 border border-black/10 group/btn bg-black/[0.02] hover:bg-black transition-all duration-700 overflow-hidden shadow-lg"
                    >
                       <div className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700" />
                       <div className="relative flex items-center justify-center gap-10">
                          <span className="font-heading text-[10px] md:text-[11px] font-black tracking-[1em] uppercase text-black group-hover/btn:text-white transition-colors duration-500">
                            {isSubmitting ? "TRANSMITTING_DATA..." : "DISPATCH_INQUIRY"}
                          </span>
                          <Send size={18} className="text-black/40 group-hover/btn:text-white transition-colors duration-500" />
                       </div>
                    </button>
                    
                 </form>
              </motion.div>
           </div>
        </div>

        {/* Footer */}
       
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
