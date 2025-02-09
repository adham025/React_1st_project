
import { useState } from 'react'
import './App.css'
import ProductItem from './ProductItem'
import img1 from "./assets/alexandria.jpg";

function App() {

  const initialProducts = [
    { id: 1, title: "Samsung 1", price: 123, image: img1 },
    { id: 2, title: "Samsung 2", price: 456, image: img1 },
    { id: 3, title: "Samsung 3", price: 789, image: img1 },
  ];

const [productList, setProductList] = useState(initialProducts);
const [searchKey, setSearchKey] = useState("");

function changePrice(id) {
  let products = structuredClone(productList);
  let updatedProducts = products.find((product) => product.id === id);
  updatedProducts.price += 10;
  setProductList(products)
}

function deleteProduct(id) {
  let products = structuredClone(productList);
  let updatedProducts = products.filter((product) => product.id !== id);
  setProductList(updatedProducts)
}

function search() {
  if (searchKey.trim() === "") {
    setProductList(initialProducts);
  } else {
    let filteredProducts = initialProducts.filter((product) =>
      product.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    setProductList(filteredProducts);
}
}

  return (
    <>
<div className='container my-5'>
<div className='row'>
  <div className='d-flex mb-4'>
<input type="text" name="product" placeholder="Search for a product" className="form-control" value={searchKey} onChange={(e) => setSearchKey(e.target.value)}/>
<button className="btn btn-info mx-4" onClick={search}>Search</button>
  </div>
  {productList.map(product =><ProductItem key={product.id} product={product} changePrice={changePrice} deleteProduct={deleteProduct}/>)}
</div>
</div>
    </>
  )
}

export default App
