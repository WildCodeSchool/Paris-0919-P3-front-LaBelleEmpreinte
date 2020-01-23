import React, { useState, useEffect } from "react"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import {Link} from 'react-router-dom'

import "./CSS/Header.css"
import icon from "../../assets/pictures/search-13-32.png"
import logo from "../../assets/icons/labelleempreinte-green.png"
import logo1 from "../../assets/pictures/meow.svg";
import axios from "axios"




function Header() {

  const [visible, setVisible] = useState(false)
  const [login, setLogin] = useState(false)
  // l'utilisateur est t'il connecté? le state se réfère au local
  const [isConnected, setConnection] = useState(false)
  //message sur le login en cas d'erreur
  const [message, setMessage] =useState()
  //state qui recoit la réponse du back
  const [backRes, setRes] = useState("salut?")

  // state pour les inputs de connection
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  // fonction pour faire apparaitre le menu burger
  const handleClick = () => {
    setVisible(!visible)
  }
  // fonction pour faire apparaitre le menu de loggin
  const handleLogin = () => {
    setLogin(false)
  }

  // button pour le login de l'administrateur
  const submitInfo = () => {

    axios.post('http://localhost:4000/auth/', {'email': email, 'password': password})
    // .then(res => console.log(res)
    // )
    .then(res => setRes(res.data))
  }


  // vérifie si une réponse positive à été récupéré du back 
  useEffect(() => {
    if (localStorage.getItem('myConnection') === 'true'){
      setConnection(true)
    }

    console.log("l'état de la connection est: ", isConnected)
    if (backRes.auth === true && isConnected === false){
    setConnection(true)
      setLogin(false)
      // on stocke le state en local
      localStorage.setItem('myConnection', backRes.auth)}
      else{
        setMessage('Erreur de saisie du mot de passe ou du mail identifiant')

      }
  })

  //petite fonction pour la déconnection
  const handleDeconnection = () => {
    setConnection(false)
    localStorage.removeItem('myConnection')
    console.log(isConnected)

  }


  return (
    <header className="header_main">
      {/* div pour la connection admin */}
      <div className="login-area">
        {isConnected ? <div className="connection"><Link to="/admin">Espace administrateur</Link><>/</><div onClick={()=> handleDeconnection()}>Déconnection</div></div> : <div className="connection" onClick={(e) => setLogin(true)}>Connexion</div>}
      </div>
      <Modal isOpen={login} toggle={handleLogin} className="">
        <ModalHeader toggle={handleLogin}>La Belle Admin: </ModalHeader>
        <ModalBody>
          <form>
            <label> Adresse mail:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <label>Mot de passe:
            <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            </label>
          </form>
          <div>{message}</div>
          <input type="button" value="Envoyer" onClick={submitInfo}/>
        </ModalBody>
      </Modal>

      {/* les titres principaux de la page */}
      <div className="header_titleAndBurger">
        <img src={logo} alt="logo" width="96px"></img>
        <div className="header_mainTitle">
          <h1>LA BELLE EMPREINTE,</h1>
          <h2>Le guide vers les objets responsables</h2>
        </div>
        <div className="header_burger" onClick={handleClick}>
          <div className="header_greenDot" />
          <div className="header_redDot" />
          <div className="header_orangeDot" />
        </div>
      </div>
      <h3><img className="loupe" src={icon} alt='logo' /> LE MOTEUR DE RECHERCHE des objets responsables</h3>


      {/* le menu modal commence ici */}
      <Modal isOpen={visible} toggle={handleClick} className="">
        <ModalHeader toggle={handleClick}></ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            {/* image */}
            <img src={logo} alt="logo" className="burger-logo" />

            {/* liste des liens */}
            <ul className="navbar-sidebar">
              <li className="navbar-item">
                <a className="navbar-link " href="/homepage">
                  ACCUEIL
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link" href="/quizz">
                  QUIZZ & GUIDE
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />
              <li className="navbar-item">
                <a className="navbar-link" href="/presentation">
                  PRESENTATION
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />
              <li className="navbar-item">
                <a
                  className="navbar-link navbar-after-red"
                  href="/moteur-de-recherche"
                >
                  MOTEUR DE <br /> RECHERCHE
              </a>
                <div className="navbar-rond-red"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link after-orange" href="/label">
                  LABEL
              </a>
                <div className="navbar-rond-orange"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link" href="/nous rejoindre">
                  NOUS <br /> REJOINDRE
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link" href="/blog">
                  BLOG
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link" href="/premier pas">
                  PREMIER PAS
              </a>
                <div className="navbar-rond"></div>
              </li>

              <hr className="navbar-line" />

              <li className="navbar-item">
                <a className="navbar-link-pros" href="coin-des-pros">
                  LE COIN DES <br />PROS
              </a>
                <div className="navbar-rond"></div>
              </li>
            </ul>

            {/* bouton */}
            <button
              className="navbar-button"
              data-toggle="modal"
              data-target="#newsletterModal"
            >
              <i className="navbar-envelope"></i>
              <img className="navbar-logo" src={logo1} alt="" height="16" /> La lettre des <br />emplettes
              responsables
              </button>
          </div>
        </ModalBody>
      </Modal>
    </header>

  );
}

export default Header;
