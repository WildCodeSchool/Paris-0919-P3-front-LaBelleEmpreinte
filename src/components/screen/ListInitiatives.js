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

    const [engagements, setEngagements] = useState(
        [

        ]
    )

    const [loaded, setLoaded] = useState(false)

    const [loaded2, setLoaded2] = useState(false)

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

    useEffect(() => {
        const loadEngagements = async () => {
            const url = `http://localhost:4000/user/engagements`
            const result = await axios.get(url)
            setEngagements(result.data)
            setLoaded2(true)
        }
        loadEngagements()
    }, [])

    const filteredEngagement = engagements.filter(
        engagement => engagement.initiatives_id = initiative.id
    )

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
                    {loaded2 ? (
                        <div className='listinitiatives-engagementscontainer'>
                            {filteredEngagement
                                .map((engagement) => (
                                    <a data-popup={engagement.engagements}>
                                        <img className='listinitiatives-logoengagements' src={engagement.urlPicto} alt={engagement.engagements} /></a>
                                )
                                )}
                        </div>
                    ) : null}
                    <hr />
                </div >)
            }
        </>
    )
}

export default ListInitiatives
