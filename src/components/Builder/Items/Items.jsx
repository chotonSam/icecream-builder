import React from "react";
import Item from "./Item/Item";
import classes from "./Items.module.css";

const Items = () => {
  return (
    <div className={classes.items}>
      <ul>
        <Item />
      </ul>
    </div>
  );
};

export default Items;
