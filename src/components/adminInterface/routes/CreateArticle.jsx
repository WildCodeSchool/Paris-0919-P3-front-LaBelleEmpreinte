import React, { useState, useEffect } from "react"
import FiltresAdmin from '../../adminInterface/FiltresAdmin'
// import tinyMCE
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios'


export default function CreateArticle(props) {
  // les states
  ///// article /////
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [date, setDate] = useState()
  const [img, setImg] = useState()
  const [readingTime, setTime] = useState()
  const [place, setPlace] = useState()
  const [text, setText] = useState()
  const [isPublished, setPublished] = useState()
  const [titleList, setTitleList] = useState()
  ///// table intermédiaire ////
  const [validateFilters, setValidateFilters] = useState(false)
  const [initiatives, setInitiatives] = useState([])
  const [besoins, setBesoins] = useState([])
  const [types_activites, setTypes_activites] = useState([])
  const [categories_objets, setCategories_objets] = useState([])
  const [categories_intermediaires, setCategories_intermediaires] = useState([])
  const [objets, setObjets] = useState([])


  // MEGA STATE!!
  const articleData = { titre: title, auteur: author, date: date, image: img, minutes_lecture: readingTime, geographie: place, contenu: text, publication: isPublished, listes_initiatives: titleList }


  ////////////// REVOIR AVEC MAXENCE COMMENT ON A ECRIT LA ROUTE POUR GET LES INITIATIVES ASSOCIEES //////////
  // useEffect(() => {
  //   const urlShip = params.location.pathname.substring(11,params.location.pathname.length)
  //   console.log('hello', urlShip)
    
  //   const axiosData = async url => {
  //       const res = await axios.get(url);
  //       setShip(res.data);
  //       setCharacter(res.data.pilots)
  //      };
  //      axiosData(`${urlShip}`);
  //      axios.post('http://localhost:4000/filtre/initiatives/', { objectId: filtre1, besoinId: filtre2 })

       
  //  }, [validateFilters]);

  // Est censé envoyer les données à la BDD
  const handlePost = (e) => {
    fetch("admin/articles/create",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(articleData),
      })
      .then(res => res.json())
    e.preventDefault()
  }

  useEffect(() => {
    const displayInitiatives = () => {
      const loadArticles = async () => {
        const url = 'http://localhost:4000/user/filtres/initiatives'
        const result = await axios.post(url, { type: types_activites, id: 1 })
        setInitiatives(result.data)
        console.log("result de l'axios", result)
        // setLoaded(true)
      }
      
    }
  })

  //// Fonction passée en props pour récupérer depuis FiltresAdmin tous les id de chaque filtre sélectionné (rangé par type de filtre catob/catint/ob/bes/typdact) + signaler que le bouton valider a été actionné pour pouvoir ensuite faire le axios à la liste d'initiatives dans CreateArticle  ////
const getFilters = (a, b, c, d, e) => {
  setCategories_objets(a)
  setCategories_intermediaires(b)
  setObjets(c)
  setBesoins(d)
  setTypes_activites(e)
  setValidateFilters(!validateFilters)
  }

console.log('besoins',besoins)
console.log('types_activites',types_activites)
console.log('categories_objets',categories_objets)
console.log('categories_intermediaires',categories_intermediaires)
console.log('objets',objets)

  console.log(articleData)
  console.log("categories_objets", categories_objets)
  console.log("INITIATIVES", initiatives)
  return (
    <div>
      <h1>Je crée un article</h1>
      <form className="form" id="form1">
        <p>
          <input type="text" className="feedback-input" id="titre" placeholder="titre" onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <input type="text" className="feedback-input" id="auteur" placeholder="Auteur" onChange={(e) => setAuthor(e.target.value)} />
        </p>
        <p>
          <input type="date" className="feedback-input" id="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
        </p>
        <p>
          <input type="file" className="feedback-input" id="image" placeholder="Image" onChange={(e) => setImg(e.target.value)} />
        </p>
        <p>
          <input type="number" className="feedback-input" id="temps_lecture" placeholder="Temps de lecture" onChange={(e) => setTime(e.target.value)} />
        </p>
        <p>
          <input type="text" className="feedback-input" id="lieu" placeholder="Lieu" onChange={(e) => setPlace(e.target.value)} />
        </p>
      </form>
      <Editor
        initialValue="<p></p>"
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

      {/* la liste de bidules à associer au à l'article */}
      <div className="association">
        <h3>J'associe mon article à des objets et des besoins</h3>
        <div className="listeAssociation"></div>
        <label className="listName"> Titre:
          <input type='text' value={titleList} onChange={(e) => setTitleList(e.target.value)} />
        </label>
        <FiltresAdmin filteredItems={getFilters}/>
        <h4>Je peux ajouter initiatives à mon article</h4>
        <div className="initiatives">
        <div> "ihihi" </div>
          {initiatives.name}
          <div> "ihihi" </div>
        </div>
        <div className="publication"> Mon article est publié
          <input type="checkbox" onChange={() => setPublished(!isPublished)}></input>
        </div>
      </div>

      {/* 1) rajouter les filtres et les stocker dans le state de façon à les faire passer de façon intelligible par le bac

rajouter la liste des initiatives liées grâce à un axios qd on valide les filtres au dessus*/}
      <input type="button" value="SEND" id="button-blue" onClick={(e) => handlePost(e)} />
    </div>
  )
}