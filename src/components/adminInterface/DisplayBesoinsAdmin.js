import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";
import { Link } from 'react-router-dom'


const DisplayBesoinsAdmin = (props) => {
    const [Besoins, setBesoins] = useState([])


    useEffect(() => {
        const getBesoins = () => {
            axios
            .get("http://localhost:4000/admin/besoins")
            .then(response => response.data)
            .then(data => {
              setBesoins(data);

            });
            
        }
        getBesoins()
    }, [])

    

    const handleModify = (e) => {
        props.modify(e)
    }

        return (
            <div className="displayEngagementsAdmin_page">
                
                <h1 className="title">Je consulte mes besoins</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayEngagementsAdmin_frame">
                    <div className="displayEngagementsAdmin_header">
                        <p>Les besoins</p>
                    </div>
                    <div className="displayEngagementsAdmin_content">
                        <ul className="displayEngagementsAdmin_items">
                        {Besoins.map(elem =>

                        { 
                            return <Link to={`/admin/modifier/besoins/${elem.id}`}>
                            <li> <div key={elem.id} onClick={() => handleModify(elem)}>{elem.besoins}</div> </li></Link>
                        })}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayBesoinsAdmin