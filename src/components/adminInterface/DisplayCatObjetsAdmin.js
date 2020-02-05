import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";
import { Link } from 'react-router-dom'

const DisplayCatObjetsAdmin = (props) => {
    const [CatObjets, setCatObjets] = useState([])

    let pathApi = process.env.REACT_APP_PATH_API_DEV 
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD 
    }

    useEffect(() => {
        const getCatObjets = () => {
            axios
                .get(`${pathApi}/admin/categories_objets`)
                .then(response => response.data)
                .then(data => {
                    setCatObjets(data);
                });

        }
        getCatObjets()
    }, [])

    const handleModify = (e) => {
        props.modify(e)
    }

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
                        {CatObjets.map(elem => {
                            return <Link to={`/admin/modifier/categories_objets/${elem.id}`}>
                                <li> <div key={elem.id} onClick={() => handleModify(elem)}>{elem.categorie}</div> </li></Link>
                        })}

                    </ul>
                </div>
            </div>
        </div>
    );

}



export default DisplayCatObjetsAdmin