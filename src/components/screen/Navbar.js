import React, { Component } from "react";
import logo from "../../assets/icons/labelleempreinte-green.png";
import logo1 from "../../assets/pictures/meow.svg";

import "./CSS/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div>
          <div className="navbar-logo">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="la_belle_empreinte" width="130" />
            </a>
          </div>
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
                GUIDE
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
                <b>MOTEUR DE <br /> RECHERCHE</b>
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
                NOUS <br/> REJOINDRE
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
                LE COIN DES <br/>PROS
              </a>
              <div className="navbar-rond"></div>
            </li>
          </ul>
          <div className="navbar-row navbar-my-1 navbar-row-newsletter">
            <div className="navbar-text">
              <button
                className="navbar-button"
                data-toggle="modal"
                data-target="#newsletterModal"
              >
                <i className="navbar-envelope"></i>
                <img className="navbar-logo" src={logo1} alt="" height="16" /> La lettre des <br/>emplettes
                responsables
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
