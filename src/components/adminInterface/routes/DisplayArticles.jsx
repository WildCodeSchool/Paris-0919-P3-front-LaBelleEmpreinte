import React, { useState, useEffect } from "react"
import axios from 'axios'

export default function DisplayArticles(props) {

    // on récupère les objets de la BDD
    const [listObjets, setObjets] = useState()
    // on récupère les besoins de la BDD
    const [listBesoins, setBesoins]=useState()

    // state des filtres
    const [objet, setObjet] = useState()
    const [besoins, setBesoin] = useState()

    // GET OBJETS
    const getObjets = () => {
        const axiosData = async url => {
            const res = await axios.get(url)
            setObjets(res.data)
        }
        axiosData(`http://localhost:4000/user/objets`)
    }

    // GET BESOINS
    const getBesoins = () => {
        const axiosData = async url => {
            const res = await axios.get(url)
            setBesoins(res.data)
        }
        axiosData(`http://localhost:4000/user/besoins`)
    }

    useEffect(() => {
        getObjets()
        getBesoins()
    }, [])

    return (
        <div>
            <h1>Je consulte mes articles</h1>

            {/* premier select pour obtenir le filtre objets */}
            <select>
                {listObjets ?
                listObjets.map((item, index) => 
                    <option key={index} value={item.type} onChange={(e) => setObjet(e.target.value)}>{item.type}</option>) : 
                    null}
            </select>
            {/* second filtre pour obtenir les besoins */}
            <select>
                {listBesoins? 
                listBesoins.map((item, index) => 
                    <option key={index} value={item.type} onChange={(e) => setBesoin(e.target.value)}>{item.type}</option>
                ) : null}
            </select>
            <div className="displayList">

            </div>
        </div>
    )
}