import React, { Component } from "react";
import Builder from "../components/Builder/Builder";
import IceCream from "../components/IceCream/IceCream";

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 58,
      lemon: 35,
      orange: 40,
      strawberry: 68,
    },
    scoops: [],
    totalPrice: 0,
  };

  addScoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];
    workingScoops.push(scoop);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice + items[scoop],
      };
    });
  };

  removeScoops = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];
    const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

    workingScoops.slice(scoopIndex, 1);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice - items[scoop],
      };
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container grid">
        <IceCream items={items} />
        <Builder items={items} />
      </div>
    );
  }
}
