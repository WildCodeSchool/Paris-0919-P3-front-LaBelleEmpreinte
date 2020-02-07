import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

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

    // rend visible/invisible le menu modal
    const [visible, setVisible] = useState(false)
    const [modifVisible, setModifVisible] = useState(false)
    // reçoit la réponse depuis le back
    const [theRes, setRes] = useState()

    //Pour les modals
    const handleClickModif = () => {
        setModifVisible(!modifVisible)

    }

    const handleClick = () => {
        setVisible(!visible)
    }

    //affiche la confirmation de modification
    useEffect(() => {
        if (theRes) {

            if (theRes.statusText === "OK") {
                setModifVisible(true)
            }
        }
    }, [theRes]
    )

    const loadStates = () => {
        setCategorie(newElem.categorie)
        setPicto(newElem.picto)
        setId(newElem.id)
        setChange(false)
    }
    let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
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
        const url = `${pathApi}/admin/categories_objets/modify`
        axios.put(url, newCat)
            .then(res => setRes(res))
    }

    const deletePost = () => {
        const url = `${pathApi}/admin/categories_objets/${id}`
        axios.delete(url)
    }

    return (
        <>
            {/* MODAL DE MODIFICATION */}
            < Modal isOpen={modifVisible} toggle={handleClickModif} className="" >
                <ModalHeader toggle={handleClickModif}>La catégorie d'objet a bien été modifiée</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/categories_objets"><input type="button" value="OK" /></Link>
                    </div>
                </ModalBody>
            </Modal >

            {/* MODAL DE SUPPRESSION */}
            < Modal isOpen={visible} toggle={handleClick} className="" >
                <ModalHeader toggle={handleClick}>Souhaitez vraiment supprimer la catégorie d'objet?</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/categories_objets"><input type="button" value="Confirmer" onClick={() => deletePost()} /></Link>
                    </div>
                </ModalBody>
            </Modal >

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
                                    onClick={() => handleClick()}
                                />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}