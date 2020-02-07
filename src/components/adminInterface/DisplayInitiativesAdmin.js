import React, { useState, useEffect } from 'react'
import './CSS/displayArticleAdmin.css'
import axios from "axios";
import {Link} from 'react-router-dom'


const DisplayInitiativesAdmin = (props) => {
    const [Initiative, setInitiative] = useState([])

    let pathApi = process.env.REACT_APP_PATH_API_DEV 
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD 
    }

    useEffect(() => {
        const getInitiatives = () => {
            axios
            .get(`${pathApi}/admin/initiaves`)

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
            const url1 = `${pathApi}/user/filtres/articles`
            const url2 = `${pathApi}/user/filtres/objets/articles`
            const url3 = `${pathApi}/user/filtres/besoins/articles`

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
                    .get(`${pathApi}/admin/initiatives`)
                    .then(response => response.data)
                    .then(data => {
                      setInitiative(data);
                    });
                    
                }
                getInitiatives()
            }

        }
        loadInitiatives()
    }, [props])

    const handleModify = (e) => {
        props.modify(e)
    }
   

        return (
            <div className="displayArticleAdmin_page">
                
                <h1 className="title">Je consulte mes initiatives</h1>
                {/* <div><Filtres filtreArticle={this.setFiltreArticle}/></div> */}
                <div className="displayArticleAdmin_frame">
                    <div className="displayArticleAdmin_header">
                        <p>Nom de l'initiative</p>
                        
                    </div>
                    <div className="displayArticleAdmin_content">
                        <ul className="displayArticleAdmin_items">
                        {Initiative.map(elem =>

                        { 
                            
                            // {console.log("test",elem)}

                            return <Link to={`/admin/modifier/initiatives/${elem.id}`}><li> <div onClick={() => handleModify(elem)}className="displayArticleAdmin_title">{elem.name}</div></li></Link> }
                        
                        )}
                        
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}



export default DisplayInitiativesAdmin 