import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment';

import './CSS/Loader.css'
import './CSS/ListInitiatives.css'

const ListInitiatives = props => {

    const [engagements, setEngagements] = useState([])

    const [loaded3, setLoaded3] = useState(false)

    useEffect(() => {
        const loadEngagements = async () => {
            const url = `http://localhost:4000/user/engagements`
            const result = await axios.get(url)
            setEngagements(result.data)
            setLoaded3(true)
        }
        loadEngagements()
    }, [])

    const filteredEngagement = engagements.filter(
        engagement => engagement.initiatives_id === props.initiative.id)

    return (
        <>
            {!props.loaded2 ?
                (<div className='Articles-loader-container'>
                    <div className='Articles-loader'></div>
                </div>)
                :
                (<div className='listinitiatives'>
                    <div className='listinitiatives-containerhead'>
                        <div className='listinitiatives-head'>
                            <p className='listinitiatives-name'>
                                {props.initiative.name}
                            </p>
                            <a href={props.initiative.url} className='listinitiatives-url'>
                                Visiter le site
                </a>
                        </div>
                        <img className='listinitiatives-logo' src={props.initiative.logo} alt={props.initiative.name} />
                    </div>
                    <p className='listinitiatives-description'>
                        {props.initiative.description}
                    </p>
                    <div className='listinitiatives-adresses'>
                        <p>
                            {props.initiative.adresse1}
                        </p>
                        <p>
                            {props.initiative.adresse2}
                        </p>
                        <p>
                            {props.initiative.adresse3}
                        </p>
                    </div>
                    {props.initiative.date_evenement !== null ?
                        (<p className='listinitiatives-date'>
                            Jusqu'au {moment(props.initiative.date_evenement).format('DD-MM-YYYY')}
                        </p>)
                        :
                        null}
                    {loaded3 ? (
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
