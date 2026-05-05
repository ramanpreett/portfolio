import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, BookOpen, Music, Plane, Camera, Palette, X } from "lucide-react";

const hobbies = [
  {
    icon: Code2,
    title: "Open Source",
    description: "Contributing to open-source projects and exploring new frameworks on weekends.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-600",
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
    images: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&q=80",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1200&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80",
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hobbies() {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  function openGallery(images: string[]) {
    setCurrentImages(images);
    setActiveImage(images[0] ?? null);
    setOpen(true);
  }

  function closeGallery() {
    setOpen(false);
    setCurrentImages([]);
    setActiveImage(null);
  }

  return (
    <section id="hobbies" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
            Beyond Code
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
                className={`group relative p-6 rounded-2xl bg-card border ${hobby.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer`}
                onClick={() => hobby.images && openGallery(hobby.images)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${hobby.bg} ${hobby.text} mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${hobby.text}`}>{hobby.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{hobby.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
        {/* Gallery Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={closeGallery} />
            <div className="relative z-10 max-w-5xl w-full mx-4">
              <div className="bg-card rounded-lg p-4 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">Gallery</h3>
                  <button
                    className="p-2 rounded hover:bg-muted"
                    aria-label="Close gallery"
                    onClick={closeGallery}
                  >
                    <X />
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  {activeImage && (
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt="Selected"
                      className="max-h-[70vh] w-full object-contain rounded"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className="mt-4 w-full overflow-x-auto">
                    <div className="flex gap-3">
                      {currentImages.map((src) => (
                        <button
                          key={src}
                          onClick={() => setActiveImage(src)}
                          className={`rounded overflow-hidden border ${activeImage === src ? "border-foreground" : "border-transparent"}`}
                        >
                          <img src={src} alt="thumb" className="h-20 w-32 object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
