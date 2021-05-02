import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="navigation">
      <ul>
        <li><Link className="button large" to="/">About</Link></li>
        <li><Link className="button large" to="/Engagements">Engagements</Link></li>
        <li><Link className="button large" to="/Talent">Talent</Link></li>
        <li><Link className="button large" to="/Blog">Blog</Link></li>
        <li><Link className="button large" to="/Publications">Publications</Link></li>
        <li><Link className="button large" to="/Disclaimer">Disclaimer</Link></li>
        <li><Link className="button large" to="/Privacy">Privacy Policy</Link></li>
        <li><Link className="button large" to="/Terms">Terms & Conditions</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
