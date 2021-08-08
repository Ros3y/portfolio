import './App.css';
import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import PixelArt from './pages/pixelart';
import Zigurous from './pages/zigurous';
import Models from './pages/models';
import VectorArt from './pages/vectorart';
import MyLogo from './pages/mylogo';
import Coa from './pages/coa';
import TwitchEmotes from './pages/twitchemotes';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/pixelart">
              <PixelArt />
            </Route>
            <Route path="/models">
              <Models />
            </Route>
            <Route path="/vectorart">
              <VectorArt />
            </Route>
            <Route path="/mylogo">
              <MyLogo />
            </Route>
            <Route path="/zigurous">
              <Zigurous />
            </Route>
            <Route path="/coa">
              <Coa />
            </Route>
            <Route path="/twitchemotes">
              <TwitchEmotes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
