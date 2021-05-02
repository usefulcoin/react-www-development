import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div id="intro">
      <img src="images/usefulcoin-whiteicon-128x128px.png" width="75px" height="75px" alt="white icon" />
      <h2>USEFUL COIN</h2>
      <p>collaborative research & strategic engagement</p>
      <ul className="actions">
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            ><a href="#about" className="button icon solid solo fa-arrow-down scrolly">Continue</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Intro;
