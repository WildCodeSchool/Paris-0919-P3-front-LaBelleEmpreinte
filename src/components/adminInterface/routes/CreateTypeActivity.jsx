import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../CSS/CreateObjets.css'

// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from "reactstrap";


export default function CreateTypeActivity() {

    const [types_activites, setTypes_activites] = useState()
    const [picto, setPicto] = useState()
    const [filtres, setFiltres] = useState([])
    const [besoins_id, setBesoins_id] = useState()
    const [visible, setVisible] = useState(false)
    const [response, setResponse] = useState()
    const newCat = { types_activites, picto, besoins_id }

 let pathApi = process.env.REACT_APP_PATH_API_DEV
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD
        }
  
    // a checker le chemin ==> nouveau besoin
    const handlePost = () => {
        const url = `${pathApi}/admin/types_activites/create`
           axios.post(url, newCat)
                .then(res => setResponse(res))

        }

       

        useEffect(() => {
            const getFilters = () => {
                axios
                .get(`${pathApi}/user/besoins`)
                .then(response => response.data)
                .then(data => { 
                    if (data[0]) {

                        setFiltres(data[0].results);
                        setBesoins_id(data[0].results[0].id)

                    }

                });

        }
        getFilters()
    }, [])
        

    //POUR FAIRE APPARAITRE LE MENU MODAL
    const handleClick = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        if (response) {
            handleClick()
        }
    }, [response])

    return (
        <>
            <Modal isOpen={visible} toggle={handleClick} className="">
                <ModalHeader toggle={handleClick}>Type d'activité créé!</ModalHeader>
                <ModalBody>
                    <div className="menu-modal">
                        <Link to="/admin/afficher/types_activites">
                            <input type="button" value="OK" />
                        </Link>
                    </div>
                </ModalBody>
            </Modal>
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
                                    onChange={(e) => setPicto(e.target.value)} />
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
        </>


    )
}
