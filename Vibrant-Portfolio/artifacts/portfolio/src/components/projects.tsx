import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work<span className="text-accent">.</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl">A showcase of full-stack applications built with modern tools.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-lg"
            >
              {/* Colorful decorative top bar */}
              <div className={`h-3 w-full bg-gradient-to-r ${project.color}`} />
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.githubLink} className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted">
                      <Github size={20} />
                    </a>
                    <a href={project.liveLink} className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
