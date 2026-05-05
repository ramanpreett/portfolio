import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

const ABOUT_TEXT =
  "I am a creative and technically sharp software developer who blends UI craftsmanship with solid full-stack engineering. I genuinely love building things—translating complex problems into elegant, user-centric solutions. With a strong foundation in modern web technologies, I strive to create fresh, energetic, and confident applications that leave a lasting impression.";

const words = ABOUT_TEXT.split(" ");

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const HIGHLIGHTS = ["UI craftsmanship", "full-stack engineering", "elegant", "user-centric"];

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-60 h-60 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.div
              className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">About me</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-10 leading-tight"
          >
            Nice to meet{" "}
            <motion.span
              className="text-gradient from-primary via-secondary to-accent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              style={{ backgroundSize: "300%" }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              you
            </motion.span>
            <span className="text-primary">.</span>
          </motion.h2>

          {/* Word-by-word animated text */}
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium flex flex-wrap gap-x-[0.3em]"
          >
            {words.map((word, i) => {
              const isHighlight = HIGHLIGHTS.some((h) =>
                ABOUT_TEXT.includes(h) && h.split(" ").includes(word)
              );
              return (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={isHighlight ? "text-foreground font-semibold" : ""}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 grid grid-cols-3 gap-6"
          >
            {[
              { value: "3+", label: "Years Coding" },
              { value: "10+", label: "Projects Built" },
              { value: "∞", label: "Curiosity" },
            ].map(({ value, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-black text-gradient-animate mb-1">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
