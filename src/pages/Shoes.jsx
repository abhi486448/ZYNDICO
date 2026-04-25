import myVideo from "../assets/shoes.mp4";

const importedImages = import.meta.glob("../shoes/*.jpg", { eager: true });

const shoeDetails = {
    "1.jpg": { name: "Arctic White Trainers", price: "Rs 4,500" },
    "2.jpg": { name: "Midnight Stealth Runners", price: "Rs 5,200" },
    "3.jpg": { name: "Desert Suede Boots", price: "Rs 7,800" },
    "4.jpg": { name: "Classic Street Lows", price: "Rs 3,900" },
    "5.jpg": { name: "Infinity Sports Knit", price: "Rs 6,100" },
    "6.jpg": { name: "Leather Heritage Brogues", price: "Rs 8,500" },
    "7.jpg": { name: "Neon Flux Basketball", price: "Rs 9,200" },
    "8.jpg": { name: "Urban Explorer Highs", price: "Rs 5,500" },
};

// 3. Merge Logic
const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop(); 
    const details = shoeDetails[fileName] || { name: "Premium Footwear", price: "Rs 4,999" };

    return {
        id: index,
        src: module.default,
        name: details.name,
        price: details.price
    };
});

function Shoes() {
    return (
        <>
            <div className="shirt-container">
                <video autoPlay muted loop playsInline id="myVideo" className="introall">
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1 className="video-title">
                    ZYNDICO 
                    <br /> 
                    <span style={{
                        fontSize: '1.2rem',fontFamily:'quicksand', letterSpacing: '1rem',textAlign:'center',display:"block"
                    }}>
                        Shoes Collection
                    </span>
                </h1>
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

export default Shoes;