import React from 'react';
import './App.css';
import label from './zig-zag.png'
import {Output} from './output';
import {getMessages} from './getMessages'

const m = (event: MouseEvent) => {
}

function App() {
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
            <button id="home"><i className="fas fa-home"></i></button>
            <button id="menu"><i className="fas fa-bars"></i></button>
            <button id="graffic"><img src={label} alt=""/></button>
            <button id="messages" onClick={m}><i className="fas fa-envelope"></i></button>
            <button id="friends"><i className="fas fa-user-friends"></i></button>
        </aside>

        <Output />
      </main>
    </>
  );
}

export default App;
