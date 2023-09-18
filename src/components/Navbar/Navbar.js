import React from "react";
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaMoneyBillAlt } from "react-icons/fa"; // I use a npm i react-icons axios

const Navbar = () => {
  return (
    <Link to="/">
      <div className={Style.navbar}>
        <h1 className={Style.firstHeading} data-hover="Go to Homepage">
          Crypto Coins <span className={Style.green}>Daily Price</span>
          <FaMoneyBillAlt className={Style.icon} />
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
