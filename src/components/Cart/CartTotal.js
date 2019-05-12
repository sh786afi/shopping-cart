import React from "react";
import { Link } from "react-router-dom";

const CartTotal = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <Link to="/">
            <button onClick={() => clearCart()}>Clear Cart</button>
          </Link>
          <h5>
            SubTotal :<strong>Rs {cartSubTotal}</strong>
          </h5>
          <h5>
            Tax :<strong>Rs {cartTax}</strong>
          </h5>
          <h5>
            Total :<strong>Rs {cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
