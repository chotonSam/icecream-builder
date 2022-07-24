import React from "react";
import classes from "./Builder.module.css";
import Items from "./Items/Items";
import Modal from "./Modal/Modal";
import TotalPrice from "./TotalPrice/TotalPrice";

const Builder = ({ items, add, remove, price, scoops }) => {
  return (
    <div>
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <Items items={items} add={add} remove={remove} scoops={scoops} />
        <TotalPrice price={price} />
        <button className="add_btn" type="button">
          Add to Cart
        </button>
      </div>
      <Modal />
    </div>
  );
};

export default Builder;
