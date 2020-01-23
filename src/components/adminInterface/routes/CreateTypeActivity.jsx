import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CreateTypesActivites() {

    const [types_activites, setTypes_activites] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState()
    const [besoins_id, setBesoins] = useState
    const newCat = { types_activites, picto, besoins_id }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/types_activites/create'
           axios.post(url, newCat)
           console.log('yo')
        }

        useEffect(() => {
            const getFilters = () => {
                axios
                .get("http://localhost:4000/user/besoins")
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
            <h3>J'ajoute un type d'activité</h3>
            <div>
                <label>Nom du type d'activité : <input type="text" onChange={(e) => setTypes_activites(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
                {/* Il faut faire un map sur l'index [0] du tableau de filtres qu'on récupère, pour afficher toutes les besoins, et onClick setBesoins_id avec la valeur de l'id de l'élément sur lequel on clique */}
            </div>
            <input type="button" value="Créer catégorie" onClick={handlePost} />
        </div>
        

    )
}