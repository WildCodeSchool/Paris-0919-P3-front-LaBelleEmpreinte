import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../CSS/CreateObjets.css'

export default function CreateObjets() {

    const [name, setName] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState([])
    const [categories_intermediaires_id, setCategories_intermediaires_id] = useState()
    const newCat = { name, picto, categories_intermediaires_id }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/objets/create'
           axios.post(url, newCat)
        }

        useEffect(() => {
            const getFilters = () => {
                axios
                .get("http://localhost:4000/user/objets")
                .then(response => response.data)
                .then(data => {
                  setFiltres(data[1].results);
                  setCategories_intermediaires_id(data[1].results[0].id)
                });
                
            }
            getFilters()
        }, [])

      
    return (
        <div className="admincreatearticle">
            <h1>J'ajoute un objet</h1>
            <div id="form-main">
                <div id="form-div">
                <form className="form" id="form1">   
                <label>Nom de l'objet : <input className="feedback-input" type="text" onChange={(e) => setName(e.target.value)} /></label>
                <p>
                Pictogramme
                <input
                  type="text"
                  className="feedback-input"
                  id="image"
                  placeholder="Image(url)"
                  onChange={(e) => setPicto(e.target.value)}/>
              </p>

               <label> Catégorie intermédiaire associée <select onChange={(e) => setCategories_intermediaires_id(e.target.value)}> 
                    {filtres.map(filtre => {
                       return <option value={filtre.id}> {filtre.name}</option>
                    })
                }
                </select></label>
                {/* Il faut faire un map sur l'index [1] du tableau de filtres qu'on récupère, pour afficher toutes les catégories intermédiaires, et onClick setCategories_intermédiaires avec la valeur de l'id de l'élément sur lequel on clique */}
            
            <input className="feedback-input" id="button-blue" type="button" value="Créer un objet" onClick={handlePost} />
            </form>
            </div>
            </div>
        </div>
        

    )
}