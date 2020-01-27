import React from 'react'
import './CSS/ArticlesItem.css'
import pictoclock from "../../assets/pictures/alarm-clock.png"
import pictocalendar from "../../assets/pictures/calendar.png"
import { Link } from 'react-router-dom'
import lbealt from '../../assets/pictures/lbeimage.jpg'
import moment from 'moment'



const ArticlesItem = props => (
    props.id !== undefined ?
        (
            <Link className='ArticlesItem' to={`/article/${props.id}`} tabIndex='0'>
                {props.image ?
                    (<img className='ArticlesItem-Image' src={props.image} alt={props.titre} />)
                    :
                    (<img className='ArticlesItem-Image' src={lbealt} alt={props.titre} />)
                }
                <div className='ArticlesItem-TitleContainer'>
                    <div className='ArticlesItem-Title'><span>{props.titre}</span></div>
                    <div className='ArticlesItem-Info'>
                        <div className='ArticlesItem-Date'><span><img className='ArticlesItem-Picto' src={pictocalendar} alt='Date :' />{moment(props.date).format('DD-MM-YYYY')}</span></div>
                        <div className='ArticlesItem-Time'><span><img className='ArticlesItem-Picto' src={pictoclock} alt='Temps de lecture :' />{props.minutes_lecture} minutes</span></div>
                    </div>
                </div>
            </Link >
        )
        : 'Aucun article ne correspond à votre recherche'

)

export default ArticlesItem
