import myVideo from "../assets/suit.mp4";
import compvideo from "../assets/fsuit.mp4";

const importedImages = import.meta.glob("../suit/*.jpg", { eager: true });

const suitDetails = {
    "1.jpg": { name: "Italian Charcoal Suit", price: "Rs 15,000" },
    "2.jpg": { name: "Midnight Velvet Tuxedo", price: "Rs 18,500" },
    "3.jpg": { name: "Royal Blue 3-Piece", price: "Rs 22,000" },
    "4.jpg": { name: "Classic Black Peak Lapel", price: "Rs 14,000" },
    // ... add up to 8.jpg
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop();
    const details = suitDetails[fileName] || { name: "Bespoke Suit", price: "Rs 19,999" };
    return { id: index, src: module.default, ...details };
});

function Highend() {
    return (
        <>
            <div className="shirt-container">
                <video autoPlay muted loop className="introall "> 
                    <source src={myVideo} type="video/mp4" />
                </video>
                <h1 className="video-title">
                    ZYNDICO <br /> 
                    <span style={{fontSize: '1.2rem',fontFamily:'quicksand', letterSpacing: '1rem',textAlign:'center',display:"block"}}>High-End Suits</span>
                </h1>
            </div>
            <div className="product-grid">
                {imageCollection.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="image-wrapper"><img src={item.src} alt={item.name} /></div>
                        <div className="product-info">
                            <h3>{item.name}</h3>
                            <p className="price">{item.price}</p>
                            <button className="buy-btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Highend;