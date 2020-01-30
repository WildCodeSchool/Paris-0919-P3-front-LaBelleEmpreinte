import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

// on importe TinyMCE pour le text
import { Editor } from '@tinymce/tinymce-react';


export default function ModifyArticles(props) {

  // setProps
  const [Elem, setElem] = useState('')
  // récupère une meilleure version de l'objet envoyé
  const [newElem, setNewElem] = useState('')
  //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
  const [justChange, setChange] = useState(true)

  // les inputs
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState()
  const [img, setImg] = useState('')
  const [readingTime, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [text, setText] = useState('')
  const [isPublished, setPublished] = useState('')
  // rend visible/invisible le menu modal
  const [visible, setVisible] = useState(false)
  const [modifVisible, setModifVisible] = useState(false)
  // reçoit la réponse depuis le back
  const [theRes, setRes] = useState()

  const loadStates = () => {
    setTitle(newElem.titre)
    setAuthor(newElem.auteur)
    setText(newElem.contenu)
    setImg(newElem.image)
    setDate(newElem.date)
    setTime(newElem.minutes_lecture)
    setPlace(newElem.geographie)
    setPublished(newElem.publication)
    setChange(false)
  }

  const handleClickModif = () => {
    setModifVisible(!modifVisible)
  }
  
  const handleClick = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    setElem(props)
    setNewElem(Elem.elem)
    if (newElem && justChange) {
      loadStates()
    }
  })


  const handleModification = () => {
    axios.put(`http://localhost:4000/admin/articles_maj/${newElem.id}`, { titre: title, date: date, auteur: author, contenu: text, publication: isPublished, image: img, minutes_lecture: readingTime, geographie: place })
      .then(res => setRes(res))
    if (theRes) {
      console.log("réponse du back", theRes);

    }
  }

  const handleSupress = () => {
    axios.delete(`http://localhost:4000/admin/articles_maj/${newElem.id}`)
  }

  //affiche la confirmation de modification
  useEffect(() => {
    if (theRes) {
      if (theRes.statusText === "OK") {
        setModifVisible(true)
      }
      else if (theRes.status === 500) {
        console.log('ouch')
      }
    }
  })

  return (
    <div>

      {/* MODAL DE MODIFICATION */}
      < Modal isOpen={modifVisible} toggle={handleClickModif} className="" >
        <ModalHeader toggle={handleClickModif}>L'article a bien été modifié</ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            <Link to="/admin/afficher/articles"><input type="button" value="OK" /></Link>
          </div>
        </ModalBody>
      </Modal >

      {/* MODAL DE SUPPRESSION */}
      < Modal isOpen={visible} toggle={handleClick} className="" >
        <ModalHeader toggle={handleClick}>Souhaitez vraiment supprimer l'article?</ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            <Link to="/admin/afficher/articles"><input type="button" value="Confirmer" onClick={() => handleSupress()} /></Link>
          </div>
        </ModalBody>
      </Modal >
      <h1>Je modifie un article</h1>
      <form className="form" id="form1">
        <p>
          <input type="text" value={title} className="feedback-input" id="titre" placeholder="titre" onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <input type="text" value={author} className="feedback-input" id="auteur" placeholder="Auteur" onChange={(e) => setAuthor(e.target.value)} />
        </p>
        <p>
          <input type="date" value={date} className="feedback-input" id="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
        </p>
        <p>
          <input type="text" value={img} className="feedback-input" id="image" placeholder="Image" onChange={(e) => setImg(e.target.value)} />
        </p>
        <p>
          <input type="number" value={readingTime} className="feedback-input" id="temps_lecture" placeholder="Temps de lecture" onChange={(e) => setTime(e.target.value)} />
        </p>
        <p>
          <input type="text" value={place} className="feedback-input" id="lieu" placeholder="Lieu" onChange={(e) => setPlace(e.target.value)} />
        </p>
      </form>
      <Editor
        initialValue={text}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
        }}
        onChange={(e) => setText(e.target.getContent())}
      />

      <div className="publication"> Mon article est publié
          <input value={isPublished} defaultChecked={isPublished} type="checkbox" onChange={() => setPublished(!isPublished)}></input>
      </div>

      {/* 1) rajouter les filtres et les stocker dans le state de façon à les faire passer de façon intelligible par le bac
rajouter la liste des initiatives liées grâce à un axios qd on valide les filtres au dessus*/}
      <input type="button" value="MODIFIER" id="button-blue" onClick={handleModification} />
      {/* <Link to="/admin/afficher/articles"> */}
      <input type="button" value="SUPPRIMER" onClick={() => handleClick()} />
    </div>

  )
}