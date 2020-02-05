import React, { useState } from 'react'
import axios from 'axios'
import '../CSS/CreateObjets.css'


export default function CreateCategory() {

    const [categorie, setCategorie] = useState()
    const [picto, setPicto] = useState()
    const newCat = { categorie, picto }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/categories_objets/create'
           axios.post(url, newCat)
        }

    return (
        <div className="admincreatearticle">
            <h1>J'ajoute une catégorie d'objet</h1>
            <div id="form-main">
                <div id="form-div">
                <form className="form" id="form1"> 
                <label>Nom de la catégorie d'objet: <input className="feedback-input"  type="text" onChange={(e) => setCategorie(e.target.value)} /></label>
                <p>
                Pictogramme
                <input
                  type="text"
                  className="feedback-input"
                  id="image"
                  placeholder="Image(url)"
                  onChange={(e) => setPicto(e.target.value)}/>
              </p>  
              
            <input type="button" id="button-blue" className="feedback-input" value="Créer une catégorie d'objet" onClick={handlePost} />
                          
        </form>
        </div>
        </div>
        </div>

    )
}