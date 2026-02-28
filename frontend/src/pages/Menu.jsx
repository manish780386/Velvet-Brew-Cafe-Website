import { useState, useEffect } from "react";
import { menu } from "../data/menuData";
import MenuCard from "../components/MenuCard";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Footer from "../components/Footer";
import axios from "axios";

export default function Menu(){

  const [cat,setCat] = useState("All");
  const [cart,setCart] = useState([]);
  const [open,setOpen] = useState(false);
  const [order,setOrder] = useState({name:"",table:"",msg:""});
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("velvetCart")) || [];
    setCart(saved);
  },[]);

  useEffect(()=>{
    localStorage.setItem("velvetCart",JSON.stringify(cart));
  },[cart]);

  const filtered = cat==="All" ? menu : menu.filter(i=>i.cat===cat);

  function add(item){
    setCart(prev=>{
      const exist = prev.find(i=>i.id===item.id);
      if(exist){
        return prev.map(i=> i.id===item.id ? {...i, qty:(i.qty||1)+1} : i);
      }
      return [...prev,{...item, qty:1}];
    });
  }

  const total = cart.reduce((a,b)=> a + b.price*(b.qty||1),0);

  async function orderNow(){

    if(!order.name || !order.table){
      alert("Please enter Name & Table Number");
      return;
    }

    if(cart.length===0){
      alert("Cart Empty ❌");
      return;
    }

    setLoading(true);

    try{
      await axios.post("http://127.0.0.1:8000/api/menuorder/add/",{
        name: order.name,
        table_number: order.table,
        message: order.msg,
        items: cart,
        total: total
      });

      alert("Order Placed Successfully ✅");

      setCart([]);
      localStorage.removeItem("velvetCart");
      setOpen(false);
      setOrder({name:"",table:"",msg:""});

    }catch(err){
      alert("Order Failed ❌");
    }

    setLoading(false);
  }

  return(
    <div className="bg-black text-white min-h-screen pt-28 px-6">

      <motion.div
        whileTap={{scale:0.9}}
        onClick={()=>setOpen(true)}
        className="fixed top-30 right-6 bg-yellow-400 text-black px-5 py-3 rounded-full font-bold shadow-xl z-50 flex items-center gap-2 cursor-pointer "
      >
        <ShoppingCart size={20}/> {cart.length}
      </motion.div>

      <motion.h1
        initial={{opacity:0,y:-40}}
        animate={{opacity:1,y:0}}
        className="text-6xl text-center mb-12 font-extrabold"
      >
        Velvet Brew Menu ☕
      </motion.h1>

      <div className="flex gap-4 justify-center mb-12 flex-wrap">
        {["All","Coffee","Cold","Dessert","Snacks"].map(c=>(
          <button key={c}
            onClick={()=>setCat(c)}
            className={`px-6 py-2 rounded-full font-bold transition
            ${cat===c?"bg-yellow-400 text-black":"bg-white/10 hover:bg-white/20"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filtered.map(item=>(
          <MenuCard key={item.id} item={item} add={add}/>
        ))}
      </div>

      <AnimatePresence>
      {open && (
        <motion.div
          initial={{x:400}}
          animate={{x:0}}
          exit={{x:400}}
          transition={{duration:0.3}}
          className="fixed top-0 right-0 w-96 h-full bg-white text-black p-6 shadow-2xl z-50 overflow-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

          {cart.length===0 && <p>No items added</p>}

          {cart.map(i=>(
            <div key={i.id} className="flex justify-between mb-3">
              <span>{i.name} x{i.qty}</span>
              <span>₹{i.price*i.qty}</span>
            </div>
          ))}

          <hr className="my-4"/>
          <h3 className="text-xl font-bold mb-4">Total ₹{total}</h3>

          <input
            placeholder="Customer Name"
            className="w-full border p-2 mb-2"
            value={order.name}
            onChange={e=>setOrder({...order,name:e.target.value})}
          />

          <input
            placeholder="Table Number"
            className="w-full border p-2 mb-2"
            value={order.table}
            onChange={e=>setOrder({...order,table:e.target.value})}
          />

          <textarea
            placeholder="Message"
            className="w-full border p-2 mb-4"
            value={order.msg}
            onChange={e=>setOrder({...order,msg:e.target.value})}
          />

          <button
            onClick={orderNow}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl font-bold"
          >
            {loading ? "Processing..." : "Order Now"}
          </button>

          <button
            onClick={()=>setOpen(false)}
            className="w-full mt-3 border py-2 rounded-xl"
          >
            Close
          </button>
        </motion.div>
      )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}