import { products } from '../assets/assets'

function Hoodies() {

    const hoodies = products.filter(p => p.category === "hoodies");

    return (
        <>
           <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i1-c.pinimg.com/1200x/35/74/7e/35747ed4d30ed8fbbd0bd2da87bd6dcd.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>
                <h1 className="title">Zyndico Hoodies</h1>
                <p className="discrip">
                    Crafted from a heavy-weight cotton blend, it offers that coveted boxy, oversized silhouette without feeling bulky.
            </p>
            </div>
            <div className="product-grid">
                {hoodies.map((item) => (
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
export default Hoodies;