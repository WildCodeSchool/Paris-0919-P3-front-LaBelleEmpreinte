import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './CSS/ListInitiatives.css'

const ListInitiatives = articleId => {
    const [initiative, setInitiative] = useState(
        {
            id: 0,
            name: '',
            logo: '',
            description: "",
            url: '',
            date_evenement: '',
            adresse1: '',
            adresse2: '',
            adresse3: '',
            // liste_engagements: [] 
            // logo: '',
            // name: '' 
        }
    )

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const id = articleId
        const loadInitiatives = async () => {
            const url = `http://localhost:4000/user/initiatives/${id}`
            const result = await axios.get(url)
            setInitiative(result.data)
            setLoaded(true)
        }
        loadInitiatives()
    }, [])

    return (
        <>
            {!loaded ?
                (<div>Initiatives en cours de chargement...</div>)
                :
                (<div className='listinitiatives'>
                    <div className='listinitiatives-containerhead'>
                        <div className='listinitiatives-head'>
                            <p className='listinitiatives-name'>
                                {initiative.name}
                            </p>
                            <a href={initiative.url} className='listinitiatives-url'>
                                Visiter le site
                </a>
                        </div>
                        <img className='listinitiatives-logo' src={initiative.logo} alt={initiative.name} />
                    </div>
                    <p className='listinitiatives-description'>
                        {initiative.description}
                    </p>
                    <div className='listinitiatives-adresses'>
                        <p>
                            {initiative.adresse1}
                        </p>
                        <p>
                            {initiative.adresse2}
                        </p>
                        <p>
                            {initiative.adresse3}
                        </p>
                    </div>
                    <p className='listinitiatives-date'>
                        {initiative.date_evenement}
                    </p>
                    {/* <div className='listinitiatives-engagementscontainer'>

                {engagements.map((engagement) => (
                    <a data-popup={engagement.name}>
                        <img className='listinitiatives-logoengagements' src={engagement.logo} alt='engagement' /></a>

                ))}
            </div> */}
                    <hr />
                </div >)
            }
        </>
    )
}

export default ListInitiatives
