import React from 'react'
import label from './img/label.png'

export const Header: React.FC = () => {
    return(
        <header>
        <label className="label">v<span className="label_decoration">/</span>irtus</label>
        <button className="adding">Add <span className="plus">+</span></button>
        <button className="search"><i className="fas fa-search"></i></button>
        <button className="notifications"><i className="far fa-bell"></i></button>
        <label className="icon"><img src = {label} alt="User icon" /><span className="arrow_down"></span></label> 
      </header>
    )
}