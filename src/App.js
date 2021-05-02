import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Navigation from './pages/Navigation';
import About from './pages/About';
import Engagements from './pages/Engagements';
import Publications from './pages/Publications';
import Talent from './pages/Talent';
import Blog from './pages/Blog';
import Disclaimer from './pages/Disclaimer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';


import Intro from './components/Intro';
import Header from './components/Header';
import Copyright from './components/Copyright';


const App = () => {
  return (
    <div className="App">
      <div id="wrapper" className="fade-in">
        <Route path="/Navigaton"><Navigation /></Route>
        <Route exact path="/"><Intro /></Route>
        <Route path="/:id"><Header /></Route>
        <Route path="/:id"><Link to="/Navigation" id="navPanelToggle" className="alt">Menu</Link></Route>
        <nav id="nav">
          <ul className="links">
            <Route exact path="/"><li><Link to="/">About</Link></li></Route>
            <Route path="/:id"><li><Link to="/Engagements">Engagements</Link></li></Route>
            <Route path="/:id"><li><Link to="/Talent">Talent</Link></li></Route>
            <Route path="/:id"><li><Link to="/Blog">Blog</Link></li></Route>
            <Route path="/:id"><li><Link to="/Publications">Publications</Link></li></Route>
          </ul>
          <ul className="icons">
            <li><a href="https://medium.com/usefulcoin" className="icon brands fa-medium"><span className="label">Medium</span></a></li>
            <li><a href="https://github.com/usefulcoin" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://twitter.com/usefulcoinllc" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://discord.gg/4SRYBNdE3r" className="icon brands fa-discord"><span className="label">Discord</span></a></li>
          </ul>
        </nav>
        <div id="main">
          <Switch>
            <Route exact path="/"><About /></Route>
            <Route path="/Engagements"><Engagements /></Route>
            <Route path="/Publications"><Publications /></Route>
            <Route path="/Talent"><Talent /></Route>
            <Route path="/Blog"><Blog /></Route>
            <Route path="/Disclaimer"><Disclaimer /></Route>
            <Route path="/Privacy"><Privacy /></Route>
            <Route path="/Terms"><Terms /></Route>
          </Switch>
        </div>
        <Copyright />
      </div>
    </div>
  );
}

export default App;
