import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CreateCategoryIntermediaire() {

    const [name, setName] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState()
    const [categories_objets_id, setCategories_objets_id] = useState
    const newCat = { name, picto, categories_objets_id }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/categories_intermediaires/create'
           axios.post(url, newCat)
           console.log('yo')
        }

        useEffect(() => {
            const getFilters = () => {
                axios
                .get("http://localhost:4000/user/objets")
                .then(response => response.data)
                .then(data => {
                    console.log("aaaaaaaa", data)
                  setFiltres(data);
                });
                
            }
            getFilters()
        }, [])

        console.log(filtres)

    return (
        <div className="creation-typeCat">
            <h3>J'ajoute une catégorie intermédiaire</h3>
            <div>
                <label>Nom de la catégorie intermédiaire: <input type="text" onChange={(e) => setName(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
                {/* Il faut faire un map sur l'index [0] du tableau de filtres qu'on récupère, pour afficher toutes les catégories d'objet, et onClick setCategories_objets_id avec la valeur de l'id de l'élément sur lequel on clique */}
            </div>
            <input type="button" value="Créer catégorie" onClick={handlePost} />
        </div>
        

    )
}