import { countBy } from "lodash";
import React from "react";
import classes from "./Item.module.css";

const Item = ({ name, add, remove, scoops = {} }) => {
  const scoopsByCount = countBy(scoops);

  return (
    <li className="flex">
      <div className={classes.flavor}>
        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        {scoopsByCount[name] >= 0 ? (
          <span className={classes.quantity}>x{scoopsByCount[name]}</span>
        ) : null}
      </div>

      <div>
        <button
          onClick={() => add(name)}
          type="button"
          className={classes.plus}
        >
          +
        </button>
        <button
          onClick={() => remove(name)}
          type="button"
          className={classes.minus}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
