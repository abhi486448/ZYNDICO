import sneakVideo from "../assets/sneakers.mp4";
const importedImages = import.meta.glob("../sneaker/*.jpg", { eager: true });

const sneakDetails = {
    "1.jpg": { name: "Phantom Low-Top", price: "Rs 5,500" },
    "2.jpg": { name: "Retro Court White", price: "Rs 4,800" },
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop();
    const details = sneakDetails[fileName] || { name: "Limited Edition", price: "Rs 6,500" };
    return { id: index, src: module.default, ...details };
});

function Sneaker() {
    return (
        <>
            <div className="shirt-container">
                <video autoPlay muted loop className="introall"><source src={sneakVideo} type="video/mp4" /></video>
                <h1 className="video-title">ZYNDICO <br /> <span style={{fontSize: '1.2rem',fontFamily:'quicksand', letterSpacing: '1rem',textAlign:'center',display:"block"}}>Sneaker Drop</span></h1>
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
export default Sneaker;