import React from 'react'
import './CSS/ArticlesItem.css'
import pictoclock from "../../assets/pictures/alarm-clock.png"
import pictocalendar from "../../assets/pictures/calendar.png"

const ArticlesItem = ({ titre, image, date, minutes_lecture }) => (
    <div className='ArticlesItem' tabindex='0'>
        <img className='ArticlesItem-Image' src={image} alt={titre} />
        <div className='ArticlesItem-Info'>
            <div className='ArticlesItem-Date'><span><img className='ArticlesItem-Picto' src={pictocalendar}/>{date}</span></div>
            <div className='ArticlesItem-Time'><span><img className='ArticlesItem-Picto' src={pictoclock}/>{minutes_lecture} minutes</span></div>
        </div>
        <div className='ArticlesItem-TitleContainer'>
            <div className='ArticlesItem-Title'><span>{titre}</span></div>
        </div>
    </div >
)

export default ArticlesItem
