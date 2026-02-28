import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BookTable from "./pages/BookTable";
import Menu from "./pages/Menu";

import AdminLogin from "./admin/AdminLogin.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import MenuOrder from "./admin/MenuOrder.jsx";
import BookingsTable from "./admin/BookingsTable.jsx";
import ContactMessages from "./admin/ContactMessages.jsx";


function PrivateRoute({children}){
  return localStorage.getItem("adminLogin")
    ? children
    : <Navigate to="/admin" />;
}


// 👉 Wrapper component
function Layout(){

  const location = useLocation();

  // 👉 Check admin route
  const isAdmin = location.pathname.startsWith("/admin");

  return(
    <>
      {/* Navbar only when NOT admin */}
      {!isAdmin && <Navbar/>}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/book" element={<BookTable/>}/>
        <Route path="/menu" element={<Menu/>}/>

        <Route path="/admin" element={<AdminLogin/>}/>

        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard/>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/menu"
          element={
            <PrivateRoute>
              <MenuOrder/>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <PrivateRoute>
              <BookingsTable/>
            </PrivateRoute>
          }
        />  
        <Route
          path="/admin/contact"
          element={
            <PrivateRoute>
              <ContactMessages/>
            </PrivateRoute>
          }
        />


      </Routes>

    </>
  );
}


export default function App(){
  return(
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
}