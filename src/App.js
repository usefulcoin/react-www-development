import React from "react";
import {
  useEffect
} from "react";
import {
  Link,
  Route,
  Switch
} from "react-router-dom";

import Menu from './views/Menu';
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
  useEffect(
    () => {
      window.setTimeout(function() {
        document.body.className = '';
      }, 213);

      return () => { document.body.className = 'is-preload' }
    }
  );
  return (
    <div id="wrapper" className="fade-in">
      <Route exact path="/"><Intro /></Route>
      <Route path="/:id"><Header /></Route>
      <Route path="/:id"><Link to="/Navigation" id="navPanelToggle" className="alt">Menu</Link></Route>
      <Menu />
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
