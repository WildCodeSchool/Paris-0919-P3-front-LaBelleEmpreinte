import React, {useState, useEffect} from "react"

// import tinyMCE
import { Editor } from '@tinymce/tinymce-react';


export default function CreateArticle(props) {
// text state
const [text, setText] = useState()

useEffect(()=>{
  console.log(text)
})

    return (
        <div>
          {/* <input type="text" value=""/> */}
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
        </div>
    )
}