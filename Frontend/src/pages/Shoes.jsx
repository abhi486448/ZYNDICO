import { products} from "../assets/assets";


function Shoes() {

    const Shoes = products.filter(p => p.category === "shoes") ;

    return (
        <>
          <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i1-c.pinimg.com/1200x/f0/17/00/f01700d2f3839a396f10771cd6a7d830.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>                <h1 className="title" style={{ 
                    color: "black"
                }}>
                    LuxeMotion 
                </h1>
                <p className="discrip"  id="product-description">Crafted for men with a taste for understated luxury, blending minimal design with bold accents.</p>
            </div>

            <div className="product-grid">
                {Shoes.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="image-wrapper">
                            <img src={item.images[0]} alt={item.name} />
                        </div>
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

export default Shoes;