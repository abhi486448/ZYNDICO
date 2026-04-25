import { Link } from "react-router-dom";
import myVideo from "../assets/intro.mp4";
import shirt7 from "../shirt/7.jpg";
import t_shirt8 from "../t-shirt/7.jpg";
import suit2 from "../suit/3.jpg";
import shoes4 from "../shoes/4.jpg";
import shoes5 from "../sneaker/8.jpg";


function Home() {
    return (
    <div className="home-container">
    <div className="video-wrapper">
        <video autoPlay muted loop className="intro">
            <source src={myVideo} type="video/mp4" />
        </video>
        <h1 className="video-title">ZYNDICO</h1>
    </div>

    <div className="shirts src1">
        <div className="latest">
            <img src={shirt7} alt="Shirt 1" />
            <p className="product-name">Cotton Tee</p>
        </div>
        <div className="latest">
            <img src={t_shirt8} alt="Shirt 2" />
            <p className="product-name">Anime T-shirt</p>
        </div>
    </div>
    <button className="linking"><Link to="/shirts">VISIT NOW</Link></button>

    <div className="suits">
        <h2 className="subheading">THE BHARAT BESPOKE</h2>
        <img src={suit2} className="latest1" alt="Suit"/>
        <button className="suitsButton"><Link to="/highend">VISIT NOW</Link></button>
    </div>

    <div className="shoes src1">
        <div className="latest">
            <img src={shoes4} alt="Shoe 1" />
            <p className="product-name">Tan Loafer</p>
        </div>
        <div className="latest">
            <img src={shoes5} alt="Shoe 2" />
            <p className="product-name">Sneaker</p>
        </div>
    </div>
    <button className="linking"><Link to="/shoes">VISIT NOW</Link></button>
</div>
    );
}
export default Home;