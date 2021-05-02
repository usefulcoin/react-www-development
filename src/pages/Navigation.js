import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="navigation">
      <ul>
        <li><Link className="button large fit" to="/">About</Link></li>
        <li><Link className="button large fit" to="/Engagements">Engagements</Link></li>
        <li><Link className="button large fit" to="/Talent">Talent</Link></li>
        <li><Link className="button large fit" to="/Blog">Blog</Link></li>
        <li><Link className="button large fit" to="/Publications">Publications</Link></li>
        <li><Link className="button large fit" to="/Disclaimer">Disclaimer</Link></li>
        <li><Link className="button large fit" to="/Privacy">Privacy Policy</Link></li>
        <li><Link className="button large fit" to="/Terms">Terms & Conditions</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
