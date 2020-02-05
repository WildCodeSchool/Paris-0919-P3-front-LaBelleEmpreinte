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
    const [urlPicto, setUrlPicto] = useState()
    const [id, setId] = useState()
    const newEngagements = { engagements, urlPicto, id}

    const loadStates = () => {
        setEngagements(newElem.engagements)
        setUrlPicto(newElem.urlPicto)
        setId(newElem.id)
        setChange(false)
      }

      let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
    } 

      useEffect(() => {
        setElem(props)
        setNewElem(Elem.elem)
        if (newElem &&justChange){
          loadStates()
        }
      })  
      const handlePost = () => {
        const url = `${pathApi}/admin/engagements/modify`
           axios.put(url, newEngagements)
        }

        const deletePost = () => {
        const url = `${pathApi}/admin/engagements/${id}`
            axios.delete(url)
        }

    return (
        <div className="admincreatearticle">
            <h1>Je modifie un engagement</h1>
            <div id="form-main">
                <div id="form-div">
                <form className="form" id="form1"> 
                <label>Nom du label: <input className="feedback-input" value={engagements} type="text" onChange={(e) => setEngagements(e.target.value)} /></label>
                <p>
                Pictogramme
                <input
                  type="text"
                  className="feedback-input"
                  id="image"
                  value={urlPicto}
                  placeholder="Image(url)"
                  onChange={(e) => setUrlPicto(e.target.value)}/>
              </p>              
            <Link to="/admin/afficher/engagements">
            <input type="button" id="button-blue" className="feedback-input" value="modifier un engagement" onClick={(e) => handlePost(e)}/>
            <input type="button" id="button-blue" className="feedback-input" value="Supprimer engagement" onClick={() => deletePost()} />
            </Link>
            </form>
        </div>
        </div>
        </div>

    )
}