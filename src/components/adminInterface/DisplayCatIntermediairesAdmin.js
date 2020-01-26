import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";

const DisplayCatIntermediairesAdmin = () => {
    const [CatIntermediaires, setCatIntermediaires] = useState([])


    useEffect(() => {
        const getCatIntermediaires = () => {
            axios
            .get("http://localhost:4000/admin/categories_intermediaires")
            .then(response => response.data)
            .then(data => {
                console.log("aaaaaaaa", data)
              setCatIntermediaires(data);
            });
            
        }
        getCatIntermediaires()
    }, [])


        return (
            <div className="displayEngagementsAdmin_page">
                
                <h1 className="title">Je consulte mes catégories intermédiaires</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayEngagementsAdmin_frame">
                    <div className="displayEngagementsAdmin_header">
                        <p>Les catégories intermédiaires</p>
                    </div>
                    <div className="displayEngagementsAdmin_content">
                        <ul className="displayEngagementsAdmin_items">
                        {CatIntermediaires.map(elem =>

                        { 
                            // {console.log("test",elem)}
                            return <li> <div>{elem.name}</div> </li>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayCatIntermediairesAdmin