import { products } from "../assets/assets";

function Highend() {

    const Highend = products.filter(p => p.category === "suits")

    return (
        <>
          <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i.pinimg.com/736x/8e/86/12/8e8612b241e9fe959b8cd6d8f7dc2ba6.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>                <h1 className="title" style={{ 
                    color: "goldenrod"
                }}>
                    Velour Vision
                </h1>
                <p className="discrip">Designed for evenings that demand luxury, where fabric and fit speak louder than words.</p>
            </div>
            <div className="product-grid">
                {Highend.map((item) => (
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
export default Highend;