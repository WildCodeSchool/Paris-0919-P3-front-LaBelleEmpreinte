import React, { useState } from 'react'
import axios from 'axios'

export default function CreateBesoin() {

    const [besoins, setBesoins] = useState()
    const [picto, setPicto] = useState()
    const newBesoin = { besoins, picto }

    let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
    }

      const handlePost = () => {
        const url = `${pathApi}/admin/besoins/create`
           axios.post(url, newBesoin)
        }

    return (
        <div className="admincreatearticle">
            <h1>J'ajoute un besoin</h1>
            <div id="form-main">
                <div id="form-div">
            <div>
                <label>Nom du label: <input className="feedback-input" type="text" onChange={(e) => setBesoins(e.target.value)} /></label>
                <p>
                Pictogramme
                <input
                  type="text"
                  className="feedback-input"
                  id="image"
                  placeholder="Image(url)"
                  onChange={(e) => setPicto(e.target.value)}/>
              </p>
            </div>
            <input type="button" className="feedback-input" id="button-blue" value="Créer un besoin" onClick={(e) => handlePost(e)}/>
        </div>
        </div>
        </div>
    )
}