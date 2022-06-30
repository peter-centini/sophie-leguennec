import React, { useState } from "react";
import Logo from "../../asset/Logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaMobileAlt } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";

function Navbar() {
  const [status, setStatus] = useState("close");
  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <nav className="navbar">
      <header className="navbar_header">
        <div className="phone">
          <FaMobileAlt size={15} classeName="phone_svg" />
          <p className="phonetext"> 00.00.00.00.00</p>
        </div>
        <div className="mail">
          <VscMail size={20} className="mail_svg" />{" "}
          <p className="mailtext"> petermoto@free.fr</p>
        </div>
      </header>
      <div className="navbar_container">
        <NavLink exact to="/" className="navbar_logo">
          <img className="logo" src={Logo} alt="Logo" />
          <p className="textlogo">Sophie Leguennec</p>
        </NavLink>
        <div
          className={status === "open" ? "navbar_menu active" : "navbar_menu"}
        >
          <div className="navbar_item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="navbar_links"
              onClick={handleClick}
            >
              Accueil
            </NavLink>
          </div>
          <div className="navbar_item ">
            <NavLink
              to="/mission"
              activeClassName="active"
              className="navbar_links"
              onClick={handleClick}
            >
              Ma Mission
            </NavLink>
          </div>
          <div className="navbar_item">
            <NavLink
              to="/proceder"
              activeClassName="active"
              className="navbar_links"
              onClick={handleClick}
            >
              Comment je Procéde
            </NavLink>
          </div>
          <div className="navbar_item">
            <NavLink
              to="/infos"
              activeClassName="active"
              className="navbar_links"
              onClick={handleClick}
            >
              Plus d'information
            </NavLink>
          </div>
          <div className="navbar_item">
            <NavLink
              to="/contact"
              activeClassName="active"
              className="navbar_links"
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div
          className="BurgerMenu__container"
          role="button"
          onClick={() => setStatus(status === "open" ? "close" : "open")}
        >
          <i className={status}></i>
          <i className={status}></i>
          <i className={status}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
