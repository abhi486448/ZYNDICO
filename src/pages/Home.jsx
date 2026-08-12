import { Link } from "react-router-dom";
import { products, videos } from "../assets/assets";
import myVideo from "../assets/videos/intro.mp4";
import shirt7 from "../assets/images/shirt/2.jpg";
import shirt8 from "../assets/images/shirt/7.jpg";
import shoes4 from "../assets/images/sneaker/3.jpg";
import shoes5 from "../assets/images/sneaker/2.jpg";
import shoes6 from "../assets/images/shoes/1.jpg";
import shoes7 from "../assets/images/shoes/4.jpg";
import suit1 from "../assets/images/suit/4.png";
import CategoryMarquee from "../components/marq";

function Home() {

    const intriVideo = videos.intro_v

    return (
        <div className="home-container">
            <div className="video-wrapper">
                <video autoPlay muted loop className="intro">
                    <source src={intriVideo} type="video/mp4" />
                </video>
                <h1 className="video-title">ZYNDICO</h1>
            </div>

            <CategoryMarquee />

            <h1 className="heading">SHIRTS ESSENTIALS</h1>
            <div className="shirts src1">
                <div className="latest">
                    <img src={shirt7} alt="Shirt 1" />
                    <p className="product-name">COTTON SHIRT</p>
                </div>
                <div className="latest">
                    <img src={shirt8} alt="Shirt 2" />
                    <p className="product-name">STRIPS SHIRT</p>
                </div>
            </div>

            <div className="suits">
                <h2 className="subheading">THE BHARAT BESPOKE</h2>
                <img src={suit1} className="latest1 suit-desktop" alt="Suit Desktop"/>
                <button className="suitsButton linking">
                    <Link to="/highend">VISIT NOW</Link>
                </button>
            </div>

            <h1 className="heading">FOOTWEAR ESSENTIALS</h1>
            <div className="shoes src1">
                <div className="latest">
                   <Link to="/sneakers"><img src={shoes4} alt="Shoe 1" /></Link>
                    <p className="product-name">B&W SNEAKER</p>
                </div>
                <div className="latest">
                    <Link to="/sneakers"><img src={shoes5} alt="Shoe 2" /></Link>
                    <p className="product-name">BLUE SNEAKER</p>
                </div>
                <div className="latest">
                    <Link to="/shoes"><img src={shoes6} alt="Shoe 2" /></Link>
                    <p className="product-name">OXFORD LOFER</p>
                </div>
                <div className="latest">
                    <Link to="/shoes"><img src={shoes7} alt="Shoe 2" /></Link>
                    <p className="product-name">BROWN LOFER</p>
                </div>
            </div>

            <CategoryMarquee />
        </div>
    );
}

export default Home;