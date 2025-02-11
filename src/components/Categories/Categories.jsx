import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";
import CategoryItem from "../CategoryItem/CategoryItem";

export default function Categories() {
  let [categories, setCategories] = useState([]);
  let [selectedCategories, setSelectedCategories] = useState(null);
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);

  async function getCategories() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductByCategory(category){
    setLoading(true);
    setSelectedCategories(category);
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  // function cssClasses(...classes) {
  //   return classes.join(" ");
  // }

  return (
    <div className="row my-3 gy-3">
      {categories.length === 0 ? (
        <Loader />
      ) : (
        categories.map((category, index) => (
          <div key={index} className="col-md-3">
          <div
            className="bg-dark text-white p-3 rounded text-center cursor-pointer"
            style={{ cursor: "pointer" }}
            onClick={() => getProductByCategory(category)}
          >
            <h5>{category}</h5>
          </div>
        </div>
        
      ))
    )}
          <div className="row my-3 gy-3">
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => <ProductItem key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
}

