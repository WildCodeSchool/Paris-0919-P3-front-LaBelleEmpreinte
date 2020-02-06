import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/CreateObjets.css";
// on importe le menu modal
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function ModifyObjets(props) {
  // setProps
  const [Elem, setElem] = useState("");
  // récupère une meilleure version de l'objet envoyé
  const [newElem, setNewElem] = useState("");
  //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
  const [justChange, setChange] = useState(true);
  // rend visible/invisible le menu modal
  const [visible, setVisible] = useState(false)
  const [modifVisible, setModifVisible] = useState(false)
  // reçoit la réponse depuis le back
  const [theRes, setRes] = useState()

  const [name, setName] = useState();
  const [picto, setPicto] = useState();
  const [filtres, setFiltres] = useState([]);
  const [id, setId] = useState();
  const [
    categories_intermediaires_id,
    setCategories_intermediaires_id
  ] = useState();


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

  const newCat = { name, picto, categories_intermediaires_id, id };

  const loadStates = () => {
    setName(newElem.name);
    setPicto(newElem.picto);
    setId(newElem.id);
    setCategories_intermediaires_id(newElem.categories_intermediaires_id);
    setChange(false);
  };

  // a checker le chemin ==> nouveau besoin
  const handlePost = () => {
    const url = "http://localhost:4000/admin/objets/modify";
    axios.put(url, newCat)
    .then(res=> setRes(res))
  };

  const deletePost = () => {
    const url = `http://localhost:4000/admin/objets/${id}`;
    axios.delete(url);
  };

  useEffect(() => {
    setElem(props);
    setNewElem(Elem.elem);
    if (newElem && justChange) {
      loadStates();
    }
  });

  useEffect(() => {
    const getFilters = () => {
      axios
        .get("http://localhost:4000/user/objets")
        .then(response => response.data)
        .then(data => {
          if (data[1].results) {
            setFiltres(data[1].results);
          }
        });
    };
    getFilters();
  }, []);
  return (
    <>
      {/* MODAL DE MODIFICATION */}
      < Modal isOpen={modifVisible} toggle={handleClickModif} className="" >
        <ModalHeader toggle={handleClickModif}>L'objet a bien été modifié</ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            <Link to="/admin/afficher/objets"><input type="button" value="OK" /></Link>
          </div>
        </ModalBody>
      </Modal >

      {/* MODAL DE SUPPRESSION */}
      < Modal isOpen={visible} toggle={handleClick} className="" >
        <ModalHeader toggle={handleClick}>Souhaitez vraiment supprimer l'objet?</ModalHeader>
        <ModalBody>
          <div className="menu-modal">
            <Link to="/admin/afficher/objets"><input type="button" value="Confirmer" onClick={() => deletePost()} /></Link>
          </div>
        </ModalBody>
      </Modal >
      <div className="admincreatearticle">
        <h1>je modifie un objet</h1>
        <div id="form-main">
          <div id="form-div">
            <form className="form" id="form1">
              <label>
                Nom de l'objet :{" "}
                <input
                  className="feedback-input"
                  value={name}
                  type="text"
                  onChange={e => setName(e.target.value)}
                />
              </label>
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
              <label>
                {" "}
                Catégorie intermédiaire associée{" "}
                <select
                  onChange={e => setCategories_intermediaires_id(e.target.value)}
                >
                  {filtres.map(filtre => {
                    return <option value={filtre.id}> {filtre.name}</option>;
                  })}
                </select>
              </label>
              <div classname="button">
                <input
                  className="feedback-input"
                  type="button"
                  value="Modifier objet" id="button-blue"
                  onClick={e => handlePost(e)}
                />
                <input
                  className="feedback-input"
                  type="button"
                  value="Supprimer objet" id="button-blue"
                  onClick={() => handleClick()}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
