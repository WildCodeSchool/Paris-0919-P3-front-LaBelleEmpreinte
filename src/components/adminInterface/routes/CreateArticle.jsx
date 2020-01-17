import React, { useState, useEffect } from "react"

// import tinyMCE
import { Editor } from '@tinymce/tinymce-react';


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
  const [initiatives, setInitiatives] = useState([])
  const [besoins, setBesoins] = useState([])
  const [types_activites, setTypes_activites] = useState([])
  const [categories_objets, setCategories_objets] = useState([])
  const [objets, setObjets] = useState([])


  // MEGA STATE!!
  const articleData = { titre: title, auteur: author, date: date, image: img, minutes_lecture: readingTime, geographie: place, contenu: text, publication: isPublished, listes_initiatives: titleList }

  useEffect(() => {
    console.log(text)
  })

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
  console.log(articleData)
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
        <h4>Je peux ajouter initiatives à mon article</h4>
        <div className="initiatives"></div>
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