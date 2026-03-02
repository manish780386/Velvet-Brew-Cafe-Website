import { motion } from "framer-motion";

export default function Stats() {

  const stats = [
    { number: "10K+", label: "Cups Served" },
    { number: "5K+", label: "Happy Clients" },
    { number: "12+", label: "Coffee Variants" }
  ];

  return (
    <section className="bg-black py-20 text-white text-center">

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">

        {stats.map((stat,i)=>(
          <motion.div
            key={i}
            initial={{opacity:0, scale:0.8}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6, delay:i*0.2}}
            className="p-10 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent border border-yellow-400/30"
          >
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-3">
              {stat.number}
            </h2>
            <p className="text-lg tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}