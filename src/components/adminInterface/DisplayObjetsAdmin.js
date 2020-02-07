import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";
import { Link } from 'react-router-dom'


const DisplayObjetsAdmin = (props) => {
    const [Objets, setObjets] = useState([])

    let pathApi = process.env.REACT_APP_PATH_API_DEV 
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD 
    }

    useEffect(() => {
        const getObjets = () => {
            axios
            .get(`${pathApi}/admin/objets`)
            .then(response => response.data)
            .then(data => {
              setObjets(data);
            });
            
        }
        getObjets()
    }, [])

    const handleModify = (e) => {
        props.modify(e)
        console.log('modifyyyyyyy', e)
    }

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
                            return <Link to={`/admin/modifier/objets/${elem.id}`}><li> <div key={elem.id} onClick={() => handleModify(elem)}>{elem.name}</div> </li></Link>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayObjetsAdmin