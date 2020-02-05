import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../CSS/CreateObjets.css'
export default function CreateCategoryIntermediaire() {

    const [name, setName] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState([])
    const [categories_objets_id, setCategories_objets_id] = useState()
    const newCat = { name, picto, categories_objets_id }

    let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
    } 

    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = `${pathApi}/admin/categories_intermediaires/create`
        axios.post(url, newCat, categories_objets_id)
    }


    useEffect(() => {
        const getFilters = async () => {
            await axios
                .get(`${pathApi}/user/objets`)
                .then(response => response.data)
                .then(data => {
                    setFiltres(data[0].results)
                    setCategories_objets_id(data[0].results[0].id)
                })
                    
            }
        getFilters()
    }, [])
    console.log('catparent',categories_objets_id)
console.log('filtres', filtres)
    return (
        <div className="admincreatearticle">
            <h1>J'ajoute une catégorie intermédiaire</h1>
            <div id="form-main">
                <div id="form-div">
                    <form className="form" id="form1">
                        <label>Nom de la catégorie intermédiaire: <input type="text" className="feedback-input" onClick={(e) => setName(e.target.value)} /></label>
                        <p>
                            Pictogramme
                <input
                                type="text"
                                className="feedback-input"
                                id="image"
                                placeholder="Image(url)"
                                onChange={(e) => setPicto(e.target.value)} />
                        </p>
                        <label> Catégorie d'objet associée
                    <select onChange={(e) => setCategories_objets_id(e.target.value)}>
                                {filtres.map(filtre => {
                                    return <option value={filtre.id}> {filtre.categorie}</option>
                                })
                                }
                            </select></label>

                        <input type="button" className="feedback-input" id="button-blue" value="Créer une catégorie intermédiaire" onClick={handlePost} />
                    </form>
                </div>
            </div>
        </div>



    )
}