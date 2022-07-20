import React from "react";
import classes from './Builder.module.css';
import Items from "./Items/Items";

const Builder = () => {
  return (
    <div>
      <div class={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <Items/>
        {/* total price  */}
        <button class={classes.add_btn} type="button">
          Add to Cart
        </button>
      </div>
      {/* modal  */}
    </div>
  );
};

export default Builder;
