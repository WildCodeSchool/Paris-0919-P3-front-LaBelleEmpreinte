import React from 'react'
import './CSS/Home.css'
import MainFilters from './MainFilters'
import { BrowserRouter } from 'react-router-dom'

export default function TitleAdmin() {
    return (

        <div className="admin-Header">
            <div className="mainTitle">
                <h1>LA BELLE EMPREINTE,</h1>
                <h2>Le guide vers les objets responsables</h2>
            </div>
            <h3 className="orangeTitle">ESPACE ADMINISTRATEUR</h3>
            <BrowserRouter>
                <MainFilters />
            </BrowserRouter>
        </div>
    )
}