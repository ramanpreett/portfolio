import { motion } from "framer-motion";
import { GraduationCap, School, Calendar, Award, Star } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

/* One accent per entry — mirrors the site's primary / secondary / accent palette */
const ENTRY_STYLES = [
  {
    /* MCA — primary (violet) */
    iconBg:  "bg-primary/10 text-primary border border-primary/20",
    badge:   "bg-primary/10 text-primary border border-primary/20",
    gradeBg: "bg-primary text-primary-foreground",
    dot:     "bg-primary",
    ring:    "ring-primary/30",
    line:    "bg-primary/40",
    glow:    "hover:border-primary/30 hover:shadow-primary/10",
  },
  {
    /* BCA — secondary (blue) */
    iconBg:  "bg-secondary/10 text-secondary border border-secondary/20",
    badge:   "bg-secondary/10 text-secondary border border-secondary/20",
    gradeBg: "bg-secondary text-secondary-foreground",
    dot:     "bg-secondary",
    ring:    "ring-secondary/30",
    line:    "bg-secondary/40",
    glow:    "hover:border-secondary/30 hover:shadow-secondary/10",
  },
  {
    /* Class 12 — accent (orange) */
    iconBg:  "bg-accent/10 text-accent border border-accent/20",
    badge:   "bg-accent/10 text-accent border border-accent/20",
    gradeBg: "bg-accent text-accent-foreground",
    dot:     "bg-accent",
    ring:    "ring-accent/30",
    line:    "bg-accent/40",
    glow:    "hover:border-accent/30 hover:shadow-accent/10",
  },
  {
    /* Class 10 — emerald (a warm complement already used in hobbies) */
    iconBg:  "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    badge:   "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    gradeBg: "bg-emerald-500 text-white",
    dot:     "bg-emerald-500",
    ring:    "ring-emerald-500/30",
    line:    "bg-emerald-500/40",
    glow:    "hover:border-emerald-500/30 hover:shadow-emerald-500/10",
  },
];

function entryIcon(degree: string) {
  return degree.startsWith("Class") ? School : GraduationCap;
}

export function Education() {
  const entries = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-24 bg-muted/50 border-y border-border relative overflow-hidden">

      {/* Subtle background blobs — same style as Skills / Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-primary/10 text-primary border border-primary/20 mb-4"
          >
            Academic Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Education<span className="text-primary">.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My path from school to postgraduate studies.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative max-w-4xl mx-auto">

          {/* Central line — desktop */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary)/0.5), hsl(var(--secondary)/0.3), transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          {/* Left rail — mobile */}
          <motion.div
            className="absolute left-5 top-6 bottom-6 w-px md:hidden"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary)/0.5), hsl(var(--secondary)/0.3), transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          <div className="flex flex-col gap-12">
            {entries.map((edu, i) => {
              const st = ENTRY_STYLES[i % ENTRY_STYLES.length];
              const Icon = entryIcon(edu.degree);
              const isLeft = i % 2 === 0;   // even → card on left side

              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: isLeft ? -48 : 48, y: 8 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 85, damping: 18, delay: i * 0.08 }}
                  className={`relative flex items-center gap-4 md:gap-0
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* ── Card ── */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`
                      shine-on-hover
                      w-full md:w-[46%]
                      bg-card border border-border rounded-2xl p-6
                      shadow-sm hover:shadow-lg transition-all duration-300 cursor-default
                      ${st.glow}
                      ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                    `}
                  >
                    {/* Period pill */}
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border mb-3 ${st.badge}`}>
                      <Calendar size={11} />
                      {edu.period}
                    </div>

                    <h3 className="text-xl font-black text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-4">{edu.institution}</p>

                    {/* Tags row */}
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Status */}
                      <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${st.badge}`}>
                        <Award size={10} />
                        {edu.status}
                      </span>

                      {/* Board (CBSE) */}
                      {edu.board && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                          {edu.board}
                        </span>
                      )}

                      {/* Grade / CGPA — prominent badge, pushed to right */}
                      {edu.grade && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 300, delay: i * 0.08 + 0.35 }}
                          className={`inline-flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-full ml-auto ${st.gradeBg}`}
                        >
                          <Star size={10} className="fill-current" />
                          {edu.grade}
                        </motion.span>
                      )}
                    </div>
                  </motion.div>

                  {/* ── Centre icon node (desktop) ── */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-md ring-2 ${st.ring} ${st.iconBg}`}
                    >
                      <Icon size={19} />
                    </motion.div>
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ring-2 ${st.ring}`}
                      animate={{ scale: [1, 1.55, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.55 }}
                    />
                  </div>

                  {/* Connector line (desktop) */}
                  <div
                    className={`
                      hidden md:block absolute h-px w-8
                      ${isLeft ? "left-[calc(50%+22px)]" : "right-[calc(50%+22px)]"}
                      ${st.line}
                    `}
                  />

                  {/* ── Mobile left icon node ── */}
                  <div className="md:hidden flex-shrink-0 relative">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ring-2 ${st.ring} ${st.iconBg}`}
                    >
                      <Icon size={17} />
                    </motion.div>
                    <motion.div
                      className={`absolute inset-0 rounded-xl ring-2 ${st.ring}`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.55 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
