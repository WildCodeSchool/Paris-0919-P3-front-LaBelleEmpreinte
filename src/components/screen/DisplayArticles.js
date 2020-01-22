import React, { useState, useEffect } from 'react'
import axios from "axios"
import ArticlesItem from './ArticlesItem'
import './CSS/DisplayArticles.css'

const DisplayArticles = (props) => {
    const [articles, setArticles] = useState(
        []
    )

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const loadArticles = async () => {
            const url = 'http://localhost:4000/user/filtres/articles'
            const result = await axios.post(url, { objectName: props.objet, besoinName: props.besoin })
            setArticles([result.data[0]])
            setLoaded(true)
        }
        loadArticles()
    }, [props])

    return (
        <>
            {!loaded ?
                (<div>Articles en cours de chargement...</div>)
                :
                (<div className='DisplayArticles-Container'>
                    <div className='DisplayArticles-Gallery'>
                        {articles
                            .map(
                                (article, index) => (
                                    <ArticlesItem {...article} />
                                ))}
                    </div>
                </div>
                )}
        </>
    )

}

export default DisplayArticles
