import React from 'react'
import './CSS/AdminCreateArticle.css'

const AdminCreateArticle = () => (
    <div className='admincreatearticle'>
        <h1>
            Créer une article informatif
        </h1>
        <div id="form-main">
            <div id="form-div">
                <form className="form" id="form1">
                    <p>
                        <input type="text" className="feedback-input" placeholder="Titre" id="titre" />
                    </p>
                    <p>
                        <input type="text" className="feedback-input" id="auteur" placeholder="Auteur" />
                    </p>
                    <p>
                        <input type="date" className="feedback-input" id="date" placeholder="Date" />
                    </p>
                    <p>
                        <input type="file" className="feedback-input" id="image" placeholder="Image" />
                    </p>
                    <p>
                        <input type="number" className="feedback-input" id="temps_lecture" placeholder="Temps de lecture" />
                    </p>
                    <p>
                        <input type="text" className="feedback-input" id="lieu" placeholder="Lieu" />
                    </p>
                    <p>
                        <textarea className="feedback-input" id="contenu" placeholder="Contenu de l'article"></textarea>
                    </p>
                    <div className="submit">
                        <input type="submit" value="SEND" id="button-blue" />
                        <div className="ease"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default AdminCreateArticle