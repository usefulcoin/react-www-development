import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="navigation">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/Engagements">Engagements</Link></li>
        <li><Link to="/Talent">Talent</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Publications">Publications</Link></li>
        <li><Link to="/Disclaimer">Disclaimer</Link></li>
        <li><Link to="/Privacy">Privacy Policy</Link></li>
        <li><Link to="/Terms">Terms & Conditions</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
