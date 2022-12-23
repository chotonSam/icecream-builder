import React from "react";
import classes from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop";

const IceCream = ({ scoops }) => {
  // const flavors = Object.keys(scoops);
  return (
    <div className={classes.ice_cream}>
      <p className={classes.cone}></p>

      {scoops.map((flover) => (
        <Scoop key={`${flover}${Math.random()}`} scoop={flover} />
      ))}

      <div className={classes.cherry}></div>
    </div>
  );
};

export default IceCream;
