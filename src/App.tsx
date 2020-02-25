import React, {useState} from 'react';
import './App.css';
import label from './zig-zag.png'
import {Output} from './output';
import { design } from './js/design';
import light_label from './light-zig-zag.png';
export {light_label, label}

function App() {
  const [id, setId] = useState<string>('');

  const outputContent = (id: string): void => {
    setId(id)
  }

  return (
    <>
      <header>
        <label className="label">v<span className="label_decoration">/</span>irtus</label>
        <button className="adding">Add <span className="plus">+</span></button>
        <button className="search"><i className="fas fa-search"></i></button>
        <button className="notifications"><i className="far fa-bell"></i></button>
        <label className="icon"><img src = "./img/label.png" alt="User icon" /><span className="arrow_down"></span></label> 
      </header>

      <main>
        <aside className="menu">
            <button id="home" onClick={() => outputContent('home')}><i className="fas fa-home" id="h_icon" onClick={() => design('h_icon')}></i></button>
            <button id="menu" onClick={() => outputContent('menu')}><i className="fas fa-bars" id="m_icon" onClick={() => design('m_icon')}></i></button>
            <button id="graffic" onClick={() => outputContent('graffic')}><img src={label} alt="" id="g_icon" onClick={() => design('g_icon')}/></button>
            <button id="messages" onClick={() => outputContent('messages')}><i className="fas fa-envelope" id="mes_icon" onClick={() => design('mes_icon')}></i></button>
            <button id="friends" onClick={() => outputContent('friends')}><i className="fas fa-user-friends" id="f_icon" onClick={() => design('f_icon')}></i></button>
        </aside>

        <Output id = {id}/>
      </main>
    </>
  );
}

export default App;
