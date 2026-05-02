import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-[3rem] p-10 md:p-20 shadow-2xl border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                Let's build <br/> something <span className="text-gradient from-primary to-secondary">amazing</span>.
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className="px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Mail size={20} /> Say Hello
                </a>
                <a
                  href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                  className="px-8 py-4 rounded-full bg-muted text-foreground font-semibold text-lg hover:bg-muted/80 transition-colors flex items-center gap-2 border border-border w-full sm:w-auto justify-center"
                >
                  <Phone size={20} /> Call Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
