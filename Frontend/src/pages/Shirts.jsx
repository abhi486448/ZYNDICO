import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

function Shirt() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");
    
    // ── get all shirts once ──
    const shirts = products.filter(p => p.category === "shirts");

    // ── derive filtered list directly, no useState needed ──
    const filteredProducts = () => {
        if (selectedCategory === "Casual")  return shirts.filter(p => p.tags.includes("casual"));
        if (selectedCategory === "Formal")  return shirts.filter(p => p.tags.includes("formal"));
        if (selectedCategory === "Highend") return shirts.filter(p => p.tags.includes("office"));
        return shirts; // "All"
    };

    return (
        <>
            <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i.pinimg.com/736x/c6/87/9b/c6879bea30a9ebae2a96a733c423b2ae.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
            >                
                <h1 className="title" style={{ color: "#040404" }}>Metro Ease</h1>
                <p className="discrip">
                    Engineered for the modern man. Experience breathable, all-day comfort that moves with you. 
                    From boardroom to boulevard, experience shirts that breathe, flex, and elevate your presence.
                </p>
            </div>

            <div className="filter-container" style={{ textAlign: 'center', margin: '20px 0' }}>
                {["All", "Casual", "Formal", "Highend"].map((category) => (
                    <button 
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            margin: '0 10px',
                            padding: '10px 20px',
                            backgroundColor: selectedCategory === category ? '#040404' : '#fff',
                            color: selectedCategory === category ? '#fff' : '#040404',
                            border: '1px solid #040404',
                            cursor: 'pointer',
                            borderRadius: '4px'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {filteredProducts().map((item) => (
                    <div 
                        key={item.id} 
                        className="product-card" 
                        onClick={() => navigate(`/ProductPage/${item.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="image-wrapper">
                            <img src={item.images[0]} alt={item.name} />
                        </div>
                        <div className="product-info">
                            <h3>{item.name}</h3>
                            <p className="price">Rs {item.price.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Shirt;