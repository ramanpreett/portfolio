import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-accent/10 text-accent border border-accent/20 mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Selected Work<span className="text-accent">.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of full-stack applications built with modern tools.
          </p>
        </motion.div>

        {/* Cards grid — each card triggers its own animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="shine-on-hover group relative rounded-3xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
            >
              {/* Animated gradient top bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.color}`}
                style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
              />

              {/* Subtle hover glow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`} />

              <div className="p-8">
                {/* Title + links */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors duration-300 pr-4">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted-foreground hover:text-foreground transition-colors p-2.5 rounded-full hover:bg-muted"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted-foreground hover:text-foreground transition-colors p-2.5 rounded-full hover:bg-muted"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, ti) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + ti * 0.06 + 0.2, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Corner arrow on hover */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 rounded-full bg-primary text-primary-foreground shadow-lg">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
