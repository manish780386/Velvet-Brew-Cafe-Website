import { motion } from "framer-motion";

const photos = [
  "/Photos/image1.jpg",
  "/Photos/image2.jpg",
  "/Photos/image3.jpg",
];

export default function AnimatedGallery() {
  return (
    <section className="bg-black py-20 text-white overflow-hidden">
      <h2 className="text-5xl font-bold text-center mb-16">
        Our Coffee Moments ☕
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-10">

        {photos.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={img}
              alt="coffee"
              className="w-full h-[400px] object-cover group-hover:brightness-110 transition"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>

            {/* Text */}
            <div className="absolute bottom-5 left-5 text-xl font-bold">
              Premium Coffee ✨
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}