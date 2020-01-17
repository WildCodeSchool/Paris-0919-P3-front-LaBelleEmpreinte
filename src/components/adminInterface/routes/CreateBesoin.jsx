import React, {useState} from 'react'

export default function CreateBesoin() {

    const [labelName, setLabelName]=useState()
    const [picto, setPicto]=useState()
    const newBesoin = {labelName, picto}

    return (
        <div className="creation-besoin">
            <h3>J'ajoute un besoin</h3>
            <div>
                <label>Nom du label: <input type="text" onChange={(e) => setLabelName(e.target.value)}/></label>
                <label>Pictogramme: <input type="url" onChange={(e) => setPicto(e.target.value)}/></label>
            </div>
            <input type="button" onClick=""/>
            <h3>J'ajoute un type d'activité: </h3>

        </div>

    )
}