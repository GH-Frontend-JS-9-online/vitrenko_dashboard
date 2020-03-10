import React from 'react'
import label from './zig-zag.png'
import {Link} from 'react-router-dom'
import {design} from './js/design'

export const SideBar: React.FC = () => {
    return (
        <>
            <aside className="menu">
            <Link to="/home" onClick = {() => design('home')}><i className="fas fa-home" id="home" ></i></Link>
            <Link to="/menu" onClick = {() => design('menu')}><i className="fas fa-bars" id="menu" ></i></Link>
            <Link to="/graffic" onClick = {() => design('graffic')}><img src={label} alt="" id="graffic" /></Link>
            <Link to="/messages" onClick = {() => design('messages')}><i className="fas fa-envelope" id="messages" ></i></Link>
            <Link to="/friends" onClick = {() => design('friends')}><i className="fas fa-user-friends" id="friends" ></i></Link>
            </aside>
        </>
    )
}