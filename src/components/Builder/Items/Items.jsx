import React from "react";
import Item from "./Item/Item";
import classes from "./Items.module.css";

const Items = ({ items, add, remove, scoops }) => {
  const flovers = Object.keys(items);

  return (
    <div className={classes.items}>
      <ul>
        {flovers.map((flover) => (
          <Item
            key={flover}
            name={flover}
            scoops={scoops}
            add={add}
            remove={remove}
          />
        ))}
      </ul>
    </div>
  );
};

export default Items;
