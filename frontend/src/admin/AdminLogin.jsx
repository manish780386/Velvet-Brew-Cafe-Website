import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AdminLogin(){

  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const [error,setError] = useState("");
  const nav = useNavigate();

  const ADMIN_USER = "dange";
  const ADMIN_PASS = "09876";

  function login(e){
    e.preventDefault();

    if(user === ADMIN_USER && pass === ADMIN_PASS){
      localStorage.setItem("adminLogin","true");
      nav("/admin/dashboard");
    }
    else{
      setError("Wrong Username or Password ❌");
      setTimeout(()=>setError(""),2000);
    }
  }

  return(
    <div className="bg-black text-white min-h-screen flex items-center justify-center">

      <motion.form
        onSubmit={login}
        initial={{scale:0.8,opacity:0}}
        animate={{scale:1,opacity:1}}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl w-[350px] space-y-5 shadow-2xl"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Velvet Brew Admin ☕
        </h1>

        <input
          placeholder="Username"
          value={user}
          onChange={e=>setUser(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/50 border border-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={e=>setPass(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/50 border border-gray-700"
        />

        <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-bold hover:scale-105 transition">
          Login
        </button>

        {error && (
          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="text-red-400 text-center"
          >
            {error}
          </motion.p>
        )}

      </motion.form>
    </div>
  )
}