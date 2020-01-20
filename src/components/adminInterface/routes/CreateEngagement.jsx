import React, {useState} from 'react'

export default function CreateEngagement() {
    const [engagements, setEngagements] = useState()
    const [picto, setPicto] = useState()
    const newEngage = { engagements, picto }


    // a checker le chemin ==> nouveau besoin
    const handlePost = (e) => {
        fetch("admin/articles/create",
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(newEngage),
          })
          .then(res => res.json())
        e.preventDefault()
      }

    return (
        <div className="creation-typeActiv">
            <h3>J'ajoute un engagement</h3>
            <div>
                <label>Nom du type d'activité: <input type="text" onChange={(e) => setEngagements(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" value="Créer type activité" onClick={handlePost}/>
        </div>

    )
}