import { motion } from "framer-motion";

export default function MenuCard({item,add}){
  return(
    <motion.div
      whileHover={{scale:1.05,y:-10}}
      className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
    >
      <img src={item.img} className="w-full h-52 object-cover"/>

      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
        <p className="text-yellow-400 mb-4">₹{item.price}</p>

        <button
          onClick={()=>add(item)}
          className="px-6 py-2 bg-yellow-400 text-black rounded-full font-bold"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}