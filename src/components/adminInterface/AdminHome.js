import React from 'react'
import './CSS/AdminHome.css'

const AdminHome = ({ action, handleCreer, handleAfficher, handleArticle, handleInitiative, handleEngagement, handleObjet, handleBesoin }) => (
    <div className='adminhome'>
        <h1>Interface administrateur</h1>
        <nav id="adminhome_nav_wrap">
            <ul>
                <li><span>{action.AdminHomeActionReducer}</span>
                    <ul>
                        <li><span onClick={handleCreer}>Créer</span></li>
                        <li><span onClick={handleAfficher}>Afficher</span></li>
                    </ul>
                </li>
                <li><span>{action.AdminHomeTableReducer}</span>
                    <ul>
                        <li><span onClick={handleArticle}>Article informatif</span></li>
                        <li><span onClick={handleInitiative}>Initiative responsable</span></li>
                        <li><span onClick={handleEngagement}>Engagement</span></li>
                        <li><span onClick={handleObjet}>Objet</span></li>
                        <li><span onClick={handleBesoin}>Besoin</span></li>
                    </ul>
                </li>
                <li>
                    <span>Valider</span>
                </li>
            </ul>
        </nav>
    </div>
)

export default AdminHome