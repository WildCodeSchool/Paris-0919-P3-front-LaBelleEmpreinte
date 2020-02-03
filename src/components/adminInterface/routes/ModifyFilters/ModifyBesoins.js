import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../CSS/CreateObjets.css'

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
        <div className="admincreatearticle">
            <h1>Je modifie un besoin</h1>
            <div id="form-main">
            <div id="form-div">
            <form className="form" id="form1">
                <label>Nom du besoin: <input className="feedback-input" value={besoins} type="text" onChange={(e) => setBesoins(e.target.value)} /></label>
                <label>Pictogramme: <input className="feedback-input" type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            
            <input className="feedback-input" type="button" id="button-blue" value="Modifier Besoin" onClick={(e) => handlePost(e)} />
            <Link to="/admin/afficher/besoins">
            <input className="feedback-input" id="button-blue" type="button" value="Supprimer Besoin" onClick={(e) => deletePost(e)} />
            </Link>
            </form>
            </div>
            </div>
        </div>

    )
}