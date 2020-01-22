import React, { Component } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayArticle.css'
import axios from "axios";


class DisplayArticle extends Component {

    state = {
        article : [""],
        filtreArticle : []
    };

    setFiltreArticle = (tableau) =>{
        this.setState({
           filtreArticle: tableau 
        })
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = () => {
        axios
        .get("http://localhost:4000/user/articles")
        .then(response => response.data)
        .then(data => {
            console.log("aaaaaaaa", data)
          this.setState({
            article: data
          });
        });
    };
    
    render() {
        console.log("filtre", this.state.filtreArticle);
        return (
            <div>
                <TitleAdmin/>
                <h1>Je consulte mes articles</h1>
                <div><Filtres filtreArticle={this.setFiltreArticle}/></div>
                <div className="displayArticle_frame">
                    <div className="displayArticle_header">
                        <p>Nom de l'article</p>
                        <p>Publié</p>
                    </div>
                    <div className="displayArticle_content">
                        <ul className="displayArticle_items">
                        {this.state.article.map(elem =>

                        { 
                            {console.log("test",elem)}
                            return <li> <div>{elem.titre} </div> <div className={elem.publication ? "publication-on" : "publication-off" }/> </li>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}



export default DisplayArticle 