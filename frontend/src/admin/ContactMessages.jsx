import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCoffee, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactMessages(){

  const [data,setData] = useState([]);

  async function load(){
    const res = await axios.get("http://127.0.0.1:8000/api/contact/all/");
    setData(res.data);
  }

  async function del(id){
    await axios.delete(`http://127.0.0.1:8000/api/contact/delete/${id}/`);
    load();
  }

  useEffect(()=>{
    load();
  },[]);

  return(
    <>
      {/* 🔥 Admin Navbar Same Style */}
      <motion.nav
        initial={{ y:-120 }}
        animate={{ y:0 }}
        className="fixed w-full z-50 
        bg-gradient-to-r from-black via-gray-900 to-black
        text-white shadow-2xl border-b border-yellow-400/40 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <Link to="/admin/dashboard"
            className="flex items-center gap-3 text-3xl font-extrabold tracking-wider hover:text-yellow-400 transition"
          >
            <FaCoffee className="text-yellow-400 text-2xl"/>
            Velvet Brew <span className="text-yellow-400 text-lg">ADMIN</span>
          </Link>

          <Link 
            to="/admin/dashboard"
            className="px-5 py-2 bg-yellow-400 text-black rounded-full font-bold hover:scale-105 transition"
          >
            Back Dashboard
          </Link>

        </div>
      </motion.nav>

      {/* 🔥 Page Content */}
      <div className="pt-36 bg-black min-h-screen text-white px-6">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="text-5xl font-extrabold mb-14 text-center"
        >
          Contact Messages ☕
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {data.map(m=>(
            <motion.div
              key={m.id}
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              className="bg-gradient-to-br from-white/10 to-white/5 
              backdrop-blur-lg p-6 rounded-3xl shadow-2xl 
              border border-yellow-400/30 hover:border-yellow-400 transition"
            >
              <h2 className="text-2xl font-bold text-yellow-400">
                {m.name}
              </h2>

              <p className="text-gray-400">{m.email}</p>

              <p className="mt-4 text-lg leading-relaxed">
                {m.message}
              </p>

              <button
                onClick={()=>del(m.id)}
                className="mt-6 flex items-center gap-2 
                px-5 py-2 bg-red-500 hover:bg-red-600 
                rounded-full font-semibold shadow-lg 
                transition transform hover:scale-105"
              >
                <FaTrash/> Delete
              </button>

            </motion.div>
          ))}

        </div>

        {data.length === 0 && (
          <p className="text-center text-gray-500 mt-20 text-xl">
            No Messages Yet 😔
          </p>
        )}

      </div>
    </>
  )
}