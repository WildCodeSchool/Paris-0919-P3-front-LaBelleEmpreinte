import React, { useState, useEffect } from "react"
import axios from 'axios'
import CreateArticle from "./CreateArticle"
import DisplayArticles from "./DisplayArticles"


export default function MainFilters() {

    // state that get all tables from Axios
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
         {/* Line of filters */}
            <form>
                {/* type of action filter */}

                <select onChange={(e) => setAction(e.target.value)}>
                    <option value="">Actions</option>
                    <option value="creer">Créer</option>
                    <option value="afficher">Afficher</option>
                </select>

                {tables ?
                // category filter based on the axios call
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Catégorie</option>
                        {tables.map((item, index) => (
                            <option key={index} value={item.table_name} onChange={(e) => setCategory(e.target.value)}>{item.table_name}</option>))}
                    </select> : console.log("second filter is loading")}
                <input type="button" value="Valider" onClick={()=> setChosen(true)}/>
            </form>

            {/* according to the isChosen state, the next component is displayed */}
            {isChosen && action === "creer"? 
                <CreateArticle/> : console.log("action is not creer")
            }
            {isChosen && action === "afficher"?
                <DisplayArticles category={category}/> : console.log("action is not afficher")}
        </>

    )
}