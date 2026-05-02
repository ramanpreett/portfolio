import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education.</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {PORTFOLIO_DATA.education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-background text-foreground p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-2 border-transparent hover:border-secondary transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 text-secondary rounded-2xl hidden sm:block">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground font-medium">{edu.institution}</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-semibold text-primary">{edu.period}</p>
                <span className="inline-block mt-1 px-3 py-1 bg-muted rounded-full text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {edu.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
