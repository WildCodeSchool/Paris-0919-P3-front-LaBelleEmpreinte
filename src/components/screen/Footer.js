import React from 'react'
import './CSS/Footer.css'
import logo1 from "../../assets/pictures/meow.svg";

import banniere from '../../assets/pictures/belleempreinte.png'
import logo from '../../assets/icons/labelleempreinte-green.png'

export default function Footer() {
    return (
        <div className="footer-footer">
            <img className="footer-banniere" src={banniere} alt="banniere"></img>
            <div className="footer-encadre">
                <img className="footer-logo" src={logo} alt="logo" style={{ width: 128}}></img>
                <p className="footer-remerciements">Un site réalisé par une belle équipe indépendante basée à Paris. Merci beaucoup à tous ceux qui ont aidé à la réalisation de ces outils qui n’existeraient pas sans eux </p>
                <div className="footer-list">
                    <ul>
                        <li><b>CONTACT:</b></li>
                        <p> delphine@labelleempreinte.fr</p>
                        <li><b>Mentions légales</b></li>
                    </ul>
                </div>
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
    )
}