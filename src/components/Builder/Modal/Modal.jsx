import React from "react";
import classes from "./Modal.module.css";
import OrderForm from "./OrderForm/OrderForm";
const Modal = () => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modalBody}>
        <OrderForm />
      </div>
    </div>
  );
};

export default Modal;
