import { products } from "../assets/assets";

function Sneaker() {

    const Sneakers = products.filter(p => p.category === "sneakers") 

    return (
        <>
          <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i.pinimg.com/736x/a8/b2/91/a8b2913dfd6a02e10089690081864178.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>                <h1 className="title">
                    Velour Kicks
                </h1>
                <p className="discrip">Designed for men who move seamlessly from boardroom to street, combining comfort with modern style.Comfort engineered for the pace of today, blending sharp design with effortless wearability.</p>
            </div>
            <div className="product-grid">
                {Sneakers.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="image-wrapper"><img src={item.images[0]} alt={item.name} /></div>
                        <div className="product-info">
                            <h3>{item.name}</h3>
                            <p className="price">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Sneaker;