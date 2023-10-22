import React from "react";
import "./Nav.scss";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../../assets/images/Logo.png";
import hamburger from "../../assets/images/hamburger.png";

export default function Nav() {
  return (
    <div className="nav">
      <input type="checkbox" className="nav__toggle" id="hamburger" hidden />{" "}
      <ul className="nav__lblock">
        <label htmlFor="hamburger">
          <li className="hamburger">
            <img src={hamburger} alt="hamburger-icon" />
          </li>{" "}
        </label>
        <li className="logo">
          <img src={logo} alt="Logo" />
        </li>
      </ul>
      <ul className="nav__links">
        <li className="home">Home</li>
        <li>About</li>
        {/* <li className="services">
          Services <AiOutlineDown size="12px" />
        </li> */}
        {/* <li className="pricing">
          Pricing <AiOutlineDown size="12px" />
        </li> */}
        <li>Contact</li>
      </ul>
      <ul className="nav__dropl">
        <li className="home">Home</li>
        <li>About</li>
        <li className="services">
          Services <AiOutlineDown size="12px" />
        </li>
        <li className="pricing">
          Pricing <AiOutlineDown size="12px" />
        </li>
        <li>Contact</li>
      </ul>
      <div className="nav__rblock">
        <div className="login">Login</div>
        <div className="btn">Sign Up</div>
      </div>
    </div>
  );
}
