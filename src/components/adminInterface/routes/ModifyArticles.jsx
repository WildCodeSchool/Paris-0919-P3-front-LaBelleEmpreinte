import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import FiltresAdmin from "../../adminInterface/FiltresAdmin";

// on importe le CSS
import "../CSS/AdminCreateArticle.css";
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

// on importe TinyMCE pour le text
import { Editor } from '@tinymce/tinymce-react';


import deleteFilterIcon from "./../../../assets/icons/deleteFilterIcon.png";
import addFilterIcon from "./../../../assets/icons/addFilterIcon.png";


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
  const [img2, setImg2] = useState();
  const [readingTime, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [text, setText] = useState('')
  const [isPublished, setPublished] = useState('')
   ///// table intermédiaire ////
   const [validateFilters, setValidateFilters] = useState(false);
   const [initiatives, setInitiatives] = useState([]);
   const [uniqueInitiatives, setUniqueInitiatives] = useState([]);
   const [besoins, setBesoins] = useState([]);
   const [types_activites, setTypes_activites] = useState([]);
   const [categories_objets, setCategories_objets] = useState([]);
   const [categories_intermediaires, setCategories_intermediaires] = useState(
     []
   );

   const [objets, setObjets] = useState([]);
  const [hasInit, setHasInit] = useState(false);
  const [removedInitiative, setRemovedInitiative] = useState([]);
  // rend visible/invisible le menu modal
  const [visible, setVisible] = useState(false)
  const [modifVisible, setModifVisible] = useState(false)
  // reçoit la réponse depuis le back
  const [theRes, setRes] = useState()
  // vérifie que les states ont été loadés
  const [isLoaded, setLoad] = useState(false)


  const loadStates = () => {
    setTitle(newElem.titre)
    setAuthor(newElem.auteur)
    setText(newElem.contenu)
    setImg(newElem.image)
    setDate(newElem.date)
    setTime(newElem.minutes_lecture)
    setPlace(newElem.geographie)
    setPublished(newElem.publication)
    setImg2(newElem.image2)
    setChange(false)
    setLoad(true)
  }

  const handleClickModif = () => {
    setModifVisible(!modifVisible)
  }

  const handleClick = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    if (date){
      setDate(date.slice(0,10))
    }
  }, [date])

  useEffect(() => {
    setElem(props)
    setNewElem(Elem.elem)
    if (newElem && justChange) {
      loadStates()
    }
  })

  
  // LES FONCTIONS QUI GERENT LES MENUS MODAL
  const handleModification = () => {
    axios.put(`http://localhost:4000/admin/articles_maj/${newElem.id}`, { titre: title, date: date, auteur: author, contenu: text, publication: isPublished, image: img, image2: img2, minutes_lecture: readingTime, geographie: place })
    .then(res => setRes(res))
    // .then(error())
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
    }
  }
  )

   //// Fonction passée en props pour récupérer depuis FiltresAdmin tous les id de chaque filtre sélectionné (rangé par type de filtre catob/catint/ob/bes/typdact) + signaler que le bouton valider a été actionné pour pouvoir ensuite faire le axios à la liste d'initiatives dans CreateArticle  ////

   const getFilters = (a, b, c, d, e) => {
    setCategories_objets(a);
    setCategories_intermediaires(b);
    setObjets(c);
    setBesoins(d);
    setTypes_activites(e);
    setValidateFilters(!validateFilters);
  };

  const unBind = init => {
    const removedInit = [...removedInitiative, init];
    const remainingInit = [...uniqueInitiatives].filter(
      elem => elem.name != init.name
    );
    setUniqueInitiatives(remainingInit);
    setRemovedInitiative(removedInit);
  };

  const reBind = init => {
    const addInit = [...uniqueInitiatives, init];
    const removedInit = [...removedInitiative].filter(
      elem => elem.name != init.name
    );
    setUniqueInitiatives(addInit);
    setRemovedInitiative(removedInit);
  };

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

    <div className="admincreatearticle">
      <h1>Je modifie un article</h1>
      <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
            <p>
              <input type="text" value={title} className="feedback-input" id="titre" placeholder="titre" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
              <input type="text" value={author} className="feedback-input" id="auteur" placeholder="Auteur" onChange={(e) => setAuthor(e.target.value)} />
            </p>
            <p>
              <input type="text" value={date} className="feedback-input" id="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
            </p>
            <p>
              <input type="text" value={img} className="feedback-input" id="image" placeholder="Image" onChange={(e) => setImg(e.target.value)} />
            </p>
            <p>
              <input type="text" value={img2} className="feedback-input" id="image" placeholder="Image2" onChange={e => setImg2(e.target.value)} />
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
        </div>
    </div>

          {/* pour tester la fenêtre cancel */}
          {/* <button onClick={handleCancel}>Handle Cancel</button> */}
          <div className="association">
          <h2>J'associe mon article à des objets et des besoins</h2>
        </div>

        <div>
          <FiltresAdmin filteredItems={getFilters} />
          <h2>Je peux ajouter des initiatives à mon article</h2>
        </div>
        <div className="createArticle-initiatives">
          {uniqueInitiatives.map(init => (
            <div className="createArticle-initButtonOn">
              <p>{init.name}</p>
              <img
                src={deleteFilterIcon}
                alt="deleteFilterIcon"
                onClick={() => unBind(init)}
              ></img>
            </div>
          ))}
          {removedInitiative.map(init => (
            <div className="createArticle-initButtonOff">
              <p>{init.name}</p>
              <img
                src={addFilterIcon}
                alt="addFilterIcon"
                onClick={() => reBind(init)}
              ></img>
            </div>
          ))}
        </div>
        <div id="form-main">
          <div id="form-div">
            <form className="form" id="form1">
            <div className="publication"> Mon article est publié
            {isLoaded?
            isPublished? <input value={true} defaultChecked={true} type="checkbox" onChange={() => setPublished(!isPublished)}></input> : <input value={isPublished} defaultChecked={false} type="checkbox" onChange={() => setPublished(!isPublished)}></input> : null}
            </div>
            <input type="button" value="MODIFIER" id="button-blue" onClick={handleModification} />
              {/* <Link to="/admin/afficher/articles"> */}
            <input type="button" value="SUPPRIMER" id="button-blue" onClick={() => handleClick()} />
          </form>
        </div>
      </div>
    </div>
      {/* 1) rajouter les filtres et les stocker dans le state de façon à les faire passer de façon intelligible par le bac
rajouter la liste des initiatives liées grâce à un axios qd on valide les filtres au dessus*/}
  </div>
)
}