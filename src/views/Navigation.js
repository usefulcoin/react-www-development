import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollToLink } from "react-scroll";
import { animateScroll } from "react-scroll";

const Navigation = () => {
  useEffect( () => animateScroll.scrollToTop() )
  let buttonClasses = "button primary large fit small"

  return (
    <div id="navigation" style={{margin: 0, padding: 0}}>
      <ScrollToLink />
      <ul style={{listStyle: "none", margin: "0 0 2rem 0", padding: 0, backgroundColor: "#212931"}}>
        <li><Link className={buttonClasses} to="/Home">About</Link></li>
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
