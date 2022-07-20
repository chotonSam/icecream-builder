import React from "react";
import classes from "./TotalPrice.module.css";

const TotalPrice = () => {
  return (
    <div className={`${classes.total} flex`}>
      <p>Total price</p>
      <p>3000.00 Tk</p>
    </div>
  );
};

export default TotalPrice;
