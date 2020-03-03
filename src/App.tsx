import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import {Output} from './output';
import { Header } from './Header';
import label from './zig-zag.png'
import light_label from './light-zig-zag.png'
export {light_label, label}


function App() {
  
  const [id, setId] = useState<string>('')

  const outputContent = (id: string) => {
      setId(id)
  }

  return (
    <>
      <Router>
      <Route path="/" component = {Header} />
      
      <main>
        <aside className="menu">
            <button id="home" onClick={() => outputContent('home')}><i className="fas fa-home" id="h_icon" ></i></button>
            <button id="menu" onClick={() => outputContent('menu')}><i className="fas fa-bars" id="m_icon" ></i></button>
            <button id="graffic" onClick={() => outputContent('graffic')}><img src={label} alt="" id="g_icon" /></button>
            <button id="messages" onClick={() => outputContent('messages')}><i className="fas fa-envelope" id="mes_icon" ></i></button>
            <button id="friends" onClick={() => outputContent('friends')}><i className="fas fa-user-friends" id="f_icon" ></i></button>
        </aside>

        <Output id = {id}/>
      </main>
      </Router>
    </>
  );
}

export default App;
