import React, { useState } from 'react'
import axios from 'axios'
import '../CSS/CreateObjets.css'

export default function CreateEngagements() {

    const [engagements, setEngagements] = useState()
    const [urlPicto, setUrlPicto] = useState()
    const newEngagements = { engagements, urlPicto }

      const handlePost = () => {
        const url = `${pathApi}/admin/engagements/create`
           axios.post(url, newEngagements)
        }

        let pathApi = process.env.REACT_APP_PATH_API_DEV
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD
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
                  onChange={(e) => setUrlPicto(e.target.value)}/>
              </p>            
            <input type="button" id="button-blue" className="feedback-input" value="Créer un engagement" onClick={(e) => handlePost(e)}/>
        </div>
        </div>
        </div>

    )
}