import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CoffeeModel from "./CoffeeModel";
import { Link } from "react-router-dom";

export default function Hero(){

  const videos = [
    "/coffee.mp4",
    "/coffee1.mp4",
    "/coffee2.mp4",
    "/coffee3.mp4",
    "/coffee4.mp4",
  ];

  const [index,setIndex] = useState(0);

  // video end → next video
  const nextVideo = ()=>{
    setIndex((prev)=> (prev+1)%videos.length)
  }

  return(
    <section className="relative h-screen w-full overflow-hidden text-white">

      <video
        key={videos[index]}
        autoPlay
        muted
        onEnded={nextVideo}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videos[index]} type="video/mp4"/>
      </video>

      <div className="absolute inset-0 bg-black/60"/>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">

        <motion.h1
          initial={{opacity:0,y:100}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="text-6xl md:text-8xl font-extrabold"
        >
          Velvet Brew Café
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1}}
          className="mt-6 text-xl"
        >
          Luxury Coffee Experience ☕
        </motion.p>

        <Link to="/menu">
          <motion.button
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{delay:1.5}}
            className="mt-10 px-10 py-4 bg-yellow-400 text-black rounded-full font-bold hover:scale-110 transition"
          >
            Explore Menu
          </motion.button>
        </Link>

        {/* 3D Coffee */}
        <div className="absolute bottom-10 right-10 w-60 h-60 hidden md:block">
          <CoffeeModel/>
        </div>

      </div>
    </section>
  )
}