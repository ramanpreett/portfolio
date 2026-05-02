import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Toolkit<span className="text-secondary">.</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl">The technologies I use to bring ideas to life.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {PORTFOLIO_DATA.skills.map((category) => (
            <motion.div 
              key={category.category}
              variants={itemVariants}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow min-h-[20rem]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl ${category.bg} ${category.color}`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-muted border border-border text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    <skill.icon className="text-current" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
