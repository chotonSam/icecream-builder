import React from "react";
import classes from "./Modal.module.css";
import OrderForm from "./OrderForm/OrderForm";

const Modal = ({ setPopup,clearState }) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modalBody}>
        <OrderForm setPopup={setPopup} clearState={clearState} />
      </div>
    </div>
  );
};

export default Modal;
