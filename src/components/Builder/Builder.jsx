import React, { useState } from "react";
import classes from "./Builder.module.css";
import Items from "./Items/Items";
import Modal from "./Modal/Modal";
import TotalPrice from "./TotalPrice/TotalPrice";

const Builder = ({ items, add, remove, price, scoops,clearState }) => {
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <Items items={items} add={add} remove={remove} scoops={scoops} />
        <TotalPrice price={price} />
        <button
          className="add_btn"
          type="button"
          onClick={() => {
            setPopup(true);
          }}
        >
          Add to Cart
        </button>
      </div>
      {popup ? <Modal setPopup={setPopup} clearState={clearState} />  : ""}
    </div>
  );
};

export default Builder;
