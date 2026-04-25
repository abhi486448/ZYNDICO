import tshirtVideo from "../assets/tshirt.mp4";
const importedImages = import.meta.glob("../t-shirt/*.jpg", { eager: true });

const details = {
    "1.jpg": { name: "Boxy Fit Basic", price: "Rs 999" },
    "2.jpg": { name: "Graphic Drop Shoulder", price: "Rs 1,299" },
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop();
    const info = details[fileName] || { name: "Premium Tee", price: "Rs 1,100" };
    return { id: index, src: module.default, ...info };
});

function Tshirt() {
    return (
        <>
            <div className="shirt-container">
                <video autoPlay muted loop className="introall"><source src={tshirtVideo} type="video/mp4" /></video>
                <h1 className="video-title">ZYNDICO <br /> <span style={{fontSize: '1.2rem',fontFamily:'quicksand', letterSpacing: '1rem',textAlign:'center',display:"block"}}>Essentials</span></h1>
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
export default Tshirt;