import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../CSS/CreateObjets.css'
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'


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
    const [id, setId] = useState()

    const newCat = { types_activites, picto, besoins_id, id }

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
        setTypes_activites(newElem.types_activites)
        setPicto(newElem.picto)
        setId(newElem.id)
        setBesoins_id(newElem.besoins_id)
        setChange(false)
    }

    useEffect(() => {
        setElem(props)
        setNewElem(Elem.elem)
        if (newElem && justChange) {
            loadStates()
        }
    })
console.log(Elem)
    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/types_activites/modify'
        axios.put(url, newCat)
            .then(res => setRes(res))
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
                    if (data[0]) {

                        setFiltres(data[0].results);

                    }

                });

        }
        getFilters()
    }, [])

    return (
        <>
            {/* MODAL DE MODIFICATION */}
            < Modal isOpen={modifVisible} toggle={handleClickModif} className="" >
                <ModalHeader toggle={handleClickModif}>Le type d'activité a bien été modifié</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/types_activites"><input type="button" value="OK" /></Link>
                    </div>
                </ModalBody>
            </Modal >

            {/* MODAL DE SUPPRESSION */}
            < Modal isOpen={visible} toggle={handleClick} className="" >
                <ModalHeader toggle={handleClick}>Souhaitez vraiment supprimer le type d'activité?</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/types_activites"><input type="button" value="Confirmer" onClick={() => deletePost()} /></Link>
                    </div>
                </ModalBody>
            </Modal >

            <div className="admincreatearticle">
                <h1>Je modifie un type d'activité</h1>
                <div id="form-main">
                    <div id="form-div">
                        <form className="form" id="form1">
                            <label>Nom du type d'activité : <input className="feedback-input" value={types_activites} type="text" onChange={(e) => setTypes_activites(e.target.value)} /></label>
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


                            <label> Catégorie intermédiaire associée <select onChange={(e) => setBesoins_id(e.target.value)}>
                                {filtres.map(filtre => {
                                    return <option value={filtre.id}> {filtre.besoins}</option>
                                })
                                }
                            </select></label>
                                <input type="button" id="button-blue" className="feedback-input" value="Modifier le type d'activité" onClick={() => handlePost()} />
                                <input type="button" id="button-blue" className="feedback-input" value="Supprimer le type d'activité" onClick={() => handleClick()} />

                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}








