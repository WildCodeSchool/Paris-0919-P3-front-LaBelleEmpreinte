import React from 'react'
import './CSS/Footer.css'

// images utilisées pour ce footer
import baniere from '../../assets/pictures/belleempreinte.png'
import logo from '../../assets/icons/labelleempreinte-green.png'

// bootstrap pour le button
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Footer() {
    return (
        <div className="footer">
            <img className="banniere" src={baniere} alt="banniere"></img>
            <div className="encadre">
                <img className="logo" src={logo} alt="logo" style={{ width: 128}}></img>
                <p className="remerciements">Un site réalisé par une belle équipe indépendante basée à Paris. Merci beaucoup à tous ceux qui ont aidé à la réalisation de ces outils qui n’existeraient pas sans eux </p>
                <div className="list">
                    <ul>
                        <li><b>CONTACT:</b></li>
                        <p> delphine@labelleempreinte.fr</p>
                        <li><b>Mentions légales</b></li>
                    </ul>
                </div>
                <Button className="button" variant="success" size="m">La lettre des emplettes responsables</Button>
            </div>
        </div>
    )
}