import React from 'react'
import {Link} from 'react-router-dom'
import './CSS/Home.css'
import MainFilters from './MainFilters'

export default function HomeAdmin() {
    return (
        <>
        <div className="retour"><Link to='/'>Retour vers le site</Link></div>
            <div className="admin-Header">
                <div className="mainTitle">
                    <h1>LA BELLE EMPREINTE,</h1>
                    <h2>Le guide vers les objets responsables</h2>
                </div>
                <h3 className="orangeTitle">ESPACE ADMINISTRATEUR</h3>
            </div>
            <MainFilters />
        </>
    )
}