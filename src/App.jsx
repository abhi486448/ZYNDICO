import {Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Shirt from "./pages/Shirts";
import Tshirt from "./pages/Tshirts";
import Hoodies from "./pages/Hoodies";
import Sneaker from "./pages/Sneaker";
import Shoes from "./pages/Shoes";
import Highend from "./pages/Highend";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ForgetPass from "./Authentication/froget";
import Registeruser from "./Authentication/register";
import Loginuser from "./Authentication/login";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirt />} />
        <Route path="/tshirts" element={<Tshirt />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/sneakers" element={<Sneaker />} /> 
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/highend" element={<Highend />} />
        <Route path="/Login" element={<Loginuser/>}/>
        <Route path="/Register" element={<Registeruser/>}/>
        <Route path="/ForgetPass" element={<ForgetPass/>}/>
        <Route path="/ProductPage/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer />
      <button className="to-top" onClick={() => window.scrollTo({top:0 , behavior:"smooth"})}>↑</button>
    </div>
  );
}

export default App;