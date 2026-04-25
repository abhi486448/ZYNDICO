import hoodiesVideo from "../assets/hoodies.mp4";
const importedImages = import.meta.glob("../hoodies/*.jpg", { eager: true });

const hoodieDetails = {
    "1.jpg": { name: "Oversized Heavy Fleece", price: "Rs 3,200" },
    "2.jpg": { name: "Streetwear Acid Wash", price: "Rs 3,500" },
    // ... add more
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop();
    const details = hoodieDetails[fileName] || { name: "Essential Hoodie", price: "Rs 2,999" };
    return { id: index, src: module.default, ...details };
});

function Hoodies() {
    return (
        <>
            <div className="shirt-container">
                <video autoPlay muted loop className="introall"><source src={hoodiesVideo} type="video/mp4" /></video>
                <h1 className="video-title">ZYNDICO <br /> <span style={{fontSize: '1.2rem',fontFamily:'quicksand', letterSpacing: '1rem',textAlign:'center',display:"block"}}>Hoodie Season</span></h1>
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
export default Hoodies;