import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../CSS/CreateObjets.css'
export default function CreateCategoryIntermediaire() {

    const [name, setName] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState([])
    const [categories_objets_id, setCategories_objets_id] = useState()
    const newCat = { name, picto, categories_objets_id }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/categories_intermediaires/create'
           axios.post(url, newCat, categories_objets_id)
        }

        useEffect(() => {
            const getFilters = () => {
                axios
                .get("http://localhost:4000/user/objets")
                .then(response => response.data)
                .then(data => {
                  setFiltres(data[0].results);
                });
                
            }
            getFilters()
        }, [])

    return (
        <div className="admincreatearticle">
            <h1>J'ajoute une catégorie intermédiaire</h1>
            <div id="form-main">
                <div id="form-div">
                <form className="form" id="form1"> 
                <label>Nom de la catégorie intermédiaire: <input type="text" className="feedback-input" onChange={(e) => setName(e.target.value)} /></label>
                <p>
                Pictogramme
                <input
                  type="text"
                  className="feedback-input"
                  id="image"
                  placeholder="Image(url)"
                  onChange={(e) => setPicto(e.target.value)}/>
              </p>
                <label> Catégorie d'objet associée 
                    <select onChange={(e) => setCategories_objets_id(e.target.value)}> 
                    {filtres.map(filtre => {
                       return <option value={filtre.id}> {filtre.categorie}</option>
                    })
                }
                </select></label>
            
        <input type="button" className="feedback-input" id="button-blue"value="Créer une catégorie intermédiaire" onClick={handlePost} />
        </form>
        </div>
        </div>
        </div>
        
        

    )
}