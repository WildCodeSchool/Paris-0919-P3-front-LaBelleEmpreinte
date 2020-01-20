import React, { useState } from 'react'

export default function CreateTypeActivity() {

    const [typeActiv, setTypeActiv] = useState()
    const [picto, setPicto] = useState()
    const newActiv = { typeActiv, picto }


    // a checker le chemin ==> nouveau besoin
    const handlePost = (e) => {
        fetch("admin/articles/create",
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(newActiv),
          })
          .then(res => res.json())
        e.preventDefault()
      }

    return (
        <div className="creation-typeActiv">
            <h3>J'ajoute un type activité</h3>
            <div>
                <label>Nom du type d'activité: <input type="text" onChange={(e) => setTypeActiv(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" value="Créer type activité" onClick={handlePost}/>
        </div>

    )
}