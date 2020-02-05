import React, { useState, useEffect } from 'react'
import axios from "axios"
import ArticlesItem from './ArticlesItem'
import './CSS/DisplayArticles.css'
import './CSS/Loader.css'

const DisplayArticles = (props) => {
    const [articles, setArticles] = useState(
        []
    )

    const [loaded, setLoaded] = useState(false)

    const [lastArticles, setLastArticles] = useState(false)

    let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
    }

    useEffect(() => {
        const loadArticles = async () => {
            const url1 = `${pathApi}/user/filtres/articles`
            const url2 = `${pathApi}/user/filtres/objets/articles`
            const url3 = `${pathApi}/user/filtres/besoins/articles`
            if (props.objet.id !== 0 && props.besoin.id !== 0) {
                setLoaded(false)
                const result = await axios.post(url1, { object: props.objet, besoin: props.besoin })
                setLastArticles(false)
                setArticles(result.data)
                setLoaded(true)
            }
            else if (props.objet.id !== 0 && props.besoin.id == 0) {
                setLoaded(false)
                const result = await axios.post(url2, { object: props.objet })
                setLastArticles(false)
                setArticles(result.data)
                setLoaded(true)
            }
            else if (props.objet.id == 0 && props.besoin.id !== 0) {
                setLoaded(false)
                const result = await axios.post(url3, { besoin: props.besoin })
                setLastArticles(false)
                setArticles(result.data)
                setLoaded(true)
            }
        }
        loadArticles()
    }, [props])

    useEffect(() => {
        const loadArticlesStart = async () => {
            setLoaded(false)
            const url = `${pathApi}/user/lastarticles`
            const result = await axios.get(url)
            setLastArticles(true)
            setArticles(result.data)
            setLoaded(true)
        }
        loadArticlesStart()
    }, [])

    useEffect(() => {
        const loadArticlesRecherche = async () => {
            const keyword = props.recherche.submitRecherche            
            if (keyword !== undefined && keyword.length > 0) {
            setLoaded(false)
            const url = `${pathApi}/user/recherche`
            const result = await axios.post(url, { keyword: keyword })
            setLastArticles(false)
            setArticles(result.data)
            setLoaded(true)}
        }
        loadArticlesRecherche()
        
    }, [props.recherche])

    const filteredArticles = articles.filter(
        article => article.publication == true)

    return (
        <>
            {!loaded ?
                (<div className='Articles-loader-container'>
                    <div className='Articles-loader'></div>
                </div>)
                :
                (
                    <div className='DisplayArticles-Container'>
                        <p className={lastArticles ? 'DisplayArticles-visiblehead' : 'DisplayArticles-invisiblehead'}>
                            Nos derniers articles
                            <hr />
                        </p>
                        <div className='DisplayArticles-Gallery'>

                            {filteredArticles
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
