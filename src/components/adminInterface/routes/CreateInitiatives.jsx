import React, { useState, useEffect } from "react"
// import tinyMCE
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function CreateInitiatives() {

    // les states pour le back
    const [name, setName] = useState()
    const [url, setUrl] = useState()
    const [adress, setAdress] = useState()
    const [adressTwo, setAdressTwo] = useState()
    const [adressThree, setAdressThree] = useState()
    const [logo, setLogo] = useState()
    const [phoneOne, setPhoneOne] = useState()
    const [phoneTwo, setPhoneTwo] = useState()
    const [phoneThree, setPhoneThree] = useState()
    const [description, setDescription] = useState()
    const [contactFirstNameOne, setContactFirstNameOne] = useState()
    const [contactNameOne, setcontactNameOne] = useState()
    const [contactMailOne, setContactMailOne] = useState()
    const [contactPhoneOne, setContactPhoneOne] = useState()
    const [contactFirstNameTwo, setContactFirstNameTwo] = useState()
    const [contactNameTwo, setcontactNameTwo] = useState()
    const [contactMailTwo, setContactMailTwo] = useState()
    const [contactPhoneTwo, setContactPhoneTwo] = useState()
    const [lastExchange, setLastExchange] = useState()
    const [dateEvent, setDateEvent] = useState()
    const [isLabelised, setIsLabelised] = useState(false)

    // est visible
    const [isVisible, setVisible] = useState(false)

    // reçoit la réponse
    const [response, setRes] = useState()

    // tables intermédiaires
    const [engagements, setEngagements] = useState([]);
    const [besoins, setBesoins] = useState([]);
    const [objets, setObjets] = useState([]);
    const [types_activites, setTypes_activites] = useState([]);
    const [categories_objets, setCategories_objets] = useState([]);
    const [categories_intermediaires, setCategories_intermediaires] = useState([]);

    //MEGA STATE POUR L'ENVOI
    const [initiatives, setInitiatives] = useState({
        name: name,
        url: url,
        adresse1: adress,
        adresse2: adressTwo,
        adresse3: adressThree,
        logo: logo,
        telephone1: phoneOne,
        telephone2: phoneTwo,
        telephone3: phoneThree,
        description: description,
        contact_prenom_1: contactFirstNameOne,
        contact_nom_1: contactNameOne,
        contact_mail_1: contactMailOne,
        contact_telephone_1: contactPhoneOne,
        contact_prenom_2: contactFirstNameTwo,
        contact_nom_2: contactNameTwo,
        contact_mail_2: contactMailTwo,
        contact_telephone_2: contactPhoneTwo,
        date_dernier_echange: lastExchange,
        objets_labellises: isLabelised,
        date_evenement: dateEvent
    })

    const articleDataForBack = {
        engagements: engagements,
        initiatives: initiatives,
        besoins: besoins,
        types_activites: types_activites,
        categories_objets: categories_objets,
        categories_intermediaires: categories_intermediaires,
        objets: objets
    };


    // soumet les données à la base de donnée
    const handleSubmit = () => {
        axios.post(`http://localhost:4000/admin/initiatives/create`, articleDataForBack)
            .then(res => setRes(res))
    }

    // fait apparaitre ou disparaitre le modal de confirmation d'ajout
    const handleClickModif = () => {
        setVisible(!isVisible)
    }


    useEffect(() => {
        if (response) {
            handleClickModif()
        }
    }, [response])

    return (
        <div className="admincreatearticle">
            <h1>Je créé une initiative</h1>
            <div id="form-main">
                <div id="form-div">
                    <form className="form" id="form1">
                        <input type="text" placeholder="nom" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                        <input type="text" placeholder="adresse1" value={adress} onChange={(e) => setAdress(e.target.value)} />
                        <input type="text" placeholder="adresse2" value={adressTwo} onChange={(e) => setAdressTwo(e.target.value)} />
                        <input type="text" placeholder="adresse3" value={adressThree} onChange={(e) => setAdressThree(e.target.value)} />
                        <input type="text" placeholder="logo" value={logo} onChange={(e) => setLogo(e.target.value)} />
                        <input type="text" placeholder="telephone1" value={phoneOne} onChange={(e) => setPhoneOne(e.target.value)} />
                        <input type="text" placeholder="telephone2" value={phoneTwo} onChange={(e) => setPhoneTwo(e.target.value)} />
                        <input type="text" placeholder="telephone3" value={phoneThree} onChange={(e) => setPhoneThree(e.target.value)} />
                        {/* DESCRIPTION */}
                        <label>Description:
                        <Editor
                                initialValue={description}
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        "advlist autolink lists link image charmap print preview anchor",
                                        "searchreplace visualblocks code fullscreen",
                                        "insertdatetime media table paste code help wordcount"
                                    ],
                                    toolbar:
                                        "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
                                }}
                                onChange={e => setDescription(e.target.getContent())}
                            /></label>
                        <input type="text" placeholder="Prénom du contact 1" value={contactFirstNameOne} onChange={(e) => setContactFirstNameOne(e.target.value)} />
                        <input type="text" placeholder="Nom du contact 1" value={contactNameOne} onChange={(e) => setcontactNameOne(e.target.value)} />
                        <input type="text" placeholder="Mail du contact 1" value={contactMailOne} onChange={(e) => setContactMailOne(e.target.value)} />
                        <input type="text" placeholder="Téléphone du contact 1" value={contactPhoneOne} onChange={(e) => setContactPhoneOne(e.target.value)} />
                        <input type="text" placeholder="Prénom du contact 2" value={contactFirstNameTwo} onChange={(e) => setContactFirstNameTwo(e.target.value)} />
                        <input type="text" placeholder="Nom du contact 2" value={contactNameTwo} onChange={(e) => setcontactNameTwo(e.target.value)} />
                        <input type="text" placeholder="Mail du contact 2" value={contactMailTwo} onChange={(e) => setContactMailTwo(e.target.value)} />
                        <input type="text" placeholder="Téléphone du contact 2" value={contactPhoneTwo} onChange={(e) => setContactPhoneTwo(e.target.value)} />
                        <input type="date" placeholder="Date du dernier échange" value={lastExchange} onChange={(e) => setLastExchange(e.target.value)} />
                        <input type="date" placeholder="Date des événements" value={dateEvent} onChange={(e) => setDateEvent(e.target.value)} />
                        <label>Est labelisé
                        <input type="checkbox" placeholder="Est labélisé" value={isLabelised} onChange={(e) => setIsLabelised(!isLabelised)} />
                        </label>
                    </form>
                    <input
                        type="button"
                        value="ENREGISTRER"
                        id="button-blue"
                        onClick={() => handleSubmit()}
                    />
                </div>
                {/* MODAL DE MODIFICATION */}
                < Modal isOpen={isVisible} toggle={handleClickModif} className="" >
                    <ModalHeader toggle={handleClickModif}>L'article a bien été modifié</ModalHeader>
                    <ModalBody>
                        <div className="menu-modal">
                            <input type="button" value="OK" />
                        </div>
                    </ModalBody>
                </Modal >
            </div>
        </div>
    )
}