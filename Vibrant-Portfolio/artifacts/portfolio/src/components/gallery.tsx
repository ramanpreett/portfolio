import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  `${import.meta.env.BASE_URL}1000049369.jpg`,
  `${import.meta.env.BASE_URL}1000049766.jpg`,
  `${import.meta.env.BASE_URL}1000059145.jpg`,
  `${import.meta.env.BASE_URL}1000073135.jpg`,
  `${import.meta.env.BASE_URL}1000073228.jpg`,
  `${import.meta.env.BASE_URL}1000073739.jpg`,
  `${import.meta.env.BASE_URL}1000073740.jpg`,
  `${import.meta.env.BASE_URL}1000073741.jpg`,
  `${import.meta.env.BASE_URL}1000177730.jpg`,
  `${import.meta.env.BASE_URL}1000177731.jpg`,
  `${import.meta.env.BASE_URL}1000177735.jpg`,
  `${import.meta.env.BASE_URL}1000177738.jpg`,
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
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary border border-secondary/20 mb-4">
            Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A peek into my world beyond the screen — places, people, and moments worth keeping.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2 italic">Photos loaded from public folder.</p>
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
              variants={item}
              className={`relative overflow-hidden cursor-pointer group break-inside-avoid [margin:0] ${vibrantBorders[index % vibrantBorders.length]}`}
              data-testid={`gallery-item-${index + 1}`}
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected}
              alt="Selected gallery photo"
              className="block w-full h-auto"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
              onClick={() => setSelected(null)}
              data-testid="lightbox-close"
            >
              <X size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
