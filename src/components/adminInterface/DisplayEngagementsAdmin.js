import React, { useState, useEffect } from 'react'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";
import { Link } from 'react-router-dom'


const DisplayEngagementAdmin = (props) => {
    const [engagement, setEngagement] = useState([])


    useEffect(() => {
        const getEngagements = () => {
            axios
            .get("http://localhost:4000/admin/engagements")
            .then(response => response.data)
            .then(data => {
              setEngagement(data);
            });
            
        }
        getEngagements()
    }, [])

    const handleModify = (e) => {
        props.modify(e)
        console.log('modifyyyyyyy', e)
    }

        return (
            <div className="displayEngagementsAdmin_page">
                
                <h1 className="title">Je consulte mes engagements</h1>
                <div className="displayEngagementsAdmin_frame">
                    <div className="displayEngagementsAdmin_header">
                        <p>Les engagements</p>
                    </div>
                    <div className="displayEngagementsAdmin_content">
                        <ul className="displayEngagementsAdmin_items">
                        {engagement.map(elem =>

                        { 
                            return <Link to={`/admin/modifier/engagements/${elem.id}`}> <li> <div key={elem.id} onClick={() => handleModify(elem)}>{elem.engagements}</div> </li></Link>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayEngagementAdmin