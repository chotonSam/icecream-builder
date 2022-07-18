import React from "react";
import classes from "../Footer/Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.container} flex`}>
        <div>Copyright ©2020.</div>
        <div>
          Build with 💝 by{" "}
          <a href="https://reactjs.org/docs/create-a-new-react-app.html">
            Create React App
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
