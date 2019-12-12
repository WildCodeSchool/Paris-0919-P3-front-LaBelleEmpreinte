import React from 'react'
import './CSS/Footer.css'

import banniere from '../../assets/pictures/belleempreinte.png'
import logo from '../../assets/icons/labelleempreinte-green.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
                <Button className="footer-button" variant="success" size="m">La lettre des emplettes responsables</Button>
            </div>
        </div>
    )
}