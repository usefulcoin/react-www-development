import { useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import { animateScroll } from "react-scroll";


export const Menu = () => {
    useEffect( () => animateScroll.scrollToTop() );
    
    return (
        <nav id="nav">
        <ul className="links">
          <Route exact path="/:id"><li><NavLink activeStyle={{background:"#f63d06"}} to="/Home">About</NavLink></li></Route>
          <Route path="/:id"><li><NavLink activeStyle={{background:"#f63d06"}} to="/Engagements">Engagements</NavLink></li></Route>
          <Route path="/:id"><li><NavLink activeStyle={{background:"#f63d06"}} to="/Talent">Talent</NavLink></li></Route>
          <Route path="/:id"><li><NavLink activeStyle={{background:"#f63d06"}} to="/Blog">Blog</NavLink></li></Route>
          <Route path="/:id"><li><NavLink activeStyle={{background:"#f63d06"}} to="/Publications">Publications</NavLink></li></Route>
        </ul>
        <ul className="icons">
          <li><a href="https://medium.com/usefulcoin" className="icon brands fa-medium"><span className="label">Medium</span></a></li>
          <li><a href="https://github.com/usefulcoin" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
          <li><a href="https://twitter.com/usefulcoinllc" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="https://discord.gg/4SRYBNdE3r" className="icon brands fa-discord"><span className="label">Discord</span></a></li>
        </ul>
      </nav>
    );
}

export default Menu;