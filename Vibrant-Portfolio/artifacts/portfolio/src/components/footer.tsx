import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 border-t border-border bg-background relative overflow-hidden"
    >
      {/* Animated gradient top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-muted-foreground font-medium"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-foreground">{PORTFOLIO_DATA.name}</span>.{" "}
          Designed & Built with{" "}
          <motion.span
            className="inline-block"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ❤️
          </motion.span>
        </motion.p>

        {/* Subtle back-to-top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 text-xs text-muted-foreground/60 hover:text-primary transition-colors font-medium"
        >
          ↑ Back to top
        </motion.button>
      </div>
    </motion.footer>
  );
}
