import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Home.css'
import MainFilters from './MainFilters'

export default function HomeAdmin() {


    const [isAdmin, setAdmin] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('myConnection') === 'true') {
            setAdmin(true)
            console.log(isAdmin)
        }
    })


    if (isAdmin){
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
    )}
    else{
        return(
            <>
            <div className="retour"><Link to='/'>Retour vers le site</Link></div>

            <h1>Vous n'avez les droits administrateurs pour accéder à cette page</h1>
            </>
        )
    }
}