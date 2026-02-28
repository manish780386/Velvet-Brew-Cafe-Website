import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser, FaPhone, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";
import Coffee3D from "../components/Coffee3D";
import Footer from "../components/Footer";
import axios from "axios";

export default function BookTable(){

  const [form,setForm]=useState({
    name:"",
    phone:"",
    guests:"",
    date:"",
    time:"",
    msg:""
  });

  const [done,setDone]=useState(false);
  const [loading,setLoading]=useState(false);

  const valid =
    form.name && form.phone && form.guests && form.date && form.time;

  function handle(e){
    setForm({...form,[e.target.name]:e.target.value});
  }

  async function submit(e){
    e.preventDefault();
    if(!valid) return;

    setLoading(true);

    try{
      await axios.post("http://127.0.0.1:8000/api/bookings/add/",{
        name:form.name,
        phone:form.phone,
        guests:form.guests,
        date:form.date,
        time:form.time,
        message:form.msg
      });

      setDone(true);
      setForm({
        name:"",
        phone:"",
        guests:"",
        date:"",
        time:"",
        msg:""
      });

      setTimeout(()=>setDone(false),3000);

    }catch(err){
      alert("Booking Failed ❌");
    }

    setLoading(false);
  }

  return(
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6">

      {/* Heading */}
      <motion.h1
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        className="text-5xl font-bold text-center mb-6"
      >
        Book Your Velvet Brew Table ☕
      </motion.h1>

      {/* Rotating Coffee */}
      <div className="max-w-xs mx-auto mb-10">
        <Coffee3D/>
      </div>

      {/* Form */}
      <motion.form
        onSubmit={submit}
        initial={{opacity:0,scale:0.8}}
        animate={{opacity:1,scale:1}}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl space-y-6 border border-yellow-400/30"
      >

        <Input icon={<FaUser/>} name="name" value={form.name} onChange={handle} placeholder="Your Name"/>

        <Input icon={<FaPhone/>} name="phone" value={form.phone} onChange={handle} placeholder="Phone Number"/>

        <div className="flex items-center gap-4">
          <FaUsers className="text-yellow-400"/>
          <select 
            name="guests" 
            value={form.guests}
            onChange={handle}
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700"
          >
            <option value="">Select Guests</option>
            <option>1 Person</option>
            <option>2 People</option>
            <option>4 People</option>
            <option>6+ People</option>
          </select>
        </div>

        <Input icon={<FaCalendarAlt/>} type="date" name="date" value={form.date} onChange={handle}/>

        <Input icon={<FaClock/>} type="time" name="time" value={form.time} onChange={handle}/>

        <textarea
          name="msg"
          value={form.msg}
          onChange={handle}
          placeholder="Special Request (Birthday, Window seat…)"
          className="w-full p-3 rounded-lg bg-black/50 border border-gray-700"
        />

        <button
          disabled={!valid || loading}
          className={`w-full py-3 rounded-full font-bold transition
          ${valid
            ? "bg-yellow-400 text-black hover:scale-105"
            : "bg-gray-600 cursor-not-allowed"}`}
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>

      </motion.form>

      {done && (
        <motion.div
          initial={{opacity:0,y:-50}}
          animate={{opacity:1,y:0}}
          className="fixed top-10 right-10 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl"
        >
          Table Booked Successfully 🎉
        </motion.div>
      )}

      <Footer />

    </div>
  )
}

function Input({icon,type="text",...props}){
  return(
    <div className="flex items-center gap-4">
      <span className="text-yellow-400">{icon}</span>
      <input
        type={type}
        {...props}
        className="w-full p-3 rounded-lg bg-black/50 border border-gray-700"
      />
    </div>
  )
}