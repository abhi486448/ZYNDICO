import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(1);

    const productInfo = products.filter(p => p.id === id)[0];

    if (!productInfo) {
        return (
            <div style={{ textAlign: "center", padding: "100px 20px" }}>
                <h2>Product Archive Entry Not Found</h2>
                <button onClick={() => navigate("/")} style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
                    Return to Homepage
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        alert(`🛒 Added to Cart:\n- Item: ${productInfo.name}\n- Size: ${selectedSize}\n- Qty: ${quantity}\n- Total: Rs ${(productInfo.price * quantity).toLocaleString()}`);
    };

    const handleBuyNow = () => {
        alert(`⚡ Proceeding directly to Secure Checkout for ${quantity}x ${productInfo.name} (${selectedSize}).`);
    };

    return (
        <div className="product-details-container" style={{
            maxWidth: "1200px",
            margin: "40px auto",
            padding: "0 20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            minHeight: "70vh"
        }}>
            
            <div className="details-image-panel" style={{ flex: "1 1 450px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <div style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden", width: "100%", backgroundColor: "#fcfcfc" }}>
                    <img 
                        src={productInfo.images[0]} 
                        alt={productInfo.name} 
                        style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", maxHeight: "600px" }} 
                    />
                </div>
            </div>

            <div className="details-info-panel" style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", cursor: "pointer", color: "#f3f3f3", padding: 0, textAlign: "left", marginBottom: "15px", fontWeight: "500" }}>
                    ← Back to Previous Page
                </button>

                <p style={{ textTransform: "uppercase", fontSize: "13px", color: "goldenrod", margin: "0 0 5px 0", letterSpacing: "1.5px" }}>
                    Collection / {productInfo.category}
                </p>
                <h1 style={{ fontSize: "36px", margin: "0 0 15px 0", color: "#ffffff", fontWeight: "700" }}>
                    {productInfo.name}
                </h1>
                <p style={{ fontSize: "26px", fontWeight: "600", margin: "0 0 25px 0", color: "#f0f0f0" }}>
                    Rs {productInfo.price.toLocaleString()}
                </p>
                
                <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "0 0 25px 0" }} />

                <p style={{ color: "#d3d3d3", lineHeight: "1.7", fontSize: "16px", margin: "0 0 30px 0" }}>
                    {productInfo.desc}
                </p>

                <div style={{ marginBottom: "25px" }}>
                    <h3 style={{ fontSize: "15px", textTransform: "uppercase", margin: "0 0 12px 0", letterSpacing: "0.5px" }}>Select Size:</h3>
                    <div style={{ display: "flex", gap: "12px" }}>
                        {["S", "M", "L", "XL"].map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    border: selectedSize === size ? "2px solid #040404" : "1px solid #ccc",
                                    backgroundColor: selectedSize === size ? "#040404" : "#ffffff",
                                    color: selectedSize === size ? "#ffffff" : "#040404",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    borderRadius: "4px"
                                }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom: "35px" }}>
                    <h3 style={{ fontSize: "15px", textTransform: "uppercase", margin: "0 0 12px 0", letterSpacing: "0.5px" }}>Quantity:</h3>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #ccc", width: "fit-content", borderRadius: "4px" }}>
                        <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} style={{ padding: "10px 15px", border: "none", background: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>-</button>
                        <span style={{ padding: "0 20px", minWidth: "20px", textAlign: "center", fontWeight: "500" }}>{quantity}</span>
                        <button onClick={() => setQuantity(prev => prev + 1)} style={{ padding: "10px 15px", border: "none", background: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>+</button>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                    <button 
                        onClick={handleAddToCart}
                        style={{
                            flex: "1 1 200px",
                            padding: "16px 0",
                            backgroundColor: "goldenrod",
                            color: "#040404",
                            border: "2px solid #040404",
                            fontWeight: "bold",
                            fontSize: "14px",
                            letterSpacing: "1px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            transition: "background-color 0.2s"
                        }}
                    >
                        ADD TO CART
                    </button>
                    <button 
                        onClick={handleBuyNow}
                        style={{
                            flex: "1 1 200px",
                            padding: "16px 0",
                            backgroundColor: "#040404",
                            color: "#ffffff",
                            border: "none",
                            fontWeight: "bold",
                            fontSize: "14px",
                            letterSpacing: "1px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            transition: "opacity 0.2s"
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                        onMouseLeave={(e) => e.target.style.opacity = "1"}
                    >
                        BUY IT NOW
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProductDetails;