import React, { Component } from "react";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="product">
        <div className="img-container">
          <img src={img} alr="" />
        </div>
      </div>
    );
  }
}

export default Product;
