import React from "react";
import classes from "./IceCream.module.css";

const IceCream = () => {
  return (
    <div className={classes.ice_cream}>
      <div className={classes.cone}></div>
      <div className={`${classes.scoop} ${classes.lemon}`}></div>
      <div className={classes.cherry}></div>
    </div>
  );
};

export default IceCream;
