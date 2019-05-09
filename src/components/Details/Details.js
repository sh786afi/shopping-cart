import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="details">
              <div className="row">
                <div className="detailsImage">
                  <img src={img} className="imageSingle" />
                </div>
                <div className="text">
                  <h2>Model: {title}</h2>
                  <h4>madeBy: {company}</h4>
                  <h4>
                    <strong>Price: </strong>
                    <span>Rs </span>
                    {price}
                  </h4>
                  <p>
                    <strong>Some Info About Product :</strong>
                  </p>
                  <p>{info}</p>
                  <div>
                    <Link to="/">
                      <button>Back To Product</button>
                    </Link>
                    <button
                      disabled={inCart ? true : false}
                      onClick={() => value.addToCart(id)}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
