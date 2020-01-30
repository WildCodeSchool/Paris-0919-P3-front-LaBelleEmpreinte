import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CreateTypeActivity() {

    const [types_activites, setTypes_activites] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState([])
    const [besoins_id, setBesoins_id] = useState()
    const newCat = { types_activites, picto, besoins_id }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/types_activites/create'
           axios.post(url, newCat)
        }

        useEffect(() => {
            const getFilters = () => {
                axios
                .get("http://localhost:4000/user/besoins")
                .then(response => response.data)
                .then(data => {
                  setFiltres(data[0].results);
                });
                
            }
            getFilters()
        }, [])

        console.log(filtres)
        console.log('catinter', besoins_id)

    return (
        <div className="creation-typeCat">
            <h3>J'ajoute un type d'activité</h3>
            <div>
                <label>Nom du type d'activité : <input type="text" onChange={(e) => setTypes_activites(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>


               <label> Catégorie intermédiaire associée <select onChange={(e) => setBesoins_id(e.target.value)}> 
                    {filtres.map(filtre => {
                       return <option value={filtre.id}> {filtre.besoins}</option>
                    })
                }
                </select></label>
                {/* Il faut faire un map sur l'index [1] du tableau de filtres qu'on récupère, pour afficher toutes les catégories intermédiaires, et onClick setCategories_intermédiaires avec la valeur de l'id de l'élément sur lequel on clique */}
            </div>
            <input type="button" value="Créer catégorie" onClick={handlePost} />
        </div>
        

    )
}