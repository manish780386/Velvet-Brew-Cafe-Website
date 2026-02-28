import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCoffee, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BookingsTable(){

  const [data,setData] = useState([]);

  async function load(){
    const res = await axios.get("http://127.0.0.1:8000/api/bookings/all/");
    setData(res.data);
  }

  async function del(id){
    await axios.delete(`http://127.0.0.1:8000/api/bookings/delete/${id}/`);
    load();
  }

  useEffect(()=>{ load(); },[]);

  return(
    <>
      {/* Navbar */}
      <motion.nav
        initial={{y:-120}}
        animate={{y:0}}
        className="fixed w-full z-50 bg-black text-white shadow-xl border-b border-yellow-400/40"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <Link to="/admin/dashboard" className="text-3xl font-bold flex gap-2">
            <FaCoffee className="text-yellow-400"/> Velvet Brew Admin
          </Link>
        </div>
      </motion.nav>

      {/* Page */}
      <div className="pt-32 bg-black min-h-screen text-white p-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          Table Bookings ☕
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {data.map(b=>(
            <motion.div
              key={b.id}
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              className="bg-white/10 p-6 rounded-3xl shadow-xl border border-yellow-400/30"
            >
              <h2 className="text-xl font-bold text-yellow-400">{b.name}</h2>
              <p>{b.phone}</p>
              <p>{b.guests}</p>
              <p>{b.date} – {b.time}</p>
              <p className="mt-3">{b.message}</p>

              <button
                onClick={()=>del(b.id)}
                className="mt-4 px-5 py-2 bg-red-500 rounded-full"
              >
                <FaTrash/> Delete
              </button>
            </motion.div>
          ))}

        </div>

      </div>
    </>
  )
}