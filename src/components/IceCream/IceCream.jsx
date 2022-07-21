import React from "react";
import classes from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop";

const IceCream = ({ items }) => {
  const flavors = Object.keys(items);
  return (
    <div className={classes.ice_cream}>
      <div className={classes.cone}></div>

      {flavors.map((flover) => (
        <Scoop key={flover} scoop={flover} />
      ))}

      <div className={classes.cherry}></div>
    </div>
  );
};

export default IceCream;
