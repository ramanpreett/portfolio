import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 22 });
  const springY = useSpring(y, { stiffness: 120, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={`shine-on-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/50 border-y border-border relative overflow-hidden">
      {/* Floating background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-secondary/10 text-secondary border border-secondary/20 mb-4"
          >
            What I work with
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Toolkit<span className="text-secondary">.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {PORTFOLIO_DATA.skills.map((category) => (
            <TiltCard
              key={category.category}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 min-h-[20rem] cursor-default"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 rounded-2xl ${category.bg} ${category.color}`}
                >
                  <category.icon size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-muted border border-border text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-200 cursor-default"
                  >
                    <skill.icon className="text-current" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
