import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = async () => {
    try {
      addToCart(product);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="col-md-3">
      <div className="bg-dark text-white d-block text-decoration-none p-3 rounded">
        <Link to={`/product-details/${product.id}`} className="text-white text-decoration-none">
          <img
            src={product.image}
            alt={product.title}
            className="w-100"
            style={{ height: "300px", objectFit: "contain" }}
          />
          <h2 className="fs-5">
            {product.title.split(" ").splice(0, 3).join(" ")}
          </h2>
          <span className="badge bg-secondary">{product.category}</span>
          <div className="d-flex justify-content-between mt-2">
            <p className="fw-bold">${product.price}</p>
            <p>
              {product.rating.rate} <i className="fa fa-star text-warning"></i>
            </p>
          </div>
        </Link>
        <button className="btn btn-info w-100 mt-2" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

