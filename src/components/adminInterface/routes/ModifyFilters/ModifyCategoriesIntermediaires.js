import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ModifyCategoryIntermediaire() {

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

        console.log(categories_objets_id)
        console.log(filtres)

    return (
        <div className="creation-typeCat">
            <h3>J'ajoute une catégorie intermédiaire</h3>
            <div>
                <label>Nom de la catégorie intermédiaire: <input type="text" onChange={(e) => setName(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>

                <label> Catégorie d'objet associée 
                    <select onChange={(e) => setCategories_objets_id(e.target.value)}> 
                    {filtres.map(filtre => {
                       return <option value={filtre.id}> {filtre.categorie}</option>
                    })
                }
                </select></label>
            </div>
            <input type="button" value="Créer catégorie" onClick={handlePost} />
        </div>
        

    )
}