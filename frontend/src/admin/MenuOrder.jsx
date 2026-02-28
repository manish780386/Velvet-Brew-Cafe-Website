import { useEffect, useState } from "react";
import axios from "axios";

export default function MenuOrder(){

  const [orders,setOrders] = useState([]);

  async function load(){
    const res = await axios.get("http://127.0.0.1:8000/api/menuorder/all/");
    setOrders(res.data);
  }

  async function del(id){
    await axios.delete(`http://127.0.0.1:8000/api/menuorder/delete/${id}/`);
    load();
  }

  useEffect(()=>{
    load();
  },[]);

  return(
    <div className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl mb-6">Menu Orders</h1>

      {orders.map(o=>(
        <div key={o.id} className="border p-4 mb-4">
          <p>Name: {o.name}</p>
          <p>Table: {o.table_number}</p>
          <p>Total: ₹{o.total}</p>

          <button
            onClick={()=>del(o.id)}
            className="bg-red-500 px-4 py-1 mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}