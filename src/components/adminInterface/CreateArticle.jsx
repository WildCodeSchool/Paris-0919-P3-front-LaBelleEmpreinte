import React, { useState, useEffect } from "react"

// import tinyMCE
import { Editor } from '@tinymce/tinymce-react';


export default function CreateArticle(props) {
  // les states
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [date, setDate] = useState()
  const [img, setImg] = useState()
  const [readingTime, setTime] = useState()
  const [place, setPlace] = useState()
  const [text, setText] = useState()

  // MEGA STATE!!
  const articleData = { title, author, date, img, readingTime, place }

  useEffect(() => {
    console.log(text)
  })

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

  return (
    <div>
      <h1>Je crée un article</h1>
      <form className="form" id="form1">
        <p>
          <input type="text" value="" className="feedback-input" placeholder="Titre" id="titre" onChange={(e) => setTitle(e.target.value)} />
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
        initialValue="<p>This is the initial content of the editor</p>"
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
      <input type="button" value="SEND" id="button-blue" onClick={(e) => handlePost(e)} />
    </div>
  )
}