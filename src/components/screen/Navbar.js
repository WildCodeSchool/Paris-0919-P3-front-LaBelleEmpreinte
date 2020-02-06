import React, { Component } from "react";
import logo from "../../assets/icons/labelleempreinte-green.png";
import logo1 from "../../assets/pictures/meow.svg";

import "./CSS/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <div className="navbar-logo">
            <a className="navbar-brand" href="https://labelleempreinte.fr/" >
              <img src={logo} alt="la_belle_empreinte" width="130" />
            </a>
          </div>
          <ul className="navbar-sidebar">
            <li className="navbar-item">
              <a className="navbar-link " href="https://labelleempreinte.fr/" style={{ textDecoration: 'none', color: '#000000' }}>
                ACCUEIL
              </a>
              <div className="navbar-rond"></div>
            </li>

            <hr className="navbar-line" />

            <li className="navbar-item">
              <a className="navbar-link" href="https://labelleempreinte.fr/quizz" style={{ textDecoration: 'none', color: '#000000' }}>
                GUIDE
              </a>
              <div className="navbar-rond"></div>
            </li>

            <hr className="navbar-line" />
            <li className="navbar-item">
              <a className="navbar-link after-orange" href="https://labelleempreinte.fr/label" style={{ textDecoration: 'none', color: '#000000' }}>
                LABEL
              </a>
              <div className="navbar-rond-orange"></div>
            </li>

            <hr className="navbar-line" />
            <li className="navbar-item">
              <a
                className="navbar-link navbar-after-red"
                href="/recherche"
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                <b>MOTEUR DE <br /> RECHERCHE</b>
              </a>
              <div className="navbar-rond-red"></div>
            </li>

            <hr className="navbar-line" />

            <li className="navbar-item">
              <a className="navbar-link after-orange" href="https://labelleempreinte.fr/blog" style={{ textDecoration: 'none', color: '#000000' }}>
                LA BELLE<br /> GAZETTE
              </a>
              <div className="navbar-rond"></div>
            </li>

            <hr className="navbar-line" />

            <li className="navbar-item">
              <a className="navbar-link" href="https://labelleempreinte.fr/presentation" style={{ textDecoration: 'none', color: '#000000' }}>
                EQUIPE
              </a>
              <div className="navbar-rond"></div>
            </li>

            <hr className="navbar-line" />

            <li className="navbar-item">
              <a className="navbar-link-pros" href="https://labelleempreinte.fr/coin-des-pros" style={{ textDecoration: 'none', color: '#399967' }}>
                LE COIN DES <br />PROS
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
                <img className="navbar-logo" src={logo1} alt="" height="16" /> Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
