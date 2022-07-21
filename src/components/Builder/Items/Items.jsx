import React from "react";
import Item from "./Item/Item";
import classes from "./Items.module.css";

const Items = ({ items }) => {
  const flovers = Object.keys(items);

  return (
    <div className={classes.items}>
      <ul>
        {flovers.map((flover) => (
          <Item key={flover} name={flover} />
        ))}
      </ul>
    </div>
  );
};

export default Items;
