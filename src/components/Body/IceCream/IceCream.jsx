import React from "react";
import classes from "./IceCream.module.css";

const IceCream = () => {
  return (
    <div className={classes.ice_cream}>
      <div className={classes.cone}></div>
      <div className={`${classes.scoop} ${classes.lemon}`}></div>
      <div className={`${classes.scoop} ${classes.vanilla}`}></div>
      <div className={`${classes.scoop} ${classes.orange}`}></div>
      <div className={`${classes.scoop} ${classes.chocolate}`}></div>
      <div className={`${classes.scoop} ${classes.strawberry}`}></div>
      <div className={`${classes.scoop} ${classes.lemon}`}></div>
      <div className={`${classes.scoop} ${classes.orange}`}></div>
      <div className={classes.cherry}></div>
    </div>
  );
};

export default IceCream;
