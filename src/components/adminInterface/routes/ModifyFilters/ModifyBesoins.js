import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function ModifyBesoin(props) {

    // setProps
    const [Elem, setElem] = useState('')
    // récupère une meilleure version de l'objet envoyé
    const [newElem, setNewElem] = useState('')
    //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
    const [justChange, setChange] = useState(true)

    const [besoins, setBesoins] = useState()
    const [picto, setPicto] = useState()
    const [id, setId] = useState ()
    const newBesoin = { besoins, picto, id}

    const loadStates = () => {
        setBesoins(newElem.besoins)
        setPicto(newElem.picto)
        setId(newElem.id)
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
        const url = 'http://localhost:4000/admin/besoins/modify'
        axios.put(url, newBesoin)
    }

    const deletePost = () => {
        const url = `http://localhost:4000/admin/besoins/${id}`
        axios.delete(url)
    }

    console.log('hello', Elem)
    console.log("truc", newElem)
    console.log('besoins', besoins)

    return (
        <div className="creation-besoin">
            <h3>Je modifie un besoin</h3>
            <div>
                <label>Nom du besoin: <input value={besoins} type="text" onChange={(e) => setBesoins(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" value="Modifier Besoin" onClick={(e) => handlePost(e)} />
            <Link to="/admin/afficher/besoins">
            <input type="button" value="Supprimer Besoin" onClick={(e) => deletePost(e)} />
            </Link>

        </div>

    )
}