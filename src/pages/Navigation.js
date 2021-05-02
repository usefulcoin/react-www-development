import { Link } from "react-router-dom";

const Navigation = () => {
  let buttonClasses = "button primary large fit small"

  return (
    <div id="navigation">
      <ul style={{listStyle: "none", margin: 0, padding: 0}}>
        <li><Link className={buttonClasses} to="/">About</Link></li>
        <li><Link className={buttonClasses} to="/Engagements">Engagements</Link></li>
        <li><Link className={buttonClasses} to="/Talent">Talent</Link></li>
        <li><Link className={buttonClasses} to="/Blog">Blog</Link></li>
        <li><Link className={buttonClasses} to="/Publications">Publications</Link></li>
        <li><Link className={buttonClasses} to="/Disclaimer">Disclaimer</Link></li>
        <li><Link className={buttonClasses} to="/Privacy">Privacy Policy</Link></li>
        <li><Link className={buttonClasses} to="/Terms">Terms & Conditions</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
