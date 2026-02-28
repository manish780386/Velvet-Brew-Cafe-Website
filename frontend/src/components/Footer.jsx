import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaCoffee,
  FaMapMarkerAlt,
  FaPhone,
  FaClock
} from "react-icons/fa";

export default function Footer(){

  return(
    <footer className="relative bg-black text-white overflow-hidden pt-24 pb-10">

      {/* 🔥 Floating Coffee Background */}
      <motion.div
        animate={{ y:[0,-40,0], rotate:[0,10,-10,0] }}
        transition={{ repeat:Infinity, duration:8 }}
        className="absolute text-yellow-400 text-[200px] opacity-10 -top-10 -right-10"
      >
        <FaCoffee/>
      </motion.div>

      {/* 🔥 Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        {/* Cafe Info */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1}}
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            ☕ Velvet Brew
          </h2>
          <p className="text-gray-400">
            Premium coffee, cozy vibes, unforgettable taste.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{delay:0.2}}
        >
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>

          <div className="space-y-2">
            <Link to="/menu" className="block hover:text-yellow-400">Menu</Link>
            <Link to="/gallery" className="block hover:text-yellow-400">Gallery</Link>
            <Link to="/book" className="block hover:text-yellow-400">Book Table</Link>
            <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{delay:0.4}}
          className="space-y-3"
        >
          <h3 className="font-bold text-xl mb-4">Contact</h3>

          <p className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt/> Huzurganj, India
          </p>

          <p className="flex items-center gap-2 text-gray-400">
            <FaPhone/> +91 98765 43210
          </p>

          <p className="flex items-center gap-2 text-gray-400">
            <FaClock/> 8AM – 11PM Daily
          </p>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{delay:0.6}}
        >
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>

          <div className="flex gap-5 text-2xl">

            <motion.a
              whileHover={{scale:1.3, rotate:10}}
              href="#"
              className="hover:text-yellow-400"
            >
              <FaInstagram/>
            </motion.a>

            <motion.a
              whileHover={{scale:1.3, rotate:-10}}
              href="#"
              className="hover:text-yellow-400"
            >
              <FaFacebook/>
            </motion.a>

            <motion.a
              whileHover={{scale:1.3, rotate:10}}
              href="#"
              className="hover:text-yellow-400"
            >
              <FaTwitter/>
            </motion.a>

          </div>
        </motion.div>

      </div>

      {/* 🔥 Bottom Line */}
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        className="text-center mt-16 text-gray-500 border-t border-white/10 pt-6"
      >
        © 2026 Velvet Brew Café • Made with ❤️ & Coffee ☕
      </motion.div>

    </footer>
  )
}