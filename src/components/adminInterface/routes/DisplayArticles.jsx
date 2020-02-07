import React, { useState, useEffect } from "react"
import axios from 'axios'
import DisplayArticleAdmin from "../DisplayArticleAdmin"
import "../CSS/DisplayArticles.css"

export default function DisplayArticles(props) {

    // on récupère les objets de la BDD
    const [listObjets, setObjets] = useState()
    // on récupère les besoins de la BDD
    const [listBesoins, setBesoins] = useState()

    // state des filtres
    const [objet, setObjet] = useState()
    const [besoins, setBesoin] = useState()

    // GET OBJETS
    const getObjets = () => {
        const axiosData = async url => {
            const res = await axios.get(url)
            setObjets(res.data)
        }
        axiosData(`${pathApi}/user/objets`)
    }

    // GET BESOINS
    const getBesoins = () => {
        const axiosData = async url => {
            const res = await axios.get(url)
            setBesoins(res.data)
        }
        axiosData(`${pathApi}/user/besoins`)
    }

    let pathApi = process.env.REACT_APP_PATH_API_DEV
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD
    }

    useEffect(() => {
        getObjets()
        getBesoins()
    }, [])



    return (
        <>
            <div className="display_content">
                <h3><b>Je consulte mes articles :</b></h3>

                {/* premier select pour obtenir le filtre objets */}
                <select>
                    {listObjets ?
                        listObjets.map((item, index) =>
                            <option key={index} value={item.type} onChange={(e) => setObjet(e.target.value)}>{item.type}</option>) :
                        null}
                </select>
                {/* second filtre pour obtenir les besoins */}
                <select>
                    {listBesoins ?
                        listBesoins.map((item, index) =>
                            <option key={index} value={item.type} onChange={(e) => setBesoin(e.target.value)}>{item.type}</option>
                        ) : null}
                </select>
            </div>
            {/* <DisplayArticleAdmin besoin={besoins} object={objet} /> */}
        </>)
}