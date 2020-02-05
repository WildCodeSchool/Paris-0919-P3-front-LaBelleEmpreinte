import React, { useState } from "react"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import "./CSS/Header.css"
import icon from "../../assets/pictures/search-13-32.png"
import logo from "../../assets/icons/labelleempreinte-green.png"
import logo1 from "../../assets/pictures/meow.svg";

function Header() {

  const [visible, setVisible] = useState(false)
  

  // fonction pour faire apparaitre le menu burger
  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <header className="header_main">
      {/* les titres principaux de la page */}
      <div className="header_titleAndBurger">
        <img src={logo} alt="logo" width="96px"></img>
        <div className="header_mainTitle">
          <h1>LA BELLE EMPREINTE,</h1>
          <h2>Le guide vers les objets responsables</h2>
        </div>
        <div className="header_burger" onClick={handleClick}>
          <div className="header_greenDot" />
          <div className="header_redDot" />
          <div className="header_orangeDot" />
        </div>
      </div>
      <h3><img className="loupe" src={icon} alt='logo' /> LE MOTEUR DE RECHERCHE des objets responsables</h3>


      {/* le menu modal commence ici */}
      <Modal isOpen={visible} toggle={handleClick} className="">
        <ModalHeader toggle={handleClick}></ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            {/* image */}
            <img src={logo} alt="logo" className="burger-logo" />

            {/* liste des liens */}
            <ul className="navbar-sidebar">
              <li className="navbar-item">
                <a className="navbar-link " href="/homepage">
                  ACCUEIL
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link" href="/quizz">
                  QUIZZ & GUIDE
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />
              <li className="navbar-item">
                <a className="navbar-link" href="/presentation">
                  PRESENTATION
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />
              <li className="navbar-item">
                <a
                  className="navbar-link navbar-after-red"
                  href="/moteur-de-recherche"
                >
                  MOTEUR DE <br /> RECHERCHE
              </a>
                <div className="navbar-rond-red"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link after-orange" href="/label">
                  LABEL
              </a>
                <div className="navbar-rond-orange"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link" href="/nous rejoindre">
                  NOUS <br /> REJOINDRE
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link" href="/blog">
                  BLOG
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link" href="/premier pas">
                  PREMIER PAS
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link-pros" href="coin-des-pros">
                  LE COIN DES <br />PROS
              </a>
                <div className="navbar-rond"></div>
              </li>
            </ul>

            {/* bouton */}
            <button
              className="navbar-button"
              data-toggle="modal"
              data-target="#newsletterModal"
            >
              <i className="navbar-envelope"></i>
              <img className="navbar-logo" src={logo1} alt="" height="16" /> La lettre des <br />emplettes
              responsables
              </button>
          </div>
        </ModalBody>
      </Modal>
    </header>

  );
}

export default Header;
