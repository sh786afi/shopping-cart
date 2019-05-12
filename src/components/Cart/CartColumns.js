import React from "react";
import "./CartColumns.css";
const CartColumns = () => {
  return (
    <div className="row-col">
      <div className="row">
        <div className="column">
          <p>Products</p>
        </div>
        <div className="column">
          <p>Name Of Products</p>
        </div>
        <div className="column">
          <p>Price</p>
        </div>
        <div className="column">
          <p>Quantity</p>
        </div>
        <div className="column">
          <p>Remove</p>
        </div>
        <div className="column">
          <p>Total</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
