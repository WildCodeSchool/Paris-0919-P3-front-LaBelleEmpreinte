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
        axiosData(`http://localhost:4000/admin/objets`)
    }

    // GET BESOINS
    const getBesoins = () => {
        const axiosData = async url => {
            const res = await axios.get(url)
            setBesoins(res.data)
        }
        axiosData(`http://localhost:4000/admin/besoins`)
    }

    useEffect(() => {
        getObjets()
        getBesoins()
    }, [])

    return (
        <div>
            <h1>Je consulte mes {props.category}</h1>

            {/* premier select pour obtenir le filtre objets */}
            <select>
                <option value="">Objets</option>
                {listObjets ?
                listObjets.map((item, index) => 
                    <option key={index} value={item.name} onChange={(e) => setObjet(e.target.value)}>{item.name}</option>) : 
                    console.log("")}
            </select>
            {/* second filtre pour obtenir les besoins */}
            <select>
                <option value="">Besoins</option>
                {listBesoins? 
                listBesoins.map((item, index) => 
                    <option key={index} value={item.besoins} onChange={(e) => setBesoin(e.target.value)}>{item.besoins}</option>
                ) : console.log("")}
            </select>
            <div className="displayList">
                
            </div>
        </div>
    )
}