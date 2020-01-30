import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";

const DisplayEngagementAdmin = () => {
    const [engagement, setEngagement] = useState([])


    useEffect(() => {
        const getEngagements = () => {
            axios
            .get("http://localhost:4000/admin/engagements")
            .then(response => response.data)
            .then(data => {
                console.log("aaaaaaaa", data)
              setEngagement(data);
            });
            
        }
        getEngagements()
    }, [])

        return (
            <div className="displayEngagementsAdmin_page">
                
                <h1 className="title">Je consulte mes engagements</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayEngagementsAdmin_frame">
                    <div className="displayEngagementsAdmin_header">
                        <p>Les engagements</p>
                    </div>
                    <div className="displayEngagementsAdmin_content">
                        <ul className="displayEngagementsAdmin_items">
                        {engagement.map(elem =>

                        { 
                            // {console.log("test",elem)}
                            return <li> <div>{elem.engagements}</div> </li>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayEngagementAdmin