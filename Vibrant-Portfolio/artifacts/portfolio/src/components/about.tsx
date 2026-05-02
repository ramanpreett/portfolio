import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Nice to meet you.<span className="text-primary">.</span>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium">
              I am a creative and technically sharp software developer who blends UI craftsmanship with solid full-stack engineering. I genuinely love building things—translating complex problems into elegant, user-centric solutions. With a strong foundation in modern web technologies, I strive to create fresh, energetic, and confident applications that leave a lasting impression.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
