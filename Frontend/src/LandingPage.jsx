import Footer from "./Features/shared/components/essiential/Footer";
import Navbar from "./Features/shared/components/essiential/Navbar";
import Home from "./Features/Home";


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