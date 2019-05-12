import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import { ProductConsumer } from "../../context";
class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, price, title } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div id="myModal" className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => closeModal()}>
                    &times;
                  </span>
                  <p>Item Added To The Cart</p>
                  <img src={img} className="image-fluid" alt="product" />
                  <h5>{title}</h5>
                  <Link to="/">
                    <button onClick={() => closeModal()}>
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button onClick={() => closeModal()}>Go To Cart</button>
                  </Link>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
