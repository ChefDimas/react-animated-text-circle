import React, { Component } from "react";
import Product from "./product";

export default class ShoppingComponent extends Component {
  state = {
    products: [
      { id: 1, productName: "Iphone X Pro", price: 990, quantity: 0 },
      { id: 2, productName: "Samsung Galaxy S21", price: 990, quantity: 0 },
      { id: 3, productName: "Xbox", price: 990, quantity: 0 },
      { id: 4, productName: "Lenovo IdeaPad", price: 990, quantity: 0 },
      { id: 5, productName: "PlayStation", price: 990, quantity: 0 },
      { id: 6, productName: "Asus Zenbook", price: 990, quantity: 0 },
    ],
  };

  render() {
    return (
      <div>
        <h4>ShoppingCart</h4>
        <div>
          {this.state.products.map((prod) => {
            return <Product key={prod.id} id={prod.id} />;
          })}
        </div>
      </div>
    );
  }
}
