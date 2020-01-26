import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";

const DisplayObjetsAdmin = () => {
    const [Objets, setObjets] = useState([])


    useEffect(() => {
        const getObjets = () => {
            axios
            .get("http://localhost:4000/admin/objets")
            .then(response => response.data)
            .then(data => {
                console.log("aaaaaaaa", data)
              setObjets(data);
            });
            
        }
        getObjets()
    }, [])


        return (
            <div className="displayEngagementsAdmin_page">
                
                <h1 className="title">Je consulte mes objets</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayEngagementsAdmin_frame">
                    <div className="displayEngagementsAdmin_header">
                        <p>Les objets</p>
                    </div>
                    <div className="displayEngagementsAdmin_content">
                        <ul className="displayEngagementsAdmin_items">
                        {Objets.map(elem =>

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



export default DisplayObjetsAdmin