import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ModifyCategory(props) {

    // setProps
    const [Elem, setElem] = useState('')
    // récupère une meilleure version de l'objet envoyé
    const [newElem, setNewElem] = useState('')
    //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
    const [justChange, setChange] = useState(true)
    const [id, setId] = useState()


    const [categorie, setCategorie] = useState()
    const [picto, setPicto] = useState()
    const newCat = { categorie, picto, id }

    const loadStates = () => {
        setCategorie(newElem.categorie)
        setPicto(newElem.picto)
        setId(newElem.id)
        setChange(false)
    }

    useEffect(() => {
        setElem(props)
        setNewElem(Elem.elem)
        if (newElem && justChange) {
            loadStates()
        }
    })


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/categories_objets/modify'
        axios.put(url, newCat)
    }

    const deletePost = () => {
        const url = `http://localhost:4000/admin/categories_objets/${id}`
        axios.delete(url)
    }

    return (

        <div className="admincreatearticle">
            <h1>Je modifie une catégorie d'objet</h1>
            <div id="form-main">
                <div id="form-div">
                    <label>Nom de la catégorie d'objet: <input className="feedback-input" type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} /></label>
                    <p>
                        Pictogramme
                <input
                            type="text"
                            className="feedback-input"
                            id="image"
                            value={picto}
                            placeholder="Image(url)"
                            onChange={(e) => setPicto(e.target.value)} />
                    </p>
                    <div classname="button">
                        <Link to="/admin/afficher/categories_objets">
                            <input
                                className="feedback-input"
                                type="button"
                                value="Modifier objet" id="button-blue"
                                onClick={e => handlePost(e)}
                            />
                            <input
                                className="feedback-input"
                                type="button"
                                value="Supprimer objet" id="button-blue"
                                onClick={() => deletePost()}
                            />
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}