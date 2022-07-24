import React from "react";
import classes from "./TotalPrice.module.css";

const TotalPrice = ({price}) => {
  return (
    <div className={`${classes.total} flex`}>
      <p>Total price</p>
      <p>{price} Tk</p>
    </div>
  );
};

export default TotalPrice;
