import { products } from "../assets/assets";

function Tshirt() {

    const TSirts = products.filter(p => p.category === "tshirts")

    return (
        <>
          <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i1-c.pinimg.com/736x/04/9d/c2/049dc2815f092ce563d3feef41e63aec.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>                <h1 className="title" style={{ 
                    color: "goldenrod"
                }}
                >Nova Line </h1>
                <p className="discrip">Built for men who push limits, combining performance fabrics with casual versatility.</p>

            </div>
            <div className="product-grid">
                {TSirts.map((item) => (
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
export default Tshirt;