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
            console.log(props)
            const url1 = 'http://localhost:4000/user/filtres/articles'
            const url2 = 'http://localhost:4000/user/filtres/objets/articles'
            const url3 = 'http://localhost:4000/user/filtres/besoins/articles'
            if (props.objet.id !== 0 && props.besoin.id !== 0) {
                const result = await axios.post(url1, { object: props.objet, besoin: props.besoin })
                console.log('results',result.data)
                setArticles(result.data)
                setLoaded(true)
            }
            else if (props.objet.id !== 0 && props.besoin.id == 0) {
                const result = await axios.post(url2, { object: props.objet })
                setArticles(result.data)
                console.log('result2s',result.data)

                setLoaded(true)
            }
            else if (props.objet.id == 0 && props.besoin.id !== 0) {
                const result = await axios.post(url3, {besoin: props.besoin })
                setArticles(result.data)
                console.log('results3',result.data)

                setLoaded(true)
            }
            else {
                setArticles([])
                //// Si on veut afficher les trois derniers articles, mettre le bon axios ici /// 
            }

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
