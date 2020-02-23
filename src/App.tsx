import React, {useState} from 'react';
import './App.css';
import label from './zig-zag.png'
import {Output} from './output';

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
            <button id="home" onClick={() => outputContent('home')}><i className="fas fa-home"></i></button>
            <button id="menu" onClick={() => outputContent('menu')}><i className="fas fa-bars"></i></button>
            <button id="graffic" onClick={() => outputContent('graffic')}><img src={label} alt=""/></button>
            <button id="messages" onClick={() => outputContent('messages')}><i className="fas fa-envelope"></i></button>
            <button id="friends" onClick={() => outputContent('friends')}><i className="fas fa-user-friends"></i></button>
        </aside>

        <Output id = {id}/>
      </main>
    </>
  );
}

export default App;
