import React, { useState } from 'react'

export default function CreateBesoin() {

    const [labelName, setLabelName] = useState()
    const [picto, setPicto] = useState()
    const newBesoin = { labelName, picto }


    // a checker le chemin ==> nouveau besoin
    const handlePost = (e) => {
        fetch("admin/articles/create",
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(newBesoin),
          })
          .then(res => res.json())
        e.preventDefault()
      }

    return (
        <div className="creation-besoin">
            <h3>J'ajoute un besoin</h3>
            <div>
                <label>Nom du label: <input type="text" onChange={(e) => setLabelName(e.target.value)} /></label>
                <label>Pictogramme: <input type="type" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" value="Créer Besoin" onClick={handlePost}/>
        </div>

    )
}