import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";
import { Link } from 'react-router-dom'

const DisplayTypesActivitesAdmin = (props) => {
    const [typesActivites, setTypesActivites] = useState([])


    useEffect(() => {
        const getTypesActivites = () => {
            axios
                .get("http://localhost:4000/admin/types_activites")
                .then(response => response.data)
                .then(data => {
                    setTypesActivites(data);
                });

        }
        getTypesActivites()
    }, [])

    const handleModify = (e) => {
        props.modify(e)
    }

    return (
        <div className="displayEngagementsAdmin_page">

            <h1 className="title">Je consulte mes types activites</h1>
            <div className="displayEngagementsAdmin_frame">
                <div className="displayEngagementsAdmin_header">
                    <p>Les types activites</p>
                </div>
                <div className="displayEngagementsAdmin_content">
                    <ul className="displayEngagementsAdmin_items">
                        {typesActivites.map(elem => {
                            return <Link to={`/admin/modifier/types_activites/${elem.id}`}>
                                <li> <div key={elem.id} onClick={() => handleModify(elem)}>{elem.types_activites}</div> </li></Link>
                        })}

                    </ul>
                </div>
            </div>
        </div>
    );

}



export default DisplayTypesActivitesAdmin