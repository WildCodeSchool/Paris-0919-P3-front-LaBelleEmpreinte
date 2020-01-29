import React, { useState, useEffect } from 'react'

// on importe TinyMCE pour le text
import { Editor } from '@tinymce/tinymce-react';


export default function ModifyArticles(props) {

  // setProps
  const [Elem, setElem] = useState('')
  // récupère une meilleure version de l'objet envoyé
  const [newElem, setNewElem] = useState()

  // les inputs
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [date, setDate] = useState()
  const [img, setImg] = useState()
  const [readingTime, setTime] = useState()
  const [place, setPlace] = useState()
  const [text, setText] = useState()
  // const [isPublished, setPublished] = useState()
  // const [titleList, setTitleList] = useState()

  useEffect(() => {
    setElem(props)
    setNewElem(Elem.elem)
    console.log(newElem)
    if (newElem) {
      setTitle(newElem.titre)
      setAuthor(newElem.auteur)
      setText(newElem.contenu)
      setImg(newElem.image)
      setDate(newElem.date)
      setTime(newElem.minutes_lecture)
      setPlace(newElem.geographie)
    }
  })

  return (
    <div>
      <h1>Je modifie un article</h1>
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
  )
}