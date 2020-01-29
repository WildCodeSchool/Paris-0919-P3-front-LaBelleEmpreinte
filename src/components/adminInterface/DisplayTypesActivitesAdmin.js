import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";

const DisplayTypesActivitesAdmin = () => {
    const [typesActivites, setTypesActivites] = useState([])


    useEffect(() => {
        const getTypesActivites = () => {
            axios
            .get("http://localhost:4000/admin/types_activites")
            .then(response => response.data)
            .then(data => {
                console.log("aaaaaaaa", data)
              setTypesActivites(data);
            });
            
        }
        getTypesActivites()
    }, [])


        return (
            <div className="displayEngagementsAdmin_page">
                
                <h1 className="title">Je consulte mes types activites</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayEngagementsAdmin_frame">
                    <div className="displayEngagementsAdmin_header">
                        <p>Les types activites</p>
                    </div>
                    <div className="displayEngagementsAdmin_content">
                        <ul className="displayEngagementsAdmin_items">
                        {typesActivites.map(elem =>

                        { 
                            // {console.log("test",elem)}
                            return <li> <div>{elem.types_activites}</div> </li>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayTypesActivitesAdmin