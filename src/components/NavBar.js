import React, { Component } from 'react'
import logo from "../assets/icons/labelleempreinte-green.png"
 
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <div className="navbar-logo">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="la_belle_empreinte" width='180'/>
                    </a>
                    </div>
                    <ul className="navbar-sidebar">
                        <li className="navbar-item">
                         <a className="navbar-link active" href="/homepage">
                          ACCUEIL
                          
                         </a>
                         </li>
                    <div className="row">
                     <div className="col-9 offset-3">
                      <hr className="my-1" />
                     </div>
                    </div>
                    <li className="navbar-item">
                     <a className="navbar-link" href="/quizz">
                     QUIZZ & GUIDE
                     </a>
                    </li> 
                    <div className="row">
                     <div className="col-9 offset-3">
                      <hr className="my-1" />
                     </div>
                    </div> 
                     <li className="navbar-item">
                      <a className="navbar-link" href="/presentation">
                      PRESENTATION
                      </a>
                     </li> 
                     <div className="row">
                     <div className="col-9 offset-3">
                      <hr className="my-1" />
                     </div>
                    </div> 
                     <li className="navbar-item">
                      <a className="navbar-link after-red" href="/moteur-de-recherche">
                      MOTEUR DE RECHERCHE
                      </a>
                     </li>  
                     <div className="row">
                     <div className="col-9 offset-3">
                      <hr className="my-1" />
                     </div>
                    </div> 
                     <li className="navbar-item">
                      <a className="navbar-link after-orange" href="/label">
                      LABEL
                      </a>
                     </li>
                     <div className="row">
                     <div className="col-9 offset-3">
                      <hr className="my-1" />
                     </div>
                    </div> 
                     <li className="navbar-item">
                      <a className="navbar-link" href="/nous rejoindre">
                      NOUS REJOINDRE
                      </a>
                     </li> 
                     <div className="row">
                     <div className="col-9 offset-3">
                      <hr className="navbar-my-1" />
                     </div>
                    </div> 
                     <li className="navbar-item">
                      <a className="navbar-link" href="/blog">
                      BLOG
                      </a>
                     </li>  
                     <div className="row">
                     <div className="col-9 offset-3">
                      <hr className="navbar-my-1" />
                     </div>
                    </div> 
                     <li className="navbar-item">
                      <a className="navbar-link" href="/premier pas">
                      PREMIER PAS
                      </a>
                     </li> 
                     <div className="row">
                     <div className="col-9 offset-3">
                      <hr className="navbar-my-1" />
                     </div>
                    </div> 
                     <li className="navbar-item">
                      <a className="navbar-link green" href="coin-des-pros">
                      LE COIN DES PROS
                      </a>
                     </li> 
                    </ul>
                    <div className="row my-1 row-newsletter">
                     <div className="col-9 offset-3 text-center">
                      <button className="navbar-btn-green" data-toggle="modal" 
                      data-target="#newsletterModal">
                       <i className="fa fa-envelope"></i>
                       La lettre des emplettes responsables
                       </button>
                     </div>
                    </div> 
                    
                       
                </div>       
            
                
            </div>
        )
    }
}
export default  NavBar 