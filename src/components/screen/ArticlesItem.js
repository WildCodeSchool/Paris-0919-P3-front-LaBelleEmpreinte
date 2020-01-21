import React from 'react'
import './CSS/ArticlesItem.css'
import pictoclock from "../../assets/pictures/alarm-clock.png"
import pictocalendar from "../../assets/pictures/calendar.png"
import { Link } from 'react-router-dom'



const ArticlesItem = ({ id, titre, image, date, minutes_lecture }) => (
    <Link to={`/article/${id}`}>
        <div className='ArticlesItem' tabIndex='0'>
            <img className='ArticlesItem-Image' src={image} alt={titre} />
            <div className='ArticlesItem-Info'>
                <div className='ArticlesItem-Date'><span><img className='ArticlesItem-Picto' src={pictocalendar} alt='Date :' />{date}</span></div>
                <div className='ArticlesItem-Time'><span><img className='ArticlesItem-Picto' src={pictoclock} alt='Temps de lecture :' />{minutes_lecture} minutes</span></div>
            </div>
            <div className='ArticlesItem-TitleContainer'>
                <div className='ArticlesItem-Title'><span>{titre}</span></div>
            </div>
        </div >
    </Link>

)

export default ArticlesItem
