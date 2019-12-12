<<<<<<< HEAD
import React from "react";
=======
import React from "react"; 
>>>>>>> 4af660584220c9262a468d36727f7f5d27a39e56

import "./header.css";
import logo from "./search-13-32.png";




function Header() {
  return (
    <div className="header_main">
      <header className="header_second">
        <h1>LA BELLE EMPREINTE,</h1>
        <h2>Le guide vers les objets responsables</h2>
        <h3><img src={logo} alt='logo' /> LE MOTEUR DE RECHERCHE des objets responsables</h3>
      </header>
    </div>
    
  );
}

export default Header;
