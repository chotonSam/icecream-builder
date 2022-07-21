import React from "react";
import classes from "./Item.module.css";

const Item = ({ name }) => {
  return (
    <li className="flex">
      <div className={classes.flavor}>
        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        <span className={classes.quantity}>2</span>
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
