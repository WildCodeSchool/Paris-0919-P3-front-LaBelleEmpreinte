import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/CreateObjets.css";

export default function ModifyObjets(props) {
  // setProps
  const [Elem, setElem] = useState("");
  // récupère une meilleure version de l'objet envoyé
  const [newElem, setNewElem] = useState("");
  //state pour empecher la modification par loadstates (FAUT PAS TOUCHER #ZAMBLA)
  const [justChange, setChange] = useState(true);

  const [name, setName] = useState();
  const [picto, setPicto] = useState();
  const [filtres, setFiltres] = useState([]);
  const [id, setId] = useState();
  const [
    categories_intermediaires_id,
    setCategories_intermediaires_id
  ] = useState();

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
    const url = `${pathApi}/admin/objets/modify`;
    axios.put(url, newCat);
  };

  const deletePost = () => {
    const url = `${pathApi}/admin/objets/${id}`;
    axios.delete(url);
  };

  let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
    } 
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
        .get(`${pathApi}/user/objets`)
        .then(response => response.data)
        .then(data => {
          setFiltres(data[1].results);
        });
    };
    getFilters();
  }, []);
  return (
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
              <Link to="/admin/afficher/objets">
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
                  onClick={() => deletePost()}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
