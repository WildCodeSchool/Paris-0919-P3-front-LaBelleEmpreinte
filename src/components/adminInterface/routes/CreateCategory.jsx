import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import '../CSS/CreateObjets.css'
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from "reactstrap";

export default function CreateCategory() {

    const [categorie, setCategorie] = useState()
    const [picto, setPicto] = useState()
    const [visible, setVisible]=useState(false)
    const [response, setResponse]=useState()
    const newCat = { categorie, picto }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/categories_objets/create'
        axios.post(url, newCat)
        .then(res => setResponse(res))
    }

    const handleClick = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        if (response){
            handleClick()
        }
    }, [response])

    return (
        <>
            <Modal isOpen={visible} toggle={handleClick} className="">
                <ModalHeader toggle={handleClick}>Catégorie d'objet créé!</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/categories_objets">
                            <input type="button" value="OK" />
                        </Link>
                    </div>
                </ModalBody>
            </Modal>
            <div className="admincreatearticle">
                <h1>J'ajoute une catégorie d'objet</h1>
                <div id="form-main">
                    <div id="form-div">
                        <form className="form" id="form1">
                            <label>Nom de la catégorie d'objet: <input className="feedback-input" type="text" onChange={(e) => setCategorie(e.target.value)} /></label>
                            <p>
                                Pictogramme
                <input
                                    type="text"
                                    className="feedback-input"
                                    id="image"
                                    placeholder="Image(url)"
                                    onChange={(e) => setPicto(e.target.value)} />
                            </p>
                            <input type="button" id="button-blue" className="feedback-input" value="Créer une catégorie d'objet" onClick={handlePost} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}