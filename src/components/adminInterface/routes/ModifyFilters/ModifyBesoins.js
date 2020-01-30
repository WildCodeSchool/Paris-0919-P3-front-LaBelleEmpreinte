import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ModifyBesoin(props) {

    // setProps
    const [Elem, setElem] = useState('')
    // récupère une meilleure version de l'objet envoyé
    const [newElem, setNewElem] = useState('')
    //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
    const [justChange, setChange] = useState(true)

    const [besoins, setBesoins] = useState(props.besoins)
    const [picto, setPicto] = useState()
    const newBesoin = { besoins, picto }

    const loadStates = () => {
        setBesoins(newElem.besoins)
        setPicto(newElem.picto)
        
        setChange(false)
      }

    useEffect(() => {
        setElem(props)
        setNewElem(Elem.elem)
        if (newElem &&justChange){
          loadStates()
        }
      })

    const handlePost = () => {
        const url = 'http://localhost:4000/admin/besoins/create'
        axios.post(url, newBesoin)
        console.log('yo')
    }

    console.log('hello', Elem)
    console.log("truc", newElem)
    console.log('besoins', besoins)

    return (
        <div className="creation-besoin">
            <h3>Je modifie un besoin</h3>
            <div>
                <label>Nom du label: <input value={besoins} type="text" onChange={(e) => setBesoins(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" value="Créer Besoin" onClick={(e) => handlePost(e)} />
        </div>

    )
}