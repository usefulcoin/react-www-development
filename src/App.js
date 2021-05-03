import React from "react";
import { useLayoutEffect } from "react";
import {
  Link,
  Route,
  Switch
} from "react-router-dom";


import Home from './views/Home';
import About from './views/About';
import Navigation from './views/Navigation';
import Engagements from './views/Engagements';
import Publications from './views/Publications';
import Talent from './views/Talent';
import Blog from './views/Blog';
import Disclaimer from './views/Disclaimer';
import Privacy from './views/Privacy';
import Terms from './views/Terms';
import Error404 from './views/Error404';


import Intro from './components/Intro';
import Header from './components/Header';
import Copyright from './components/Copyright';


const App = () => {
  useLayoutEffect( () => document.getElementsByTagName("body")[0].removeClass('is-preload') );
  return (
    <div id="wrapper" className="fade-in">
      <Route exact path="/"><Intro /></Route>
      <Route path="/:id"><Header /></Route>
      <Route path="/:id"><Link to="/Navigation" id="navPanelToggle" className="alt">Menu</Link></Route>
      <nav id="nav">
        <ul className="links">
          <Route exact path="/:id"><li><Link to="/Home">About</Link></li></Route>
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
          <Route path="/Navigation"><Navigation /></Route>
          <Route path="/Engagements"><Engagements /></Route>
          <Route path="/Publications"><Publications /></Route>
          <Route path="/Talent"><Talent /></Route>
          <Route path="/Blog"><Blog /></Route>
          <Route path="/Disclaimer"><Disclaimer /></Route>
          <Route path="/Privacy"><Privacy /></Route>
          <Route path="/Terms"><Terms /></Route>
          <Route path="/Home"><Home /></Route>
          <Route><Error404 /></Route>
        </Switch>
      </div>
      <Copyright />
    </div>
  );
}

export default App;
