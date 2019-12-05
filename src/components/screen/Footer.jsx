import React from 'react'
import './CSS/Footer.css'
import baniere from '../../assets/pictures/belleempreinte.png'
import logo from '../../assets/icons/labelleempreinte-green.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <div className="footer">
            <img className="banniere" src={baniere} alt="banniere"></img>
            <div className="encadre">
                <img src={logo} alt="logo" style={{ width: 128}}></img>
                <p>Un site réalisé par une belle équipe indépendante basée à Paris. Merci beaucoup à tous ceux qui ont aidé à la réalisation de ces outils qui n’existeraient pas sans eux </p>
                <div className="list">
                    <ul>
                        <li>CONTACT: delphine@labelleempreinte.fr</li>
                        <li>Mentions légales</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}