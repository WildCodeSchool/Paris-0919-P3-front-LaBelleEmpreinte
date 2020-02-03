import React, { useState } from 'react'
import axios from 'axios'

export default function CreateBesoin() {

    const [besoins, setBesoins] = useState()
    const [picto, setPicto] = useState()
    const newBesoin = { besoins, picto }

      const handlePost = () => {
        const url = 'http://localhost:4000/admin/besoins/create'
           axios.post(url, newBesoin)
           console.log('yo')
        }

    return (
        <div className="admincreatearticle">
            <h1>J'ajoute un besoin</h1>
            <div id="form-main">
                <div id="form-div">
            <div>
                <label>Nom du label: <input className="feedback-input" type="text" onChange={(e) => setBesoins(e.target.value)} /></label>
                <label>Pictogramme: <input className="feedback-input" type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" className="feedback-input" id="button-blue" value="Créer Besoin" onClick={(e) => handlePost(e)}/>
        </div>
        </div>
        </div>
    )
}