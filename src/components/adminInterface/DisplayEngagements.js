import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayEngagementAdmin.css'
import axios from "axios";

const displayEngagementAdmin = (props) => {
    const [engagement, setEngagement] = useState([])


    useEffect(() => {
        const getEngagements = () => {
            axios
            .get("http://localhost:4000/admin/engagement")
            .then(response => response.data)
            .then(data => {
                console.log("aaaaaaaa", data)
              setArticle(data);
            });
            
        }
        getEngagements()
    }, [])

    useEffect(() => {
        const loadArticles = async () => {
            console.log(props)
            const url1 = 'http://localhost:4000/user/filtres/articles'
            const url2 = 'http://localhost:4000/user/filtres/objets/articles'
            const url3 = 'http://localhost:4000/user/filtres/besoins/articles'
            if (props.objet.id !== 0 && props.besoin.id !== 0) {
                const result = await axios.post(url1, { object: props.objet, besoin: props.besoin })
                console.log('results',result.data)
                setArticle(result.data)
            }
            else if (props.objet.id !== 0 && props.besoin.id == 0) {
                const result = await axios.post(url2, { object: props.objet })
                setArticle(result.data)
                console.log('result2s',result.data)

            }
            else if (props.objet.id == 0 && props.besoin.id !== 0) {
                const result = await axios.post(url3, {besoin: props.besoin })
                setArticle(result.data)
                console.log('results3',result.data)

            }
            else {
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
            }

        }
        loadArticles()
    }, [props])


   

        return (
            <div className="displayEngagementAdmin_page">
                
                <h1 className="title">Je consulte mes articles</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayEngagementAdmin_frame">
                    <div className="displayEngagementAdmin_header">
                        <p>Nom de l'article</p>
                        <p>Publié</p>
                    </div>
                    <div className="displayEngagementAdmin_content">
                        <ul className="displayEngagementAdmin_items">
                        {engagement.map(elem =>

                        { 
                            // {console.log("test",elem)}
                            return <li> <div>{elem.Engagements}</div> <div className={elem.publication ? "publication-on" : "publication-off" }/> </li>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default displayEngagementAdmin