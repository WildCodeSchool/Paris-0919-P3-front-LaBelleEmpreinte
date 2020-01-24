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
            <div className="displayEngagementAdmin_page">
                
                <h1 className="title">Je consulte mes catégories d'objets</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayEngagementAdmin_frame">
                    <div className="displayEngagementAdmin_header">
                        <p>Les engagements</p>
                    </div>
                    <div className="displayEngagementAdmin_content">
                        <ul className="displayEngagementAdmin_items">
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