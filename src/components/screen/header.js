import React from "react";

import "./header.css";
import logo from "./search-13-32.png";




function Header() {
  return (
      <header className="header_main">
        <div className="header_titleAndBurger">
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
        <h3><img className="loupe" src={logo} alt='logo' /> LE MOTEUR DE RECHERCHE des objets responsables</h3>
      </header>

  );
}

export default Header;
