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
  const [uniqueInitiatives, setUniqueInitiatives] = useState([])
  const [besoins, setBesoins] = useState([])
  const [types_activites, setTypes_activites] = useState([])
  const [categories_objets, setCategories_objets] = useState([])
  const [categories_intermediaires, setCategories_intermediaires] = useState([])
  const [objets, setObjets] = useState([])


  // MEGA STATE!!
  const articleData = { titre: title, auteur: author, date: date, image: img, minutes_lecture: readingTime, geographie: place, contenu: text, publication: isPublished, listes_initiatives: titleList }



  // Est censé envoyer les données à la BDD
  const handlePost = (e) => {
    e.preventDefault()
    fetch("admin/articles/create",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(articleData),
      })
      .then(res => res.json())
  }

  useEffect( () => {
      const displayInitiatives =  async (filter) => {
        const url = 'http://localhost:4000/admin/filtre/initiatives'
          filter.map( async (item) => {
            return await axios.post(url, { type: item.type, id: item.id })
            .then(res => setInitiatives((prevState)=> [...prevState, ...res.data] ))
          })      
          
        }
        displayInitiatives(types_activites)
        displayInitiatives(besoins)
        displayInitiatives(categories_intermediaires)
        displayInitiatives(categories_objets)
        displayInitiatives(objets)

  }, [besoins, types_activites, categories_objets, categories_intermediaires,objets])

  useEffect(() => {
    const displayUniqueInitiatives = () => {
      const uniqInit = [...uniqueInitiatives]   
      for(let i = 0; i<initiatives.length; i++){
        if(uniqInit.length === 0){
          uniqInit.push({name : initiatives[0].name, id : initiatives[0].id})
        } else {
          let initiative = ''
          for(let j = 0; j<uniqInit.length; j++){
            if(initiatives[i].id === uniqInit[j].id){
              initiative = null
            } else if (initiative != null){                            
              initiative = ({name : initiatives[i].name, id : initiatives[i].id})
            }
          }
          if(initiative){
            uniqInit.push(initiative)
          }
        }
      }      
      setUniqueInitiatives(uniqInit)
    }
    displayUniqueInitiatives()
  }, [initiatives])


  //// Fonction passée en props pour récupérer depuis FiltresAdmin tous les id de chaque filtre sélectionné (rangé par type de filtre catob/catint/ob/bes/typdact) + signaler que le bouton valider a été actionné pour pouvoir ensuite faire le axios à la liste d'initiatives dans CreateArticle  ////
const getFilters = (a, b, c, d, e) => {
  setCategories_objets(a)
  setCategories_intermediaires(b)
  setObjets(c)
  setBesoins(d)
  setTypes_activites(e)
  setValidateFilters(!validateFilters)
  }

// console.log('besoins',besoins)
// console.log('types_activites',types_activites)
// console.log('categories_objets',categories_objets)
// console.log('categories_intermediaires',categories_intermediaires)
// console.log('objets',objets)

  // console.log(articleData)
  // console.log("categories_objets", categories_objets)

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
          {uniqueInitiatives.map(init =>
            <p>
            {init.name}
            </p>)
            }
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