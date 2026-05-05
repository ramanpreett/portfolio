import { motion } from "framer-motion";
import { Mail, Phone, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.25, 1], x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/8 rounded-full blur-[60px]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="relative"
          >
            {/* Animated gradient border ring */}
            <motion.div
              className="absolute -inset-[3px] rounded-[3.25rem] bg-gradient-to-r from-primary via-secondary to-accent opacity-60"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              style={{ backgroundSize: "300%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative bg-card rounded-[3rem] p-10 md:p-20 shadow-2xl border border-transparent overflow-hidden">
              {/* Blurred blobs inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold mb-8"
                >
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Sparkles size={14} />
                  </motion.span>
                  Open to work
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                >
                  Let's build{" "}
                  <br />
                  something{" "}
                  <span className="text-gradient-animate">amazing</span>.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                  <motion.a
                    href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                      y: -4,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg flex items-center gap-2.5 w-full sm:w-auto justify-center transition-all group"
                  >
                    <motion.span
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Mail size={20} />
                    </motion.span>
                    Say Hello
                  </motion.a>

                  <motion.a
                    href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                    whileHover={{
                      scale: 1.07,
                      y: -4,
                      borderColor: "hsl(var(--primary))",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-muted text-foreground font-bold text-lg flex items-center gap-2.5 border border-border w-full sm:w-auto justify-center transition-all hover:shadow-md"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Phone size={20} />
                    </motion.span>
                    Call Me
                  </motion.a>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <span>Or find me at</span>
                  <motion.a
                    href={PORTFOLIO_DATA.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </motion.a>
                  <span>·</span>
                  <motion.a
                    href={PORTFOLIO_DATA.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, color: "hsl(var(--secondary))" }}
                    className="font-semibold text-foreground hover:text-secondary transition-colors"
                  >
                    LinkedIn
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
