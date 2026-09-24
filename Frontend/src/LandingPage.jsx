import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function LandingPage() {
  return (
    <div className="main-content">
      <Navbar />
      <Home />
      <Footer />
      <button className="to-top" onClick={() => window.scrollTo({top:0 , behavior:"smooth"})}>↑</button>
    </div>
  );
}

export default LandingPage;