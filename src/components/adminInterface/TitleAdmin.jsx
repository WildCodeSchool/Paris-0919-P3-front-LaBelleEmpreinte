import React, {useState} from 'react'
import './CSS/Home.css'
import MainFilters from './MainFilters'
import { useEffect } from 'react'

export default function TitleAdmin() {

    const [isAdmin, setAdmin] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('myConnection') === true){
            setAdmin("hello?")
            console.log(isAdmin)
        }
    })

    return (

        <div className="admin-Header">
            <div className="mainTitle">
                <h1>LA BELLE EMPREINTE,</h1>
                <h2>Le guide vers les objets responsables</h2>
            </div>
            <h3 className="orangeTitle">ESPACE ADMINISTRATEUR</h3>
                <MainFilters />
        </div>
    )
}