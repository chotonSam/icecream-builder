import React, { Component } from "react";
import Builder from "../components/Builder/Builder";
import IceCream from "../components/IceCream/IceCream";

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 58,
      lemom: 35,
      orange: 40,
      strawberry: 68,
    },
    scoops: [],
    totalPrice: 0,
  };

  render() {
    const { items } = this.state;
    return (
      <div class="container grid">
        <IceCream items={items} />
        <Builder />
      </div>
    );
  }
}
