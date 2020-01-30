import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";

const DisplayCatObjetsAdmin = () => {
    const [CatObjets, setCatObjets] = useState([])


    useEffect(() => {
        const getCatObjets = () => {
            axios
            .get("http://localhost:4000/admin/categories_objets")
            .then(response => response.data)
            .then(data => {
                console.log("aaaaaaaa", data)
              setCatObjets(data);
            });
            
        }
        getCatObjets()
    }, [])


        return (
            <div className="displayEngagementsAdmin_page">
                
                <h1 className="title">Je consulte mes catégories d'objets</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayEngagementsAdmin_frame">
                    <div className="displayEngagementsAdmin_header">
                        <p>Les catégories d'objets</p>
                    </div>
                    <div className="displayEngagementsAdmin_content">
                        <ul className="displayEngagementsAdmin_items">
                        {CatObjets.map(elem =>

                        { 
                            // {console.log("test",elem)}
                            return <li> <div>{elem.categorie}</div> </li>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayCatObjetsAdmin