import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Home.css'
import MainFilters from './MainFilters'
import axios from "axios"

export default function HomeAdmin() {


    // state Admin
    const [isAdmin, setAdmin] = useState(true)
    //state qui recoit la réponse du back
    const [backRes, setRes] = useState(false)
    //message sur le login en cas d'erreur
    const [message, setMessage] = useState()


    // vérifie si une réponse positive à été récupéré du back 
    useEffect(() => {
        if (localStorage.getItem('myConnection') === 'true') {
            setAdmin(true)
        }
        else if (backRes.auth === true && isAdmin === false) {
            setAdmin(true)
            // on stocke le state en local
            localStorage.setItem('myConnection', backRes.auth)
        }
        
    }, [])

    // state pour le login
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    //action du login
    const submitInfo = () => {

        axios.post('http://localhost:4000/auth/', { 'email': email, 'password': password })
            .then(res => setRes(res.data))

            if (isAdmin === false) {
                setMessage('Erreur de saisie du mot de passe ou du mail identifiant')
    
            }
    }


    // vérifie le state stocké sur l'appareil
    useEffect(() => {
        if (localStorage.getItem('myConnection') === 'true') {
            setAdmin(true)
        }
        // si jamais les données locales sont absentes ou fausses, ferme le state admin
        else {
            setAdmin(true)
        }
    })

    // se charge de la déconnection
    const handleDeconnection = () => {
        localStorage.removeItem('myConnection')
        if (isAdmin){
        setAdmin(false)}}

    // si l'utilisateur à les droits admin il peut accéder au contenu
    if (isAdmin) {
        return (
            <>
                <div className="retour"><Link to='/recherche'>Retour vers le site</Link></div>
                <Link to="/admin"><div className="déco" onClick={(e) => handleDeconnection()}>Déconnection</div></Link>

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
    // si l'utilisateur n'est pas admin, il n'a pas accès au contenu
    else {
        return (
            <>
                <div className="retour"><Link to='/recherche'>Retour vers le site</Link></div>

                <h1 className="denial-Title">Vous n'avez les droits administrateurs pour accéder à cette page</h1>
                <div className="login_button">
                    <div className="please_connect">Veuillez vous connecter: </div>
                    <form className="home_Login">
                        <label className="Home_input"> Adresse mail:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </label>
                        <label className="Home_input">Mot de passe:
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                    </form>
                    <div>{message}</div>
                    <input type="button" value="Connexion" onClick={() => submitInfo()} />
                </div>
            </>
        )
    }
}