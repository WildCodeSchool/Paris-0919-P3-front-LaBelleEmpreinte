import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../CSS/CreateObjets.css'


// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from "reactstrap";


export default function CreateCategoryIntermediaire() {

    const [name, setName] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState([])
    const [visible, setVisible]=useState(false)
    const [response, setResponse]=useState()
    const [categories_objets_id, setCategories_objets_id] = useState()
    const newCat = { name, picto, categories_objets_id }


    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = 'http://localhost:4000/admin/categories_intermediaires/create'
        axios.post(url, newCat, categories_objets_id)
        .then(res => setResponse(res))
    }

    useEffect(() => {
        const getFilters = async () => {
            await axios
                .get("http://localhost:4000/user/objets")
                .then(response => response.data)
                .then(data => {
                    setFiltres(data[0].results)
                    setCategories_objets_id(data[0].results[0].id)
                })

        }
        getFilters()
    }, [])

    
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
                <ModalHeader toggle={handleClick}>Catégorie créé!</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/categories_intermediaires">
                            <input type="button" value="OK" />
                        </Link>
                    </div>
                </ModalBody>
            </Modal>
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

        </>

    )
}