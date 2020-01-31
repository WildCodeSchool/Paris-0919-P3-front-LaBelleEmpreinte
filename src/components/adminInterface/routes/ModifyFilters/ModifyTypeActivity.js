import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function ModifyTypeActivity(props) {

    // setProps
    const [Elem, setElem] = useState('')
    // récupère une meilleure version de l'objet envoyé
    const [newElem, setNewElem] = useState('')
    //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
    const [justChange, setChange] = useState(true)

    const [types_activites, setTypes_activites] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState([])
    const [besoins_id, setBesoins_id] = useState()
    const [id, setId] = useState ()

    const newCat = { types_activites, picto, besoins_id, id }

    const loadStates = () => {
        setTypes_activites(newElem.types_activites)
        setPicto(newElem.picto)
        setId(newElem.id)
        setBesoins_id(newElem.besoins_id)
        setChange(false)
      }

    useEffect(() => {
        setElem(props)
        setNewElem(Elem.elem)
        if (newElem &&justChange){
          loadStates()
        }
      })

    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/types_activites/modify'
           axios.put(url, newCat)
        }

        const deletePost = () => {
            const url = `http://localhost:4000/admin/types_activites/${id}`
            axios.delete(url)
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

        console.log(Elem)
        console.log('catinter', besoins_id)

    return (
        <div className="creation-typeCat">
            <h3>Je modifie un type d'activité</h3>
            <div>
                <label>Nom du type d'activité : <input type="text" value={types_activites} onChange={(e) => setTypes_activites(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>


               <label> Catégorie intermédiaire associée <select onChange={(e) => setBesoins_id(e.target.value)}> 
                    {filtres.map(filtre => {
                       return <option value={filtre.id}> {filtre.besoins}</option>
                    })
                }
                </select></label>
                {/* Il faut faire un map sur l'index [1] du tableau de filtres qu'on récupère, pour afficher toutes les catégories intermédiaires, et onClick setCategories_intermédiaires avec la valeur de l'id de l'élément sur lequel on clique */}
            </div>
            <input type="button" value="Modifier la Catégorie Intermédiaire" onClick={handlePost} />
            <Link to="/admin/afficher/types_activites">
            <input type="button" value="Supprimer la Catégorie Intermédiaire" onClick={() => deletePost()} />
            </Link>
        </div>
        

    )
}








