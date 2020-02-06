import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../CSS/CreateObjets.css'
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function ModifyBesoin(props) {

  // setProps
  const [Elem, setElem] = useState('')
  // récupère une meilleure version de l'objet envoyé
  const [newElem, setNewElem] = useState('')
  //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
  const [justChange, setChange] = useState(true)

  const [besoins, setBesoins] = useState()
  const [picto, setPicto] = useState()
  const [id, setId] = useState()
  const newBesoin = { besoins, picto, id }

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
  }
  )

  ///Pour changer les states
  const loadStates = () => {
    setBesoins(newElem.besoins)
    setPicto(newElem.picto)
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
    const url = 'http://localhost:4000/admin/besoins/modify'
    axios.put(url, newBesoin)
      .then(res => setRes(res))
  }

  const deletePost = () => {
    const url = `http://localhost:4000/admin/besoins/${id}`
    axios.delete(url)
  }
  return (
    <>
      {/* MODAL DE MODIFICATION */}
      < Modal isOpen={modifVisible} toggle={handleClickModif} className="" >
        <ModalHeader toggle={handleClickModif}>Le besoin a bien été modifié</ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            <Link to="/admin/afficher/besoins"><input type="button" value="OK" /></Link>
          </div>
        </ModalBody>
      </Modal >

      {/* MODAL DE SUPPRESSION */}
      < Modal isOpen={visible} toggle={handleClick} className="" >
        <ModalHeader toggle={handleClick}>Souhaitez vraiment supprimer le besoin?</ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            <Link to="/admin/afficher/besoins"><input type="button" value="Confirmer" onClick={() => deletePost()} /></Link>
          </div>
        </ModalBody>
      </Modal >
      <div className="admincreatearticle">
        <h1>Je modifie un besoin</h1>
        <div id="form-main">
          <div id="form-div">
            <form className="form" id="form1">
              <label>Nom du besoin: <input className="feedback-input" value={besoins} type="text" onChange={(e) => setBesoins(e.target.value)} /></label>
              <p>
                Pictogramme
                <input
                  type="text"
                  className="feedback-input"
                  id="image"
                  value={picto}
                  placeholder="Image(url)"
                  onChange={(e) => setPicto(e.target.value)} />
              </p>
              <input className="feedback-input" type="button" id="button-blue" value="Modifier Besoin" onClick={(e) => handlePost(e)} />
              <input className="feedback-input" id="button-blue" type="button" value="Supprimer Besoin" onClick={(e) => handleClick()} />


            </form>
          </div>
        </div>
      </div>
    </>
  )
}