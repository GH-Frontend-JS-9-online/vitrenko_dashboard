import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Header } from './Header';
import label from './zig-zag.png'
import light_label from './light-zig-zag.png'
import {Messages} from './getMessages'
import { Graffic } from './getGraffic';
import { SideBar } from './SideBar';
export {light_label, label}


function App() {

  return (
    <>
      <Router>
      <Header />
      
      <main>
        <SideBar />

        <Switch>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/graffic">
          <Graffic />
        </Route>
        <Route path="/friends"></Route>
        <Route path="/menu"></Route>
        <Route path="/home"></Route>
      </Switch>
      </main>

      
      </Router>
    </>
  );
}

export default App;
