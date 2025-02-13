import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";
import CategoryItem from "../CategoryItem/CategoryItem";

export default function Categories() {
  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);

  async function getCategories() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(data);
      getProductByCategory("electronics")
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductByCategory(category){
    setProducts([]);
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <div className="row my-3 gy-3">
      {categories.length === 0 ? (
        <Loader />
      ) : (
        categories.map((category, index) => <CategoryItem key={index} category={category} onSelectCategory={getProductByCategory} />)
      )
    }
          <div className="row my-3 gy-3">
        {products.length === 0 ? (
          <Loader />
        ) : (
          products.map((product) => <ProductItem key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
}

