import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <div key={product.id} className="col-md-3">
      <Link to={`/product-details/${product.id}`} className="bg-dark text-white d-block text-decoration-none p-3 rounded">
        <img
          src={product.image}
          className="w-100"
          style={{ height: "300px" }}
        />
        <h2>
          {product.title.split(" ").splice(0, 3).join(" ")}
        </h2>
        <span>{product.category}</span>
        <div className="d-flex justify-content-between">
          <p>{product.price}</p>
          <p>
            {product.rating.rate}
            <i className="fa fa-star text-warning"></i>
          </p>
        </div>
      </Link>
    </div>
  );
}
