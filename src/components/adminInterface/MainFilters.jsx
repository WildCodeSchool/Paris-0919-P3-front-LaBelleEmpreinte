import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Route, Switch, Link } from 'react-router-dom'

// On importe les routes
import CreateArticle from "./routes/CreateArticle"
import CreateBesoin from './routes/CreateBesoin'
import CreateCategory from './routes/CreateCategory'
import Filtres from '../userInterface/Filtres'
import CreateEngagement from "./routes/CreateEngagement"
import CreateTypeActivity from "./routes/CreateTypeActivity"

import "./CSS/MainFilters.css"
import ModifyArticles from "./routes/ModifyArticles"

export default function MainFilters() {

    // state that get all tables from Axios
    const [tables, setTables] = useState()

    // state pour modification
    const [articleModify, setArticleModify]=useState()

    // state for the actions and type of category
    const [action, setAction] = useState('creer')
    const [category, setCategory] = useState('articles')

    // la route qui récupère

    const route = `/admin/${action}/${category}`


    // le "componentDidMount" qui fait l'appel à Axios pour le deuxième filtre
    useEffect(() => {
        console.log(articleModify)
        const axiosData = async url => {
            const res = await axios.get(url)
            setTables(res.data)
        }
        axiosData('http://localhost:4000/admin/')
    }, [])

    const handleModify =(e) => {
        
        setArticleModify(e)
    }


    return (
        <>
            {/* filtres principaux */}
            <form className="mainFilters">

                {/* filtre pour le type d'action */}
                <select className="mainFilter-selector" onChange={(e) => setAction(e.target.value)}>
                    <option className="mainFilter-option" value="creer">Créer</option>
                    <option value="afficher">Afficher</option>
                </select>

                 {/* category filter based on the axios call */}
                {tables ?
                    <select className="mainFilter-selector" onChange={(e) => setCategory(e.target.value)}>
                        {tables.map((item, index) => (
                            <option key={index} onChange={(e) => setCategory(e.target.value)}>{item.table_name}</option>))}
                    </select> : null}
                {/* bouton link qui va naviguer sur les différentes pages en fonctions des states enregistrés */}
                <Link to={route}><input className="mainFilter-button" type="button" value="Valider" /></Link>
            </form>

            {/* Les routes */}
            <Switch>
                {/* routes pour créer du contenu */}
                <Route path="/admin/creer/articles">
                    <CreateArticle />
                </Route>
                <Route path="/admin/creer/besoins">
                    <CreateBesoin />
                </Route>
                <Route path="/admin/creer/categories_objets">
                    <CreateCategory/>
                </Route>
                <Route path="/admin/creer/engagements">
                    <CreateEngagement/>
                </Route>
                <Route path="/admin/creer/types_activites">
                    <CreateTypeActivity/>
                </Route>
                {/* route pour afficher du contenu */}
                <Route path="/admin/afficher/articles">
                    <Filtres front="admin" modify={(e)=>handleModify(e)}/>
                </Route>
                {/* ci-dessous vont les routes pour les pages de modification */}
                <Route path="/admin/modifier/articles">
                    <ModifyArticles elem={articleModify}/>
                </Route>
            </Switch>
        </>

    )
}