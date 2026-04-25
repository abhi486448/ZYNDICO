import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;