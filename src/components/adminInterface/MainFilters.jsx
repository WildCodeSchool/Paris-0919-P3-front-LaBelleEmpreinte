import React, { useState, useEffect } from "react"
import axios from 'axios'
import CreateArticle from "./CreateArticle"


export default function MainFilters() {

    // state that get all tables
    const [tables, setTables] = useState()

    // state for the actions and type of category
    const [action, setAction] = useState()
    const [category, setCategory] = useState()

    //validation button
    const [isChosen, setChosen] = useState(false)



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
                    <option value="afficher">Afficher</option>
                </select>
                {tables ?
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Catégorie</option>
                        {tables.map((item, index) => (
                            <option key={index} value={item.table_name}>{item.table_name}</option>))}
                    </select> : console.log("second filter is loading")}
                <input type="button" value="Valider" onClick={()=> setChosen(true)}/>
            </form>
            {isChosen ?
            <>
                <h1>{action} {category}</h1>
                <CreateArticle/></> : <p>Veuillez choisir une action et une catégorie</p>
            }
        </>

    )
}