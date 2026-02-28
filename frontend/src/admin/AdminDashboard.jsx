import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCoffee, FaUserShield } from "react-icons/fa";

export default function AdminDashboard(){

  const nav = useNavigate();

  function logout(){
    localStorage.removeItem("adminLogin");
    nav("/admin");
  }

  return(
    <>
      {/* 🔥 Admin Navbar */}
      <motion.nav
        initial={{ y:-120 }}
        animate={{ y:0 }}
        className="fixed w-full z-50 
        bg-gradient-to-r from-black via-gray-900 to-black
        text-white shadow-2xl border-b border-yellow-400/40 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <Link 
            to="/admin/dashboard" 
            className="flex items-center gap-3 text-3xl font-extrabold tracking-wider hover:text-yellow-400 transition"
          >
            <motion.div
              animate={{ rotate:360 }}
              transition={{ repeat:Infinity, duration:6, ease:"linear" }}
              className="bg-yellow-400/10 p-2 rounded-full shadow-lg"
            >
              <FaCoffee className="text-yellow-400 text-2xl"/>
            </motion.div>

            Velvet Brew <span className="text-yellow-400 text-lg">ADMIN</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex gap-6 text-sm font-semibold items-center">

            <Link 
              to="/admin/dashboard" 
              className="px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition flex items-center gap-2"
            >
              <FaUserShield/> Dashboard
            </Link>

            <Link 
              to="/admin/menu" 
              className="px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition flex items-center gap-2"
            >
              <FaUserShield/> MenuOrder
            </Link>

            <Link 
              to="/admin/bookings" 
              className="px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition flex items-center gap-2"
            >
              <FaUserShield/> Bookings Table
            </Link>

            <Link 
              to="/admin/contact" 
              className="px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition flex items-center gap-2"
            >
              <FaUserShield/> Contact Messages
            </Link>

            <Link 
              to="/" 
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              View Website
            </Link>

          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 
            rounded-full font-bold shadow-xl transition transform hover:scale-105"
          >
            Logout
          </button>

        </div>
      </motion.nav>

      {/* Page Content */}
      <div className="pt-36 text-center text-white bg-black min-h-screen px-6">

        <motion.h1
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="text-5xl font-extrabold mb-6"
        >
          Admin Dashboard ☕
        </motion.h1>

        <p className="text-gray-400 text-lg">
          Manage Menu • Orders • Bookings • Contact Messages
        </p>

      </div>
    </>
  )
}