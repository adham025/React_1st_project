import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]); 
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 8; 

  async function getProducts() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(data);
      setProducts(data.slice(0, limit));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  function updateProducts(newPage) {
    const start = newPage * limit;
    const end = start + limit;
    setProducts(allProducts.slice(start, end));
    setPage(newPage);
  }

  function next() {
    if ((page + 1) * limit < allProducts.length) {
      updateProducts(page + 1);
    }
  }

  function prev() {
    if (page > 0) {
      updateProducts(page - 1);
    }
  }

  return (
    <div className="row my-3 gy-3">
      {products.length === 0 ? (
        <Loader />
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
      <div className="d-flex justify-content-center">
      <button onClick={prev} className="btn btn-info me-3" disabled={page === 0}>
          Previous
        </button>
        <button onClick={next} className="btn btn-info" disabled={(page + 1) * limit >= allProducts.length}>
          Next
        </button>
      </div>
    </div>
  );
}
