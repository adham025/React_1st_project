import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      updateQuantity(productId, quantity); 
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId); 
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container my-5">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item d-flex align-items-center mb-3 p-3 border rounded">
              <img src={item.image} alt={item.title} className="cart-item-image" style={{ width: "100px", height: "auto", marginRight: "15px" }} />
              <div className="flex-grow-1">
                <h5>{item.title}</h5>
                <p>Price: ${item.price * item.quantity}</p>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="d-flex justify-content-between mt-4">
          <h3>Total Price: ${getTotalPrice()}</h3>
          <button className="btn btn-primary">Checkout</button>
        </div>
      )}
    </div>
  );
}
