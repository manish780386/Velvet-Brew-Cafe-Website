import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCoffee, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      {/* 🔥 Top Offer Line */}
      <div className="bg-yellow-400 text-black text-center py-1 text-sm font-semibold">
        🎉 Free Cookie on Orders Above ₹299 | Open 8AM – 11PM ☕
      </div>

      {/* 🔥 Navbar */}
      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-black/50 backdrop-blur-xl text-white shadow-xl"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-3xl font-bold tracking-widest">
            
            {/* Rotating Coffee Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              <FaCoffee className="text-yellow-400" />
            </motion.div>

            Velvet Brew
          </Link>

          {/* Menu Buttons */}
          <div className="hidden md:flex gap-8 text-lg items-center">

            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/menu" className="hover:text-yellow-400 transition">Menu</Link>
            <Link to="/book" className="hover:text-yellow-400 transition">Book a Table</Link>
            <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>

            {/* Location */}
            <a
              href="https://maps.google.com"
              target="_blank"
              className="flex items-center gap-1 text-yellow-400 hover:scale-110 transition"
            >
              <FaMapMarkerAlt /> Location
            </a>

          </div>

          {/* Order Button */}
          <Link to="/menu"><button className="px-6 py-2 bg-yellow-400 text-black rounded-full font-bold hover:scale-110 transition">
            Order Now
          </button></Link>

        </div>
      </motion.nav>
    </>
  );
}