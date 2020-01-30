import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ModifyObjets() {

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
                    console.log("aaaaaaaa", data)
                  setFiltres(data[1].results);
                });
                
            }
            getFilters()
        }, [])

        console.log(filtres)
        console.log('catinter', categories_intermediaires_id)

    return (
        <div className="creation-typeCat">
            <h3>J'ajoute un objet</h3>
            <div>
                <label>Nom de l'objet : <input type="text" onChange={(e) => setName(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>


               <label> Catégorie intermédiaire associée <select onChange={(e) => setCategories_intermediaires_id(e.target.value)}> 
                    {filtres.map(filtre => {
                       return <option value={filtre.id}> {filtre.name}</option>
                    })
                }
                </select></label>
                {/* Il faut faire un map sur l'index [1] du tableau de filtres qu'on récupère, pour afficher toutes les catégories intermédiaires, et onClick setCategories_intermédiaires avec la valeur de l'id de l'élément sur lequel on clique */}
            </div>
            <input type="button" value="Créer catégorie" onClick={handlePost} />
        </div>
        

    )
}