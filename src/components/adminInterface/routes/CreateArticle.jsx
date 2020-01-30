import React, { useState, useEffect } from "react";
import FiltresAdmin from "../../adminInterface/FiltresAdmin";
import "../CSS/AdminCreateArticle.css";
// import tinyMCE
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

import deleteFilterIcon from "./../../../assets/icons/deleteFilterIcon.png";

export default function CreateArticle(props) {
  // les states
  ///// article /////
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [date, setDate] = useState();
  const [img, setImg] = useState();
  const [readingTime, setTime] = useState();
  const [place, setPlace] = useState();
  const [text, setText] = useState();
  const [isPublished, setPublished] = useState(false);
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

  // MEGA STATE!!
  const articleData = {
    titre: title,
    auteur: author,
    date: date,
    image: img,
    minutes_lecture: readingTime,
    geographie: place,
    contenu: text,
    publication: isPublished,
    listes_initiatives: hasInit
  };


  const articleDataForBack = {
    article: articleData,
    initiatives: uniqueInitiatives,
    besoins: besoins,
    types_activites: types_activites,
    categories_objets: categories_objets,
    categories_intermediaires: categories_intermediaires,
    objets: objets
  };

  // Est censé envoyer les données à la BDD
  const handlePost = async e => {
    e.preventDefault();
    await getUniqInitIds();
    console.log("ce que reçoit le back", articleDataForBack);
    const url = "http://localhost:4000/admin/articles/create";
    axios.post(url, articleDataForBack);
  };

  const getUniqInitIds = () => {
    const initsWithoutName = uniqueInitiatives.map(a => a.id);
    console.log("carabistouilles de la plage", initsWithoutName);
  };

  useEffect(() => {
    setInitiatives([]);
    const displayInitiatives = async filter => {
      const url = "http://localhost:4000/admin/filtre/initiatives";
      filter.map(async item => {
        return await axios
          .post(url, { type: item.type, id: item.id })
          .then(res => setInitiatives(prevState => [...prevState, ...res.data]))
          .then(setHasInit(true));
      });
    };
    displayInitiatives(types_activites);
    displayInitiatives(besoins);
    displayInitiatives(categories_intermediaires);
    displayInitiatives(categories_objets);
    displayInitiatives(objets);
  }, [
    besoins,
    types_activites,
    categories_objets,
    categories_intermediaires,
    objets
  ]);

  useEffect(() => {
    const displayUniqueInitiatives = () => {
      const uniqInit = [];
      for (let i = 0; i < initiatives.length; i++) {
        if (uniqInit.length === 0) {
          uniqInit.push({ name: initiatives[0].name, id: initiatives[0].id });
        } else {
          let initiative = "";
          for (let j = 0; j < uniqInit.length; j++) {
            if (initiatives[i].id === uniqInit[j].id) {
              initiative = null;
            } else if (initiative != null) {
              initiative = { name: initiatives[i].name, id: initiatives[i].id };
            }
          }
          if (initiative) {
            uniqInit.push(initiative);
          }
        }
      }
      setUniqueInitiatives(uniqInit);
      // console.log("uniqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", uniqInit)
    };
    displayUniqueInitiatives();
  }, [initiatives]);

  //// Fonction passée en props pour récupérer depuis FiltresAdmin tous les id de chaque filtre sélectionné (rangé par type de filtre catob/catint/ob/bes/typdact) + signaler que le bouton valider a été actionné pour pouvoir ensuite faire le axios à la liste d'initiatives dans CreateArticle  ////

  const getFilters = (a, b, c, d, e) => {
    setCategories_objets(a);
    setCategories_intermediaires(b);
    setObjets(c);
    setBesoins(d);
    setTypes_activites(e);
    setValidateFilters(!validateFilters);
  };

  // const unBind = (initName) => {
  //   console.log("wazaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", initName)
  //   const remainingInit = [...uniqueInitiatives]  // si on fait const remainingInit = uniqueInitiative le code considère que remainingInit est un lien vers uniqueInitiatives et ça render pas derrière alors qu'avec le ... remainingInit est bien une nouvelle constante
  //   for (let i = 0; i < remainingInit.length; i++) {
  //     if (remainingInit[i].name === initName) {
  //       remainingInit.splice(i)
  //     }
  //   }
  //   setUniqueInitiatives(remainingInit)
  // }

  const unBind = initName => {
    console.log("wazaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", initName);
    const remainingInit = [...uniqueInitiatives].filter(
      elem => elem.name != initName
    );
    setUniqueInitiatives(remainingInit);
  };
  

  return (
    <>
      <div className="admincreatearticle">
        <h1>Je crée un article informatif</h1>
        <div id="form-main">
          <div id="form-div">
            <form className="form" id="form1">
              <p>
                <input
                  type="text"
                  className="feedback-input"
                  id="titre"
                  placeholder="Titre"
                  onChange={e => setTitle(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="text"
                  className="feedback-input"
                  id="auteur"
                  placeholder="Auteur"
                  onChange={e => setAuthor(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="date"
                  className="feedback-input"
                  id="date"
                  placeholder="Date"
                  onChange={e => setDate(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="file"
                  className="feedback-input"
                  id="image"
                  placeholder="Image"
                  onChange={e => setImg(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="number"
                  className="feedback-input"
                  id="temps_lecture"
                  placeholder="Temps de lecture"
                  onChange={e => setTime(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="text"
                  className="feedback-input"
                  id="lieu"
                  placeholder="Lieu"
                  onChange={e => setPlace(e.target.value)}
                />
              </p>

              <Editor
                initialValue="<p></p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount"
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
                }}
                onChange={e => setText(e.target.getContent())}
              />
              <input type="button" value="VALIDER" id="button-blue" />
            </form>
          </div>
        </div>


      {/* la liste de bidules à associer au à l'article */}
      <div className="association">
        <h2>J'associe mon article à des objets et des besoins</h2>
        
        </div>
        




        <div>
        <FiltresAdmin filteredItems={getFilters} />
        <h2>Je peux ajouter initiatives à mon article</h2>
        </div>
        <div className="initiatives">
          {uniqueInitiatives.map(init => (
            <div className="createArticle-initButton">
              <p>{init.name}</p>
              <img
                src={deleteFilterIcon}
                alt="deleteFilterIcon"
                onClick={() => unBind(init.name)}
              ></img>
            </div>
          ))}
        </div>
        <div className="publication">
          {" "}
          Mon article est publié
          <input
            type="checkbox"
            onChange={() => setPublished(!isPublished)}
          ></input>
        </div>
      </div>

      {/* 1) rajouter les filtres et les stocker dans le state de façon à les faire passer de façon intelligible par le bac

rajouter la liste des initiatives liées grâce à un axios qd on valide les filtres au dessus*/}
      <input
        type="button"
        value="SEND"
        id="button-blue"
        onClick={e => handlePost(e)}
      />
    </>
  );
}
