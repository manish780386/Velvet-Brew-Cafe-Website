import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";

const images = [
  "/gallery/gallery.jpg",
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
  "/gallery/gallery9.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Velvet Brew Moments ☕
      </motion.h1>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-3xl cursor-pointer group"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              alt="gallery"
              className="w-full rounded-3xl transition duration-500 group-hover:brightness-110"
            />

            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          </motion.div>
        ))}

      </div>

      {/* Fullscreen Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected}
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            className="max-h-[90%] max-w-[90%] rounded-3xl shadow-2xl"
          />
        </motion.div>
      )}

      <Footer />

    </div>
  );
}