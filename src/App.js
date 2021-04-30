import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from './pages/About';
import Engagements from './pages/Engagements';
import Publications from './pages/Publications';
import Talent from './pages/Talent';
import Blog from './pages/Blog';

import Intro from './components/Intro';
import Header from './components/Header';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      {/* Start Wrapper */}
      <div id="wrapper" className="fade-in">
        <Route exact path="/"><Intro /></Route>
        <Route path="/:id"><Header /></Route>
        {/* Start Nav */}
        <nav id="nav">
          <ul className="links">
            <Route exact path="/"><li><Link to="/">About</Link></li></Route>
            <Route path="/:id"><li><Link to="/Engagements">Engagements</Link></li></Route>
            <Route path="/:id"><li><Link to="/Publications">Publications</Link></li></Route>
            <Route path="/:id"><li><Link to="/Talent">Talent</Link></li></Route>
            <Route path="/:id"><li><Link to="/Blog">Blog</Link></li></Route>
          </ul>
          <ul className="icons">
            <li><a href="https://medium.com/usefulcoin" className="icon brands fa-medium"><span className="label">Medium</span></a></li>
            <li><a href="https://github.com/usefulcoin" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://twitter.com/usefulcoinllc" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://discord.gg/4SRYBNdE3r" className="icon brands fa-discord"><span className="label">Discord</span></a></li>
          </ul>
        </nav>
        {/* End Nav */}
        {/* Start Main */}
        <div id="main">
          <Switch>
            <Route exact path="/"><About /></Route>
            <Route path="/Engagements"><Engagements /></Route>
            <Route path="/Publications"><Publications /></Route>
            <Route path="/Talent"><Talent /></Route>
            <Route path="/Blog"><Blog /></Route>
          </Switch>
        </div>
        {/* End Main */}
        <Copyright />
      </div>
      {/* End Wrapper */}
    </div>
  );
}

export default App;
