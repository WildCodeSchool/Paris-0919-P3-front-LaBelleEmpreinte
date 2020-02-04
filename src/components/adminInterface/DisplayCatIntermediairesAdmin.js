import React, { useState, useEffect } from 'react'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";
import { Link } from 'react-router-dom'


const DisplayCatIntermediairesAdmin = (props) => {
    const [CatIntermediaires, setCatIntermediaires] = useState([])


    useEffect(() => {
        const getCatIntermediaires = () => {
            axios
            .get("http://localhost:4000/admin/categories_intermediaires")
            .then(response => response.data)
            .then(data => {
              setCatIntermediaires(data);
            });
            
        }
        getCatIntermediaires()
    }, [])

    const handleModify = (e) => {
        props.modify(e)
    }


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
                            return <Link to={`/admin/modifier/categories_intermediaires/${elem.id}`}> <li> <div key={elem.id} onClick={() => handleModify(elem)}>{elem.name}</div> </li></Link>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayCatIntermediairesAdmin