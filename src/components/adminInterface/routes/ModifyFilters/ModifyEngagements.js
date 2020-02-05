import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

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
  const newEngagements = { engagements, urlPicto, id }

  // rend visible/invisible le menu modal
  const [visible, setVisible] = useState(false)
  const [modifVisible, setModifVisible] = useState(false)
  // reçoit la réponse depuis le back
  const [theRes, setRes] = useState()

  //Pour les modals
  const handleClickModif = () => {
    setModifVisible(!modifVisible)
  }

  const handleClick = () => {
    setVisible(!visible)
  }
  //affiche la confirmation de modification
  useEffect(() => {
    if (theRes) {

      if (theRes.statusText === "OK") {
        setModifVisible(true)
      }
    }
  }, [theRes]
  )

  // Charge les states
  const loadStates = () => {
    setEngagements(newElem.engagements)
    setUrlPicto(newElem.urlPicto)
    setId(newElem.id)
    setChange(false)
  }

  useEffect(() => {
    setElem(props)
    setNewElem(Elem.elem)
    if (newElem && justChange) {
      loadStates()
    }
  })
  const handlePost = () => {
    const url = 'http://localhost:4000/admin/engagements/modify'
    axios.put(url, newEngagements)
    .then(res => setRes(res))
  }

  const deletePost = () => {
    const url = `http://localhost:4000/admin/engagements/${id}`
    axios.delete(url)
  }

  return (
    <>
      {/* MODAL DE MODIFICATION */}
      < Modal isOpen={modifVisible} toggle={handleClickModif} className="" >
        <ModalHeader toggle={handleClickModif}>Le besoin a bien été modifié</ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            <Link to="/admin/afficher/engagements"><input type="button" value="OK" /></Link>
          </div>
        </ModalBody>
      </Modal >

      {/* MODAL DE SUPPRESSION */}
      < Modal isOpen={visible} toggle={handleClick} className="" >
        <ModalHeader toggle={handleClick}>Souhaitez vraiment supprimer le besoin?</ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            <Link to="/admin/afficher/engagements"><input type="button" value="Confirmer" onClick={() => deletePost()} /></Link>
          </div>
        </ModalBody>
      </Modal >
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
                  onChange={(e) => setUrlPicto(e.target.value)} />
              </p>
                <input type="button" id="button-blue" className="feedback-input" value="modifier un engagement" onClick={(e) => handlePost(e)} />
                <input type="button" id="button-blue" className="feedback-input" value="Supprimer engagement" onClick={() => handleClick()} />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}