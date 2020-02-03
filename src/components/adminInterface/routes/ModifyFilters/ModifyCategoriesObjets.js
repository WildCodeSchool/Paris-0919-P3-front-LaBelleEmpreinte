import React, { useState } from 'react'
import axios from 'axios'

export default function ModifyCategory() {

    const [categorie, setCategorie] = useState()
    const [picto, setPicto] = useState()
    const newCat = { categorie, picto }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/categories_objets/create'
           axios.post(url, newCat)
           console.log('yo')
        }

    return (
        <div className="admincreatearticle">
            <h1>J'ajoute une catégorie d'objet</h1>
            <div id="form-main">
                <div id="form-div">
                <label>Nom de la catégorie d'objet: <input className="feedback-input" type="text" onChange={(e) => setCategorie(e.target.value)} /></label>
                <label>Pictogramme: <input className="feedback-input" type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            
            <input className="feedback-input" id="button-blue" type="button" value="Créer catégorie" onClick={handlePost} />
        </div>
        </div>
        </div>

    )
}