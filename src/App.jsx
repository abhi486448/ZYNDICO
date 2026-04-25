import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Shirt from "./pages/shirts";
import Tshirt from "./pages/tshirts";
import Hoodies from "./pages/hoodies";
import Sneaker from "./pages/sneaker";
import Shoes from "./pages/shoes";
import Highend from "./pages/highend";
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