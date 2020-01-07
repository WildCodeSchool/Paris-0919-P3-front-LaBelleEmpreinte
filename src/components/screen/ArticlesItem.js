import React from 'react'
import './CSS/ArticlesItem.css'
import pictoclock from "../../assets/pictures/alarm-clock.png"
import pictocalendar from "../../assets/pictures/calendar.png"

const ArticlesItem = ({ title, image, date, time }) => (
    <div className='ArticlesItem' tabindex='0'>
        <img className='ArticlesItem-Image' src={image} alt={title} />
        <div className='ArticlesItem-Info'>
            <div className='ArticlesItem-Date'><span><img className='ArticlesItem-Picto' src={pictocalendar}/>{date}</span></div>
            <div className='ArticlesItem-Time'><span><img className='ArticlesItem-Picto' src={pictoclock}/>{time}</span></div>
        </div>
        <div className='ArticlesItem-TitleContainer'>
            <div className='ArticlesItem-Title'><span>{title}</span></div>
        </div>
    </div >
)

export default ArticlesItem
