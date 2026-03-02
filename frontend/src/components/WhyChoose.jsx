import { motion } from "framer-motion";
import { Coffee, Star, Users } from "lucide-react";

export default function WhyChoose() {
  const items = [
    {
      icon: <Coffee size={40} />,
      title: "Premium Beans",
      desc: "Imported high quality coffee beans from Italy & Brazil."
    },
    {
      icon: <Star size={40} />,
      title: "5★ Experience",
      desc: "Rated best café in the city with luxury ambience."
    },
    {
      icon: <Users size={40} />,
      title: "Happy Customers",
      desc: "5000+ satisfied coffee lovers every month."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 text-white">

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="text-5xl font-bold text-center mb-20"
      >
        Why Choose Velvet Brew? ☕
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 px-10 max-w-6xl mx-auto">

        {items.map((item,i)=>(
          <motion.div
            key={i}
            initial={{opacity:0, y:60}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:i*0.2}}
            whileHover={{scale:1.05}}
            className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl text-center shadow-2xl border border-white/10"
          >
            <div className="flex justify-center mb-6 text-yellow-400">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>
            <p className="text-gray-300">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}