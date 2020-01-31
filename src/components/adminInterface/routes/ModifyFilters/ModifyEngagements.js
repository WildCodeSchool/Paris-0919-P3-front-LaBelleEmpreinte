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

    const [engagements, setEngagements] = useState()
    const [picto, setPicto] = useState()
    const [id, setId] = useState()
    const newEngagements = { engagements, picto, id}

    const loadStates = () => {
        setEngagements(newElem.engagements)
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
        const url = 'http://localhost:4000/admin/engagements/modify'
           axios.put(url, newEngagements)
           console.log('yo')
        }

        const deletePost = () => {
        const url = `http://localhost:4000/admin/engagements/${id}`
            axios.delete(url)
        }
            console.log ('engagements' , engagements)

    return (
        <div className="creation-besoin">
            <h3>Je modifie un engagement</h3>
            <div>
                <label>Nom du label: <input value={engagements} type="text" onChange={(e) => setEngagements(e.target.value)} /></label>
                <label>Pictogramme: <input type="file" onChange={(e) => setPicto(e.target.value)} /></label>
            </div>
            <input type="button" value="modifier un engagement" onClick={(e) => handlePost(e)}/>
            <Link to="/admin/afficher/engagements">
            <input type="button" value="Supprimer engagement" onClick={() => deletePost()} />
            </Link>
        </div>

    )
}