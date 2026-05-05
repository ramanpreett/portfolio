import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code2, BookOpen, Music, Plane, Camera, Palette, X, ChevronLeft, ChevronRight } from "lucide-react";

const hobbies = [
  {
    icon: Code2,
    title: "Open Source",
    description: "Contributing to open-source projects and exploring new frameworks on weekends.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-600",
    gradientText: "from-violet-500 to-purple-600",
    images: [
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    ],
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Crafting interfaces in Figma — obsessed with micro-interactions and typography.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-600",
    gradientText: "from-blue-500 to-cyan-500",
    images: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    ],
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "From tech blogs to sci-fi novels — always something on the nightstand.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-600",
    gradientText: "from-emerald-500 to-teal-500",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
    ],
  },
  {
    icon: Music,
    title: "Music",
    description: "Lo-fi beats for focus, Bollywood classics for energy — music fuels the flow.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    text: "text-orange-600",
    gradientText: "from-orange-500 to-amber-500",
    images: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
      "https://images.unsplash.com/photo-1517260914-2e9f8a2b6f33?w=1200&q=80",
    ],
  },
  {
    icon: Plane,
    title: "Travelling",
    description: "Exploring new places, cultures, and street food — every trip is an inspiration.",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    text: "text-rose-600",
    gradientText: "from-rose-500 to-pink-500",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80",
    ],
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing everyday moments — candid shots, golden hour, and architecture.",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-600",
    gradientText: "from-indigo-500 to-blue-600",
    images: [
      "/portfolio/photography/1000023014.jpg",
      "/portfolio/photography/1000060475.jpg",
      "/portfolio/photography/1000159995.jpg",
      "/portfolio/photography/1000179554.jpg",
      "/portfolio/photography/1000179555.jpg",
      "/portfolio/photography/1000179556.jpg",
      "/portfolio/photography/1000179557.jpg",
      "/portfolio/photography/1000179558.jpg",
      "/portfolio/photography/1000179559.jpg",
      "/portfolio/photography/1000179574.jpg",
      "/portfolio/photography/1000179577.jpg",
      "/portfolio/photography/20221107_120648.jpg",
      "/portfolio/photography/20221107_121138.jpg",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 16 } },
};

export function Hobbies() {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [galleryTitle, setGalleryTitle] = useState("");

  function openGallery(hobby: typeof hobbies[0]) {
    setCurrentImages(hobby.images);
    setActiveIdx(0);
    setGalleryTitle(hobby.title);
    setOpen(true);
  }

  function closeGallery() {
    setOpen(false);
    setCurrentImages([]);
    setActiveIdx(0);
  }

  function prev() { setActiveIdx((i) => (i - 1 + currentImages.length) % currentImages.length); }
  function next() { setActiveIdx((i) => (i + 1) % currentImages.length); }

  return (
    <section id="hobbies" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-primary/10 text-primary border border-primary/20 mb-4"
          >
            Beyond Code
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The things that keep me curious, creative, and energized outside of work.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.title}
                variants={item}
                data-testid={`hobby-card-${hobby.title.toLowerCase().replace(/\s+/g, "-")}`}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative p-6 rounded-2xl bg-card border ${hobby.border} hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer shine-on-hover`}
                onClick={() => openGallery(hobby)}
              >
                {/* Gradient wash */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-400 rounded-2xl`}
                />

                {/* Icon with bounce */}
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${hobby.bg} ${hobby.text} mb-5 shadow-sm`}
                >
                  <Icon size={26} />
                </motion.div>

                <h3 className={`text-lg font-bold mb-2 ${hobby.text}`}>{hobby.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{hobby.description}</p>

                {/* "View photos" hint with count */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className={`text-xs font-semibold ${hobby.text} flex items-center gap-1`}>
                    {hobby.images ? `${hobby.images.length} photos` : "View photos"} →
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeGallery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="relative z-10 max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">{galleryTitle}</h3>
                  <span className="text-sm text-muted-foreground font-medium">
                    {activeIdx + 1} / {currentImages.length}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  onClick={closeGallery}
                >
                  <X size={20} />
                </motion.button>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIdx}
                    src={currentImages[activeIdx]}
                    alt="Gallery"
                    className="w-full max-h-[60vh] object-contain"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Nav arrows */}
                {currentImages.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow hover:bg-background transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow hover:bg-background transition-colors"
                    >
                      <ChevronRight size={20} />
                    </motion.button>
                  </>
                )}
              </div>

              {/* Thumbnail grid — handles any number of photos */}
              <div className="p-4 border-t border-border">
                <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 max-h-40 overflow-y-auto pr-1">
                  {currentImages.map((src, i) => (
                    <motion.button
                      key={src}
                      onClick={() => setActiveIdx(i)}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      className={`rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                        activeIdx === i
                          ? "border-primary shadow-md shadow-primary/30 opacity-100"
                          : "border-transparent opacity-55 hover:opacity-85"
                      }`}
                    >
                      <img src={src} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
                {/* Dot indicators (compact for many photos) */}
                <div className="flex justify-center gap-1.5 mt-3 flex-wrap">
                  {currentImages.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      animate={{
                        scale: activeIdx === i ? 1.4 : 1,
                        opacity: activeIdx === i ? 1 : 0.35,
                        width: activeIdx === i ? 16 : 8,
                      }}
                      transition={{ duration: 0.2 }}
                      className="h-2 rounded-full bg-primary"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
