import React from "react";
import "./CartItem.css";
const CartItem = ({ item, value }) => {
  const { id, img, title, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row">
      <div className="col">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          alt="product"
        />
      </div>
      <div className="col">
        <span>Product</span>
        {title}
      </div>
      <div className="col">
        <span>Price</span>
        {price}
      </div>
      <div className="col">
        <div>
          <span>
            <button className="counter-button" onClick={() => decrement(id)}>
              -
            </button>
          </span>
          <span>
            <button className="counter-button">{count}</button>
          </span>
          <span>
            <button className="counter-button" onClick={() => increment(id)}>
              +
            </button>
          </span>
        </div>
      </div>
      <div className="col">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col">
        <strong>item total : Rs {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
