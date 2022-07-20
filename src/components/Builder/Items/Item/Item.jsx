import React from "react";
import classes from "./Item.module.css";

const Item = () => {
  return (
    <li className="flex">
      <div className={classes.flavor}>
        <span>Vanilla</span>
        <span>2</span>
      </div>

      <div>
        <button type="button" className={classes.plus}>
          +
        </button>
        <button type="button" className={classes.minus}>
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
