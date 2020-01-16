import React, { useState, useEffect } from "react"
import axios from 'axios'
import ArticleInform from "./ArticleInform"


export default function HomeFilter() {

    // state that get all tables
    const [tables, setTables] = useState()

    // state for the actions and type of category
    const [action, setAction] = useState()
    const [category, setCategory] = useState()



    useEffect(() => {
        const axiosData = async url => {
            const res = await axios.get(url)
            setTables(res.data)
        }
        axiosData('http://localhost:4000/admin/')
    }, [])

    return (
        <>
            <form>
                <select onChange={(e) => setAction(e.target.value)}>
                    <option value="">Actions</option>
                    <option value="créer">Créer</option>
                    <option value="modifier">Modifier/Supprimer</option>
                    <option value="afficher">Afficher</option>
                </select>
                {tables ?
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Catégorie</option>
                        {tables.map(item => (
                            <option value={item.table_name}>{item.table_name}</option>))}
                    </select> : console.log("stop")}
                <input type="button" value="Valider" />
            </form>
            {action && tables ?
                <ArticleInform  action={action} category={category}/> : console.log("nothing has been chosen")
            }
        </>

    )
}