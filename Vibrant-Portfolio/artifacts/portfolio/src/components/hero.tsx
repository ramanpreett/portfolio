import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, User, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

const TITLES = [
  PORTFOLIO_DATA.title,
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setWordIdx((i) => i + 1);
    } else {
      timeout = setTimeout(
        () =>
          setDisplayed((d) =>
            deleting ? d.slice(0, -1) : current.slice(0, d.length + 1)
          ),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
  colorClass: [
    "bg-primary/40",
    "bg-secondary/40",
    "bg-accent/40",
    "bg-primary/20",
    "bg-secondary/20",
  ][i % 5],
}));

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const title = useTypewriter(TITLES);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax for the glow blob
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const blobX = useTransform(springX, (v) => `${v}%`);
  const blobY = useTransform(springY, (v) => `${v}%`);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseX.set(x - 50);
    mouseY.set(y - 50);
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Static blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-blob" />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-blob"
          style={{ animationDelay: "3s", animationDuration: "13s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-blob"
          style={{ animationDelay: "6s", animationDuration: "11s" }}
        />

        {/* Mouse-follow interactive glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-[120px] bg-primary/15 pointer-events-none"
          style={{ left: blobX, top: blobY, translateX: "-50%", translateY: "-50%" }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className={`absolute rounded-full ${p.colorClass}`}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{ y: [0, -60, -120], x: [0, 15, -10], opacity: [0.7, 1, 0], scale: [1, 1.3, 0.7] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              repeatDelay: p.delay * 0.5,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-14"
        >
          {/* ── Text side ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Available badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.06 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8 border border-primary/20 cursor-default"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span>Available for new opportunities</span>
              </motion.div>
            </motion.div>

            {/* Greeting with wave */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-semibold text-muted-foreground">Hi there</span>
                <motion.span
                  animate={{ rotate: [0, -20, 10, -15, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3 }}
                  className="text-2xl inline-block origin-bottom-right"
                >
                  👋
                </motion.span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-tight"
            >
              I'm{" "}
              <span className="text-gradient-animate">{PORTFOLIO_DATA.name}</span>
            </motion.h1>

            {/* Typewriter subtitle */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-xl md:text-3xl font-bold text-muted-foreground flex items-center gap-1 justify-center lg:justify-start min-h-[2.5rem]">
                <span>{title}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-0.5 inline-block w-0.5 h-7 md:h-9 bg-primary rounded-full align-middle"
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Building beautiful, scalable, and responsive web applications with a splash of color and a whole lot of passion.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <motion.a
                href="#projects"
                data-testid="link-see-my-work"
                whileHover={{ scale: 1.07, boxShadow: "0 8px 30px rgba(0,0,0,0.18)" }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 rounded-full bg-foreground text-background font-semibold text-base transition-all flex items-center gap-2 group"
              >
                See My Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>

              <div className="flex items-center gap-3">
                {[
                  { href: PORTFOLIO_DATA.contact.github, icon: Github, label: "GitHub", hoverColor: "hover:border-primary hover:text-primary" },
                  { href: PORTFOLIO_DATA.contact.linkedin, icon: Linkedin, label: "LinkedIn", hoverColor: "hover:border-secondary hover:text-secondary" },
                  { href: `mailto:${PORTFOLIO_DATA.contact.email}`, icon: Mail, label: "Email", hoverColor: "hover:border-accent hover:text-accent" },
                ].map(({ href, icon: Icon, label, hoverColor }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    data-testid={`link-${label.toLowerCase()}`}
                    aria-label={label}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3.5 rounded-full bg-card border border-border text-foreground transition-all duration-200 ${hoverColor}`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
            className="flex-shrink-0 relative"
          >
            {/* Floating card — left */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-12 hidden md:block"
              animate={{ y: [0, -14, 0], rotate: [-8, -5, -8] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <div className="h-28 w-20 rounded-3xl border border-white/40 bg-white/50 shadow-2xl backdrop-blur-md dark:bg-white/10">
                <div className="h-full w-full rounded-3xl bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25 p-3">
                  <div className="h-full rounded-2xl border border-white/30 bg-background/60" />
                </div>
              </div>
            </motion.div>

            {/* Floating card — right */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-14 bottom-10 hidden md:block"
              animate={{ y: [0, 14, 0], rotate: [10, 7, 10] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8 }}
            >
              <div className="h-24 w-24 rounded-[1.75rem] border border-white/35 bg-white/45 shadow-2xl backdrop-blur-md dark:bg-white/10">
                <div className="h-full w-full rounded-[1.75rem] bg-gradient-to-br from-secondary/25 via-primary/20 to-accent/25 p-3">
                  <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-white/30 bg-background/60">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-lg shadow-primary/30" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main avatar ring */}
            <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem]">
              {/* Outer spinning ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[3px] animate-spin-slow">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Inner reverse-spinning ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tl from-accent via-primary to-secondary p-[2px] animate-spin-reverse opacity-40">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Glow */}
              <motion.div
                className="absolute inset-3 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-md"
                animate={{ opacity: [0.5, 0.85, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Photo */}
              <div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-2 border-white/30 flex items-center justify-center overflow-hidden"
                data-testid="img-avatar"
              >
                {!imageError ? (
                  <img
                    src={`${import.meta.env.BASE_URL}hero.jpg`}
                    alt="Ramanpreet Kaur"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
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
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/60 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
