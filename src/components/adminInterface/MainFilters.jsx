import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Route, Switch, Link } from 'react-router-dom'

// On importe les routes
import CreateArticle from "./routes/CreateArticle"
import CreateBesoin from './routes/CreateBesoin'
import CreateCategory from './routes/CreateCategory'
import DisplayArticles from "./routes/DisplayArticles"
import CreateEngagement from "./routes/CreateEngagement"


export default function MainFilters() {

    // state that get all tables from Axios
    const [tables, setTables] = useState()

    // state for the actions and type of category
    const [action, setAction] = useState('creer')
    const [category, setCategory] = useState('articles')

    // la route qui récupère
    const route = `/${action}/${category}`

    // le "componentDidMount" qui fait l'appel à Axios pour le deuxième filtre
    useEffect(() => {
        const axiosData = async url => {
            const res = await axios.get(url)
            setTables(res.data)
        }
        axiosData('http://localhost:4000/admin/')
    }, [])


    return (
        <>
            {/* filtres principaux */}
            <form>

                {/* filtre pour le type d'action */}
                <select onChange={(e) => setAction(e.target.value)}>
                    <option value="creer">Créer</option>
                    <option value="afficher">Afficher</option>
                </select>

                 {/* category filter based on the axios call */}
                {tables ?
                    <select onChange={(e) => setCategory(e.target.value)}>
                        {tables.map((item, index) => (
                            <option key={index} value={item.table_name} onChange={(e) => setCategory(e.target.value)}>{item.table_name}</option>))}
                    </select> : console.log("second filter is loading")}
                {/* bouton link qui va naviguer sur les différentes pages en fonctions des states enregistrés */}
                <Link to={route}><input type="button" value="Valider" onClick={console.log(category)}/></Link>
            </form>

            {/* Les routes */}
            <Switch>
                {/* routes pour créer du contenu */}
                <Route path="/creer/articles">
                    <CreateArticle />
                </Route>
                <Route path="/creer/besoins">
                    <CreateBesoin />
                </Route>
                <Route path="/creer/categories_objets">
                    <CreateCategory/>
                </Route>
                <Route path="/creer/engagements">
                    <CreateEngagement/>
                </Route>
                {/* route pour afficher du contenu */}
                <Route path="/afficher/articles">
                    <DisplayArticles />
                </Route>
                {/* ci-dessous vont les routes pour les pages de modification */}
            </Switch>
        </>

    )
}