import React, { Component } from "react";
import Builder from "../components/Builder/Builder";
import IceCream from "../components/IceCream/IceCream";

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      chocolate: 48,
      lemon: 56,
      orange: 50,
      strawberry: 52,
      vanilla: 45,
    },
    scoops: [],
    totalPrice: 0,
  };

  clearState = () => {
    this.setState(() => {
      return {
        scoops: [],
        totalPrice: 0,
      };
    });
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

    workingScoops.splice(scoopIndex, 1);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice - items[scoop],
      };
    });
  };

  render() {
    const { items, totalPrice, scoops } = this.state;
    return (
      <div className="container grid">
        <IceCream scoops={scoops} />
        <Builder
          items={items}
          price={totalPrice}
          add={this.addScoop}
          remove={this.removeScoops}
          scoops={scoops}
          clearState={this.clearState}
        />
      </div>
    );
  }
}
