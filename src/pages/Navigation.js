import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="navigation-content-wrapper">
      <ul className="links">
        <li><Link to="/">About</Link></li>
        <li><Link to="/Engagements">Engagements</Link></li>
        <li><Link to="/Talent">Talent</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Publications">Publications</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
