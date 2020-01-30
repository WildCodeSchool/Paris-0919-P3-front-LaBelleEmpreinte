import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment';

import './CSS/Loader.css'
import './CSS/ArticleContent.css'

import ListInitiatives from './ListInitiatives.js'
import economieCirculaire from '../../assets/icons/LOGOeconomiecirculaire.png'

import pictoFb from "../../assets/icons/facebook.png"
import pictoIns from "../../assets/icons/instagram.png"
import pictoTwit from "../../assets/icons/twitter.png"
import fabricationFrancaise from '../../assets/icons/LOGOfabricationfrancaise.png'
import insertionSociale from '../../assets/icons/LOGOinsertionsociale.png'
import fabricationEuropeenne from '../../assets/icons/LOGOfabricationeuropeenne.png'
import matieresEcologiques from '../../assets/icons/LOGOmatieresecologiques.png'
import artisanat from '../../assets/icons/LOGOartisanat.png'
import logoVestiaireCollective from '../../assets/icons/LOGOvestiaire.png'
import logoImparfaite from '../../assets/icons/LOGOimparfaite.png'
import logoBackMarket from '../../assets/icons/LOGObackmarket.png'
import pictoclock from "../../assets/pictures/alarm-clock.png"
import GetHeaderHeight from './GetHeaderHeight'

const ArticleContent = (props) => {

    const [isTop, setIsTop] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const headerTop = window.scrollY < 300 + props.height.headerHeight
            headerTop !== isTop
                ?
                setIsTop(false)
                :
                setIsTop(true)
        })
        return () => {
            window.removeEventListener('scroll', setIsTop(true))
        }
    }, [props])

    const [article, setArticle] = useState(
        {
            id: 0,
            titre: "",
            image: "",
            date: "",
            minutes_lecture: 0,
            auteur: "",
            contenu: "",
            geographie: "",
            listes_initiatives: false,
            couverture: ""
        }
    )

    const [initiatives, setInitiatives] = useState([])

    useEffect(() => {
        const loadArticle = async () => {
            const id = props.match.params.id
            const url = `http://localhost:4000/user/articles/${id}`
            const result = await axios.get(url)
            setArticle(result.data[0])
            setLoaded(true)
        }
        loadArticle()
    }, [])

    useEffect(() => {
        const id = props.match.params.id
        const loadInitiatives = async () => {
            const url = `http://localhost:4000/user/initiatives/${id}`
            const result = await axios.get(url)
            setInitiatives(result.data)
            setLoaded2(true)
        }
        loadInitiatives()
    }, [])

    const [loaded, setLoaded] = useState(false)

    const [loaded2, setLoaded2] = useState(false)

    const titleHeight = props.height.headerHeight + parseInt(getComputedStyle(document.documentElement).fontSize) * 2


    return (
        <>
            {!loaded ?
                (<div className='Articles-loader-container'>
                    <div className='Articles-loader'></div>
                </div>)
                :
                (<div className='articlecontent'>
                    <span className='articlecontent-title'></span>
                    <header>
                        <div className="articlecontent-header-banner" style={{ backgroundImage: `url(${article.image})` }}>

                            <h1 style={{ top: `${titleHeight}px` }}>{article.titre}</h1>
                        </div>
                        <nav className={isTop ? null : 'articlecontent-fixed-header'}>
                            <div className={isTop ? 'articlecontent-invisible-title' : 'articlecontent-visible-title'}>{article.titre}</div>
                        </nav>
                    </header>

                    <section class="articlecontent-content">
                        <article>
                            <div className='articlecontent-timecontainer'>
                                <img className='articlecontent-pictoclock' src={pictoclock} />
                                <p className='articlecontent-time'>{article.minutes_lecture} minutes</p>
                            </div>
                            <p>Secteur : {article.geographie}</p>
                            <p>
                                Le {moment(article.date).format('DD-MM-YYYY')}
                            </p>

                            <div className='articlecontent-authorcontainer'>
                                {/* <img className='articlecontent-authorpic' src={article.photo_auteur} alt={article.auteur} /> */}
                                <p className='articlecontent-author'>Par {article.auteur}</p>
                            </div>
                            <div>{article.contenu}</div>
                        </article>
                        {article.listes_initiatives ?
                            (<article className='articlecontent-visibleinitiatives'>
                                <div className='articlecontent-associatedinitiatives'>
                                    <h2 className='articlecontent-titleinitiatives'>INITIATIVES ASSOCIÉES
                                    </h2>
                                    {initiatives
                                        .map(
                                            (initiative, index) => (
                                                <ListInitiatives articleId={article.id} loaded2={loaded2} initiative={initiative} />
                                            ))}
                                </div>
                            </article>)
                            :
                            (null)
                        }
                        <div className='articlecontent-sharedlinks'>
                            <p className='articlecontent-share'>
                                Partager l'article sur :
                            </p>
                            <div>
                                <a href='https://www.facebook.com/share'>
                                    <img className='articlecontent-sharelink' src={pictoFb} alt='Facebook' />
                                </a>
                            </div>
                            <div>
                                <a href='http://twitter.com/share'>
                                    <img className='articlecontent-sharelink' src={pictoTwit} alt='Twitter' />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>)
            }
        </>
    )
}

export default ArticleContent
