import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Route, Switch, Link } from 'react-router-dom'

// On importe les routes
import CreateArticle from "./routes/CreateArticle"
import CreateBesoin from './routes/CreateBesoin'
import CreateTypeActivity from "./routes/CreateTypeActivity"
import CreateEngagement from "./routes/CreateEngagement"
import CreateCategory from './routes/CreateCategory'
import CreateCategoryIntermediaire from "./routes/CreateCategoryIntermediaire"
import CreateObjets from './routes/CreateObjets'
import Filtres from '../userInterface/Filtres'
import DisplayObjetsAdmin from "./DisplayObjetsAdmin"
import DisplayBesoinsAdmin from "./DisplayBesoinsAdmin"
import DisplayEngagementsAdmin from "./DisplayEngagementsAdmin"
import DisplayCatObjetsAdmin from "./DisplayCatObjetsAdmin"
import DisplayCatIntermediairesAdmin from "./DisplayCatIntermediairesAdmin"
import DisplayTypesActivitesAdmin from "./DisplayTypesActivitesAdmin"

////import fichiers de modification /////
import ModifyBesoins from "./routes/ModifyFilters/ModifyBesoins"
import ModifyTypeActivity from "./routes/ModifyFilters/ModifyTypeActivity"
import ModifyCategoriesObjets from "./routes/ModifyFilters/ModifyCategoriesObjets"
import ModifyCategoriesIntermediaires from "./routes/ModifyFilters/ModifyCategoriesIntermediaires"
import ModifyObjets from "./routes/ModifyFilters/ModifyObjets"
import ModifyEngagements from "./routes/ModifyFilters/ModifyEngagements"


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
        const axiosData = async url => {
            const res = await axios.get(url)
            setTables(res.data)
        }
        axiosData('http://localhost:4000/admin/')
    }, [])

    const handleModify =(e) => {
        
        setArticleModify(e)
    }

    console.log('mainfilters', setArticleModify)

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
                            <option key={index} value={item.table_name} onChange={(e) => setCategory(e.target.value)}>{item.table_name}</option>))}

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
                <Route path="/admin/creer/types_activites">
                    <CreateTypeActivity/>
                </Route>
                <Route path="/admin/creer/categories_objets">
                    <CreateCategory/>
                </Route>
                <Route path="/admin/creer/categories_intermediaires">
                    <CreateCategoryIntermediaire/>
                </Route>
                <Route path="/admin/creer/objets">
                    <CreateObjets/>
                </Route>
                <Route path="/admin/creer/engagements">
                    <CreateEngagement/>
                </Route>
                
                {/* route pour afficher du contenu */}
                <Route path="/admin/afficher/articles">

                    <Filtres front="admin_articles" modify={(e)=>handleModify(e)}/>

                </Route>
                <Route path="/admin/afficher/objets">
                    <DisplayObjetsAdmin modify={(e)=>handleModify(e)}/>
                </Route>
                <Route path="/admin/afficher/initiatives">
                    <Filtres front="admin_initiatives"/>
                </Route>
                <Route path="/admin/afficher/categories_objets">
                    <DisplayCatObjetsAdmin modify={(e)=>handleModify(e)}/>
                </Route>
                <Route path="/admin/afficher/categories_intermediaires">
                    <DisplayCatIntermediairesAdmin modify={(e)=>handleModify(e)}/>
                </Route>
                <Route path="/admin/afficher/types_activites">
                    <DisplayTypesActivitesAdmin modify={(e)=>handleModify(e)}/>
                </Route>
                <Route path="/admin/afficher/engagements">
                    <DisplayEngagementsAdmin modify={(e)=>handleModify(e)}/>
                </Route>
                <Route path="/admin/afficher/besoins">
                    <DisplayBesoinsAdmin modify={(e)=>handleModify(e)}/>

                </Route>
                {/* ci-dessous vont les routes pour les pages de modification */}
                <Route path="/admin/modifier/articles/:id">
                    <ModifyArticles elem={articleModify}/>
                </Route>
                <Route path="/admin/modifier/categories_objets/:id">
                    <ModifyCategoriesObjets elem={articleModify}/>
                </Route>
                <Route path="/admin/modifier/categories_intermediaires/:id">
                    <ModifyCategoriesIntermediaires elem={articleModify}/>
                </Route>
                <Route path="/admin/modifier/objets/:id">
                    <ModifyObjets elem={articleModify}/>
                </Route>
                <Route path="/admin/modifier/besoins/:id">
                    <ModifyBesoins elem={articleModify}/>
                </Route>
                <Route path="/admin/modifier/types_activites/:id">
                    <ModifyTypeActivity elem={articleModify}/>
                </Route>
                <Route path="/admin/modifier/engagements/:id">
                    <ModifyEngagements elem={articleModify}/>
                </Route>
            </Switch>
        </>

    )
}