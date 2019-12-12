import React from "react"

import "./CSS/Header.css"
import logo from "../../assets/pictures/search-13-32.png"
import icon from "./search-13-32.png";
import logo from "../../assets/icons/labelleempreinte-green.png"




function Header() {
  return (
      <header className="header_main">
        <div className="header_titleAndBurger">
          <img src={logo} alt="logo" width="96px"></img>
          <div className="header_mainTitle">
            <h1>LA BELLE EMPREINTE,</h1>
            <h2>Le guide vers les objets responsables</h2>
          </div>
          <div className="header_burger">
            <div className="header_greenDot" />
            <div className="header_redDot" />
            <div className="header_orangeDot" />
          </div>
        </div>
        <h3><img className="loupe" src={icon} alt='logo' /> LE MOTEUR DE RECHERCHE des objets responsables</h3>
      </header>

  );
}

export default Header;
