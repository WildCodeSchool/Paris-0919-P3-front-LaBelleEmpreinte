import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../CSS/CreateObjets.css'

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

    return (
        <div className="admincreatearticle">
            <h1>J'ajoute un type d'activité</h1>
            <div id="form-main">
            <div id="form-div">
                <form className="form" id="form1"> 
                <label>Nom du type d'activité : <input type="text" className="feedback-input" onChange={(e) => setTypes_activites(e.target.value)} /></label>
                <p>
                Pictogramme
                <input
                  type="text"
                  className="feedback-input"
                  id="image"
                  placeholder="Image(url)"
                  onChange={(e) => setPicto(e.target.value)}/>
              </p>

               <label> Catégorie intermédiaire associée <select onChange={(e) => setBesoins_id(e.target.value)}> 
                    {filtres.map(filtre => {
                       return <option value={filtre.id}> {filtre.besoins}</option>
                    })
                }
                </select></label>            
            <input type="button" id="button-blue" className="feedback-input" value="Créer un type d'activité" onClick={handlePost} />
        </form>
        </div>
        </div>
        </div>
        

    )
}