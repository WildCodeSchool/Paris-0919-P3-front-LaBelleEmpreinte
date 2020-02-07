import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../CSS/CreateObjets.css'
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function ModifyCategoryIntermediaire(props) {

    // setProps
    const [Elem, setElem] = useState('')
    // récupère une meilleure version de l'objet envoyé
    const [newElem, setNewElem] = useState('')
    //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
    const [justChange, setChange] = useState(true)

    const [name, setName] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState([])
    const [categories_objets_id, setCategories_objets_id] = useState()
    const [id, setId] = useState()

    const newCat = { name, picto, categories_objets_id, id }

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
        setName(newElem.name)
        setPicto(newElem.picto)
        setId(newElem.id)
        setCategories_objets_id(newElem.categories_objets_id)
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

    let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
    } 

  const handlePost = () => {
            const url = `${pathApi}/admin/categories_intermediaires/modify`
            console.log('modify')
            axios.put(url, newCat)
        }
    
        const deletePost = () => {
            const url = `${pathApi}/admin/categories_intermediaires/${id}`
            axios.delete(url)
        }

        useEffect(() => {
            const getFilters = () => {
                axios
                .get(`${pathApi}/user/objets`)

                .then(response => response.data)
                .then(data => {
                    if (data[0].results) {
                        setFiltres(data[0].results);
                    }
                });


        }
        getFilters()
    }, [])

    const handlePost = () => {
        const url = 'http://localhost:4000/admin/categories_intermediaires/modify'
        console.log('modify')
        axios.put(url, newCat)
        .then(res => setRes(res))
    }

    const deletePost = () => {
        const url = `http://localhost:4000/admin/categories_intermediaires/${id}`
        axios.delete(url)
    }

    return (
        <>
        {/* MODAL DE MODIFICATION */}
        < Modal isOpen={modifVisible} toggle={handleClickModif} className="" >
                <ModalHeader toggle={handleClickModif}>La catégorie intermédiairet a bien été modifiée</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/categories_intermediaires"><input type="button" value="OK" /></Link>
                    </div>
                </ModalBody>
            </Modal >

            {/* MODAL DE SUPPRESSION */}
            < Modal isOpen={visible} toggle={handleClick} className="" >
                <ModalHeader toggle={handleClick}>Souhaitez vraiment supprimer la catégorie intermédiaire?</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/categories_intermediaires"><input type="button" value="Confirmer" onClick={() => deletePost()} /></Link>
                    </div>
                </ModalBody>
            </Modal >
        <div className="admincreatearticle">
            <h1>Je modifie une catégorie intermédiaire</h1>
            <div id="form-main">
                <div id="form-div">
                    <div>
                        <label>Nom de la catégorie intermédiaire: <input value={name} type="text" onChange={(e) => setName(e.target.value)} /></label>
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
                        <label> Catégorie d'objet associée
                    <select onChange={(e) => setCategories_objets_id(e.target.value)}>
                                {filtres.map(filtre => {
                                    return <option value={filtre.id}> {filtre.categorie}</option>
                                })
                                }
                            </select></label>
                    </div>
                    <input type="button" className="feedback-input" id="button-blue" value="Modifier la catégorie intermédiaire" onClick={(e) => handlePost(e)} />
                        <input type="button" className="feedback-input" id="button-blue" value="Supprimer la categorie intermédiaire" onClick={() => handleClick()} />
                </div>


            </div>
        </div>
    </>

    )

}
