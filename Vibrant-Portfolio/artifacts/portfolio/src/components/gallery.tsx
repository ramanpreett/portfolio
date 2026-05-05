import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryItems = [
  "/portfolio/1000049369.jpg",
  "/portfolio/1000049766.jpg",
  "/portfolio/1000059145.jpg",
  "/portfolio/1000073135.jpg",
  "/portfolio/1000073228.jpg",
  "/portfolio/1000073739.jpg",
  "/portfolio/1000073740.jpg",
  "/portfolio/1000073741.jpg",
  "/portfolio/1000177730.jpg",
  "/portfolio/1000177731.jpg",
  "/portfolio/1000177735.jpg",
  "/portfolio/1000177738.jpg",
];

const vibrantBorders = [
  "border-4 border-violet-400",
  "border-4 border-pink-400",
  "border-4 border-amber-400",
  "border-4 border-cyan-400",
  "border-4 border-emerald-400",
  "border-4 border-orange-400",
  "border-4 border-rose-400",
  "border-4 border-blue-400",
  "border-4 border-lime-400",
  "border-4 border-fuchsia-400",
  "border-4 border-teal-400",
  "border-4 border-indigo-400",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.85, rotate: -3 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  function prev() { setSelected((i) => ((i ?? 0) - 1 + galleryItems.length) % galleryItems.length); }
  function next() { setSelected((i) => ((i ?? 0) + 1) % galleryItems.length); }

  return (
    <section id="gallery" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-secondary/10 text-secondary border border-secondary/20 mb-4"
          >
            Moments
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">My Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A peek into my world beyond the screen — places, people, and moments worth keeping.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2 italic">
            Photos loaded from public folder.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="columns-2 md:columns-3 [column-gap:0] max-w-6xl mx-auto"
        >
          {galleryItems.map((src, index) => (
            <motion.div
              key={src}
              variants={itemVariant}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className={`relative overflow-hidden cursor-pointer group break-inside-avoid [margin:0] ${vibrantBorders[index % vibrantBorders.length]}`}
              data-testid={`gallery-item-${index + 1}`}
              onClick={() => setSelected(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="block w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay with zoom icon */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30"
                >
                  <ZoomIn size={22} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-5 right-5 bg-white/15 backdrop-blur-sm text-white rounded-full p-2.5 hover:bg-white/30 transition-colors border border-white/20"
              onClick={() => setSelected(null)}
              data-testid="lightbox-close"
            >
              <X size={22} />
            </motion.button>

            {/* Counter */}
            <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-full border border-white/20">
              {selected + 1} / {galleryItems.length}
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected}
                  src={galleryItems[selected]}
                  alt={`Gallery photo ${selected + 1}`}
                  className="block w-full h-auto max-h-[80vh] object-contain"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Prev/Next */}
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Dot indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryItems.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                  animate={{ scale: selected === i ? 1.4 : 1, opacity: selected === i ? 1 : 0.35 }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
