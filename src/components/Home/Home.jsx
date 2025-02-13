import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";

export default function Home() {
  let [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="row my-3 gy-3">
      {products.length === 0 ? (
        <Loader />
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
