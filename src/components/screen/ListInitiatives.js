import React from 'react'
import './CSS/ListInitiatives.css'

const ListInitiatives = ({ name, logo, description, url, date, adresses, engagements }) => (
    <div className='listinitiatives'>
        <div className='listinitiatives-containerhead'>
            <img className='listinitiatives-logo' src={logo} alt={name} />
            <div className='listinitiatives-head'>
                <p className='listinitiatives-name'>
                    {name}
                </p>
                <a href={url} className='listinitiatives-url'>
                    Visiter le site
                </a>
            </div>
        </div>
        <p className='listinitiatives-description'>
            {description}
        </p>
        <div className='listinitiatives-adresses'>
            {adresses.map((adresse) => (
                <p>
                    {adresse}
                </p>
            ))}
        </div>
        <p className='listinitiatives-date'>
            {date}
        </p>
        <div className='listinitiatives-engagementscontainer'>
            <p className='listinitiatives-engagements'>Engagements</p>
            {engagements.map((engagement) => (
                <a data-popup={engagement.name}>
                <img className='listinitiatives-logoengagements' src={engagement.logo} alt='engagement' /></a>
            ))}
        </div>
        <hr/>
    </div >
)

export default ListInitiatives
