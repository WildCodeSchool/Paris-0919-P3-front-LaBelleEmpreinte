import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";

const DisplayBesoinsAdmin = () => {
    const [Besoins, setBesoins] = useState([])


    useEffect(() => {
        const getBesoins = () => {
            axios
            .get("http://localhost:4000/admin/besoins")
            .then(response => response.data)
            .then(data => {
                console.log("aaaaaaaa", data)
              setBesoins(data);
            });
            
        }
        getBesoins()
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
                        {Besoins.map(elem =>

                        { 
                            // {console.log("test",elem)}
                            return <li> <div>{elem.besoins}</div> </li>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayBesoinsAdmin