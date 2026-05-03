import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, User } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-50 mix-blend-multiply animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] opacity-50 mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[100px] opacity-50 mix-blend-multiply animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-14">

          {/* Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-gradient from-primary via-secondary to-accent">
                {PORTFOLIO_DATA.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl"
            >
              A {PORTFOLIO_DATA.title} building beautiful, scalable, and responsive web applications with a splash of color.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <a
                href="#projects"
                data-testid="link-see-my-work"
                className="px-7 py-3.5 rounded-full bg-foreground text-background font-semibold text-base hover:scale-105 transition-transform flex items-center gap-2"
              >
                See My Work <ArrowRight size={18} />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-github"
                  className="p-3.5 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={PORTFOLIO_DATA.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-linkedin"
                  className="p-3.5 rounded-full bg-card border border-border text-foreground hover:border-secondary hover:text-secondary transition-colors hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  data-testid="link-email"
                  className="p-3.5 rounded-full bg-card border border-border text-foreground hover:border-accent hover:text-accent transition-colors hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 top-12 hidden md:block"
              initial={{ opacity: 0, x: -10, y: 10, rotate: -8 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -10, 0],
                rotate: [-8, -6, -8],
              }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              style={{
                transform: "perspective(1200px) rotateX(12deg) rotateY(-18deg)",
              }}
            >
              <div className="h-28 w-20 rounded-3xl border border-white/40 bg-white/50 shadow-2xl backdrop-blur-md dark:bg-white/10">
                <div className="h-full w-full rounded-3xl bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25 p-3">
                  <div className="h-full rounded-2xl border border-white/30 bg-background/60" />
                </div>
              </div>
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 bottom-10 hidden md:block"
              initial={{ opacity: 0, x: 10, y: -10, rotate: 10 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, 12, 0],
                rotate: [10, 8, 10],
              }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
              style={{
                transform: "perspective(1200px) rotateX(10deg) rotateY(18deg)",
              }}
            >
              <div className="h-24 w-24 rounded-[1.75rem] border border-white/35 bg-white/45 shadow-2xl backdrop-blur-md dark:bg-white/10">
                <div className="h-full w-full rounded-[1.75rem] bg-gradient-to-br from-secondary/25 via-primary/20 to-accent/25 p-3">
                  <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-white/30 bg-background/60">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-lg shadow-primary/30" />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem]">
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-[spin_8s_linear_infinite]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Inner glow */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-md" />

              {/* Photo / placeholder */}
              <div
                className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-2 border-white/30 flex items-center justify-center overflow-hidden"
                data-testid="img-avatar"
              >
                {!imageError ? (
                  <img
                    src={`${import.meta.env.BASE_URL}hero.jpg`}
                    alt="Ramanpreet Kaur"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-primary/60 select-none">
                    <User size={56} strokeWidth={1.2} />
                    <span className="text-xs font-medium text-muted-foreground">Photo unavailable</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
