import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  async function sendMsg(e){
    e.preventDefault();
    setLoading(true);

    try{
      await axios.post("http://127.0.0.1:8000/api/contact/add/", form);
      alert("Message Sent Successfully ✅");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    }catch(error){
      alert("Something went wrong ❌");
    }

    setLoading(false);
  }

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Contact Velvet Brew ☕
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-400 text-2xl" />
            <span className="text-lg">+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-2xl" />
            <span className="text-lg">velvetbrew@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
            <span className="text-lg">Huzurganj, India</span>
          </div>

          <div className="flex items-center gap-4">
            <FaClock className="text-yellow-400 text-2xl" />
            <span className="text-lg">Open Daily: 8:00 AM – 11:00 PM</span>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={sendMsg}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e=>setForm({...form,name:e.target.value})}
            required
            className="w-full p-3 rounded-lg bg-black/50 focus:outline-none border border-gray-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={e=>setForm({...form,email:e.target.value})}
            required
            className="w-full p-3 rounded-lg bg-black/50 focus:outline-none border border-gray-700"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={e=>setForm({...form,message:e.target.value})}
            required
            className="w-full p-3 rounded-lg bg-black/50 focus:outline-none border border-gray-700"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black py-3 rounded-full font-bold hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto mt-20 rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
      </div>

      <Footer />

    </div>
  );
}