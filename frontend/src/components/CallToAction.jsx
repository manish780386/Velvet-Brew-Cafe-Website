import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CallToAction(){

  const nav = useNavigate();

  return(
    <section className="bg-yellow-400 py-20 text-black text-center">

      <motion.h2
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="text-4xl font-bold mb-8"
      >
        Ready For The Perfect Coffee Moment? ☕
      </motion.h2>

      <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
        onClick={()=>nav("/book")}
        className="px-10 py-4 bg-black text-white rounded-full font-bold text-lg shadow-xl"
      >
        Book Your Table Now
      </motion.button>

    </section>
  );
}