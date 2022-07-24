import React, { Component } from "react";
import Builder from "../components/Builder/Builder";
import IceCream from "../components/IceCream/IceCream";

export default class IceCreamBuilder extends Component {
  state = {
    items: {},
    scoops: [],
    totalPrice: 0,
  };

  componentDidMount() {
    fetch(
      "https://ice-cream-c7d80-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
    )
      .then((response) => response.json())
      .then((responeData) => {
        this.setState({
          items: responeData,
        });
      });
  }

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
        />
      </div>
    );
  }
}
