import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
            couverture: "",
            date: "",
            minutes_lecture: 0,
            auteur: "",
            contenu: "",
            geographie: "",
            listes_initiatives: false,
            lien_partage: []
        }
    )

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const loadArticle = async () => {
            const id = props.match.params.id
            const url = `http://localhost:4000/user/articles/${id}`
            const result = await axios.get(url)
            setArticle(result.data)
            setLoaded(true)
        }
        loadArticle()
    }, [])

    const titleHeight = props.height.headerHeight + parseInt(getComputedStyle(document.documentElement).fontSize) * 2

    console.log(isTop);
    console.log(props.height.headerHeight)

    return (
        <>
            {!loaded ?
                (<div>Article en cours de chargement...</div>)
                :
                (<div className='articlecontent'>
                    <span className='articlecontent-title'></span>
                    <header>
                        <div className="articlecontent-header-banner" style={{ backgroundImage: `url(${article.couverture})` }}>

                            <h1 style={{ top: `${titleHeight}px` }}>Salut{article.titre}</h1>
                        </div>
                        <nav className={isTop ? null : 'articlecontent-fixed-header'}>
                            <div className={isTop ? 'articlecontent-invisible-title' : 'articlecontent-visible-title'}>Salut{article.titre}</div>
                        </nav>
                    </header>

                    <section class="articlecontent-content">
                        <article>
                            <div className='articlecontent-timecontainer'>
                                <img className='articlecontent-pictoclock' src={pictoclock} />
                                <p className='articlecontent-time'>{article.minutes_lecture} minutes</p>
                            </div>
                            <p>Secteur : {article.geographie}</p>
                            <p>Le {article.date}</p>
                            <div className='articlecontent-authorcontainer'>
                                <img className='articlecontent-authorpic' src={article.photo_auteur} alt={article.auteur} />
                                <p className='articlecontent-author'>Par {article.auteur}</p>
                            </div>
                            <p>{article.contenu}</p>
                        </article>
                        {article.listes_initiatives ?
                            (<article className='articlecontent-visibleinitiatives'>
                                <div className='articlecontent-associatedinitiatives'>
                                    <h2 className='articlecontent-titleinitiatives'>INITIATIVES ASSOCIÉES
                                    </h2>
                                    {article.liste_initiatives
                                        .map(
                                            (initiative, index) => (
                                                <ListInitiatives articleId={article.id} />
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
                                    <img className='articlecontent-sharelink' src={pictoFb}alt='Facebook' />
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
