import myVideo from "../assets/shirt.mp4";

const importedImages = import.meta.glob("../shirt/*.jpg", { eager: true });

const productDetails = {
    "1.jpg": { name: "Vintage Oversized Tee", price: "Rs 1,200" },
    "2.jpg": { name: "Classic White Linen", price: "Rs 2,500" },
    "3.jpg": { name: "Midnight Black Formal", price: "Rs 3,200" },
    "4.jpg": { name: "Streetwear Graphic", price: "Rs 1,800" },
    "5.jpg": { name: "Pastel Oxford", price: "Rs 2,100" },
    "6.jpg": { name: "Denim Rugged", price: "Rs 4,500" },
    "7.jpg": { name: "Cuban Collar", price: "Rs 1,900" },
    "8.jpg": { name: "Premium Silk", price: "Rs 5,000" },
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop(); 
    const details = productDetails[fileName] || { name: "New Arrival", price: "Contact Us" };

    return {
        id: index,
        src: module.default,
        name: details.name,
        price: details.price
    };
});

function Shirt() {
    return (
        <>
            <div className="shirt-container">
                <video autoPlay muted loop playsInline className="introall">
                    <source src={myVideo} type="video/mp4" />
                </video>
                <h1 className="video-title">ZYNDICO <br/>
                <span style={{fontSize: '1.2rem',fontFamily:'quicksand', letterSpacing: '1rem',textAlign:'center',display:"block"}}>Shirt Collection</span></h1>
            </div>

            <div className="product-grid">
                {imageCollection.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="image-wrapper">
                            <img src={item.src} alt={item.name} />
                        </div>
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
export default Shirt;