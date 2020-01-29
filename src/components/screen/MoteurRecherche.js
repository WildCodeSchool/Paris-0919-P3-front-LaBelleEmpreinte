import React, { useState, useEffect } from 'react'
import './CSS/MoteurRecherche.css'

const MoteurRecherche = (props) => {

    const [recherche, setRecherche] = useState('')

    const [submitRecherche, setSubmitRecherche] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitRecherche ({submitRecherche: recherche})
    }

    useEffect(() => {
        props.setRechercheParent(submitRecherche)
    }, [submitRecherche])

    return (
        <div className='moteurrecherche'>
            <div id="form-main">
                <div id="form-div">
                    <form onSubmit={handleSubmit} className="form" id="form1">
                        <p>
                            <input type="text" className="feedback-input" placeholder="Recherchez un article" id="recherche" onChange={e => setRecherche(e.target.value)} />
                        </p>
                        <div className="submit">
                            <input type="submit" value="RECHERCHER" id="button-recherche" />
                            <div className="ease"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MoteurRecherche