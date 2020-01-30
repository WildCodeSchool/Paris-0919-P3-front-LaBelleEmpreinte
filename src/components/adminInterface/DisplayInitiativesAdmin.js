import React, { useState, useEffect } from 'react'
import TitleAdmin from './TitleAdmin'
import Filtres from '../userInterface/Filtres'
import './CSS/displayArticleAdmin.css'
import axios from "axios";

const DisplayInitiativesAdmin = (props) => {
    const [Initiative, setInitiative] = useState([])


    useEffect(() => {
        const getInitiatives = () => {
            axios
            .get("http://localhost:4000/admin/initiaves")
            .then(response => response.data)
            .then(data => {
                console.log("aaaaaaaa", data)
              setInitiative(data);
            });
            
        }
        getInitiatives()
    }, [])

    useEffect(() => {
        const loadInitiatives = async () => {
            console.log(props)
            const url1 = 'http://localhost:4000/user/filtres/articles'
            const url2 = 'http://localhost:4000/user/filtres/objets/articles'
            const url3 = 'http://localhost:4000/user/filtres/besoins/articles'
            if (props.objet.id !== 0 && props.besoin.id !== 0) {
                const result = await axios.post(url1, { object: props.objet, besoin: props.besoin })
                console.log('results',result.data)
                setInitiative(result.data)
            }
            else if (props.objet.id !== 0 && props.besoin.id == 0) {
                const result = await axios.post(url2, { object: props.objet })
                setInitiative(result.data)
                console.log('result2s',result.data)

            }
            else if (props.objet.id == 0 && props.besoin.id !== 0) {
                const result = await axios.post(url3, {besoin: props.besoin })
                setInitiative(result.data)
                console.log('results3',result.data)

            }
            else {
                const getInitiatives = () => {
                    axios
                    .get("http://localhost:4000/admin/initiaves")
                    .then(response => response.data)
                    .then(data => {
                        console.log("aaaaaaaa", data)
                      setInitiative(data);
                    });
                    
                }
                getInitiatives()
            }

        }
        loadInitiatives()
    }, [props])


   

        return (
            <div className="displayArticleAdmin_page">
                
                <h1 className="title">Je consulte mes initiatives</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayArticleAdmin_frame">
                    <div className="displayArticleAdmin_header">
                        <p>Nom de l'initiatives</p>
                        
                    </div>
                    <div className="displayArticleAdmin_content">
                        <ul className="displayArticleAdmin_items">
                        {Initiative.map(elem =>
                        { 
                            
                            // {console.log("test",elem)}
                            return <li> <div className="displayArticleAdmin_title">{elem.name}</div></li>}
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayInitiativesAdmin 