import React, { useState } from 'react'

export default function CreateCategory() {

    const [typeCat, setTypeCat] = useState()
    const [picto, setPicto] = useState()
    const newCat = { typeCat, picto }


    // a checker le chemin ==> nouveau besoin
    const handlePost = (e) => {
        fetch("admin/articles/create",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(newCat),
            })
            .then(res => res.json())
        e.preventDefault()
    }

    return (
        <div className="creation-typeCat">
            <h3>J'ajoute une catégorie</h3>
            <div>
                <label>Nom du type d'activité: <input type="text" onChange={(e) => setTypeCat(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" value="Créer catégorie" onClick={handlePost} />
        </div>

    )
}