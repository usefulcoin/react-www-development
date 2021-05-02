import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-content-wrapper">
      <nav id="nav">
        <ul className="links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/Engagements">Engagements</Link></li>
          <li><Link to="/Talent">Talent</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Publications">Publications</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
