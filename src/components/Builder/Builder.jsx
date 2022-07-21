import React from "react";
import classes from './Builder.module.css';
import Items from "./Items/Items";
import Modal from "./Modal/Modal";
import TotalPrice from "./TotalPrice/TotalPrice";

const Builder = ({items}) => {
  return (
    <div>
      <div class={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <Items items={items}/>
        <TotalPrice/>
        <button class="add_btn" type="button">
          Add to Cart
        </button>
      </div>
      <Modal/>
    </div>
  );
};

export default Builder;
