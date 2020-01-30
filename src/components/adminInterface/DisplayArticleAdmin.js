import React, { useState, useEffect } from 'react'
// import TitleAdmin from './TitleAdmin'
// import Filtres from '../userInterface/Filtres'
import './CSS/displayArticleAdmin.css'
import axios from "axios";
import { Link } from 'react-router-dom'

const DisplayArticleAdmin = (props) => {
    const [article, setArticle] = useState([])


    useEffect(() => {
        const getArticles = () => {
            axios
            .get("http://localhost:4000/user/articles")
            .then(response => response.data)
            .then(data => {
              setArticle(data);
            });
            
        }
        getArticles()
    }, [])

    useEffect(() => {
        const loadArticles = async () => {
            const url1 = 'http://localhost:4000/user/filtres/articles'
            const url2 = 'http://localhost:4000/user/filtres/objets/articles'
            const url3 = 'http://localhost:4000/user/filtres/besoins/articles'
            if (props.objet.id !== 0 && props.besoin.id !== 0) {
                const result = await axios.post(url1, { object: props.objet, besoin: props.besoin })
                setArticle(result.data)
            }
            else if (props.objet.id !== 0 && props.besoin.id == 0) {
                const result = await axios.post(url2, { object: props.objet })
                setArticle(result.data)

            }
            else if (props.objet.id == 0 && props.besoin.id !== 0) {
                const result = await axios.post(url3, {besoin: props.besoin })
                setArticle(result.data)

            }
            else {
                const getArticles = () => {
                    axios
                    .get("http://localhost:4000/user/articles")
                    .then(response => response.data)
                    .then(data => {
                      setArticle(data);
                    });
                    
                }
                getArticles()
            }

        }
        loadArticles()
    }, [props])


    const handleModify = (e) => {
        props.modify(e)
    }
   

        return (
            <div>
                
                {/* <h1 className="title">Je consulte mes articles</h1> */}
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayArticle_frame">
                    <div className="displayArticle_header">
                        <p>Nom de l'article</p>
                        <p>Publié</p>
                    </div>
                    <div className="displayArticle_content">
                        <ul className="displayArticle_items">
                        {article.map(elem =>

                        { 
                            return <Link to={`/admin/modifier/articles/${elem.id}`}><li> <div key={elem.id} onClick={()=>handleModify(elem)}>{elem.titre}</div> <div className={elem.publication ? "publication-on" : "publication-off" }/> </li></Link>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayArticleAdmin 