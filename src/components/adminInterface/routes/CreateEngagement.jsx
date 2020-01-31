import React, { useState } from 'react'
import axios from 'axios'

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
        <div className="creation-besoin">
            <h3>J'ajoute un Engagement</h3>
            <div>
                <label>Nom de l'engagements: <input type="text" onChange={(e) => setEngagements(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" value="Créer Besoin" onClick={(e) => handlePost(e)}/>
        </div>

    )
}