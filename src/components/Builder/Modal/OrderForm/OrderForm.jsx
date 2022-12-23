import React from "react";
import classes from "./OrderFrom.module.css";

const OrderForm = ({ setPopup, clearState }) => {


  return (
    <div className={classes.formcontainer}>
      <h3>Complete the form below and hit submit</h3>
      <form className={classes.form_box} action="">
        <ul>
          <li>
            <input
              type="text"
              className={classes.alignLeft}
              placeholder="Name"
            />{" "}
            <input
              type="number"
              className={classes.alignRight}
              placeholder="Phone no"
            />
          </li>
          <li>
            <input className={classes.email} type="email" placeholder="Email" />
          </li>
          <li>
            <textarea
              className={classes.textarea}
              placeholder="Address"
            ></textarea>
          </li>
          <li>
            <input
              onClick={() => {
                setPopup(false);
                clearState()
              }}
              type="submit"
              className={`add_btn ${classes.subBtn}`}
              value="Submit Order"
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default OrderForm;
