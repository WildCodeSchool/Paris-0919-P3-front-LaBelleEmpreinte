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
                <label>Nom de l'engagement: <input type="text" className="feedback-input" onChange={(e) => setEngagements(e.target.value)} /></label>
                <p>
                Pictogramme
                <input
                  type="text"
                  className="feedback-input"
                  id="image"
                  placeholder="Image(url)"
                  onChange={(e) => setPicto(e.target.value)}/>
              </p>            
            <input type="button" id="button-blue" className="feedback-input" value="Créer un engagement" onClick={(e) => handlePost(e)}/>
        </div>
        </div>
        </div>

    )
}