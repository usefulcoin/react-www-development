import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="navigation">
      <ul>
        <li><Link className="button primary large fit small" to="/">About</Link></li>
        <li><Link className="button primary large fit small" to="/Engagements">Engagements</Link></li>
        <li><Link className="button primary large fit small" to="/Talent">Talent</Link></li>
        <li><Link className="button primary large fit small" to="/Blog">Blog</Link></li>
        <li><Link className="button primary large fit small" to="/Publications">Publications</Link></li>
        <li><Link className="button primary large fit small" to="/Disclaimer">Disclaimer</Link></li>
        <li><Link className="button primary large fit small" to="/Privacy">Privacy Policy</Link></li>
        <li><Link className="button primary large fit small" to="/Terms">Terms & Conditions</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
