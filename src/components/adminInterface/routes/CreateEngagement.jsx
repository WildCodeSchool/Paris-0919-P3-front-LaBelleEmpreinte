import React, { useState } from 'react'
import axios from 'axios'
import '../CSS/CreateObjets.css'

export default function CreateEngagements() {

    const [engagements, setEngagements] = useState()
    const [picto, setPicto] = useState()
    const newEngagements = { engagements, picto }

      const handlePost = () => {
        const url = 'http://localhost:4000/admin/besoins/create'
           axios.post(url, newEngagements)
           console.log('yo')
        }

    return (
        <div className="admincreatearticle">
            <h1>J'ajoute un Engagement</h1>
            <div id="form-main">
                <div id="form-div">
                <label>Nom de l'engagements: <input type="text" className="feedback-input" onChange={(e) => setEngagements(e.target.value)} /></label>
                <label>Pictogramme: <input className="feedback-input" type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            
            <input type="button" id="button-blue" className="feedback-input" value="Créer Besoin" onClick={(e) => handlePost(e)}/>
        </div>
        </div>
        </div>

    )
}