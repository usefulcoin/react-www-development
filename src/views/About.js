import { Link } from "react-router-dom";

const About = () => {

  return (
    <div id="about-content-wrapper">
      <h1 className="major" id="about">ABOUT</h1>
      <p>Useful Coin is a research and strategy consultancy based in Texas. We enjoy collaborating with orangizations of all stripes on marketing
        research and strategic business development. That said, we focus on the cryptocurrency industry and outfits searching for a diligent and ethical
        partner to bring multiple talents and an entrepreneurial mindset to their endeavor.</p>
      <p>Most of our <b>engagements</b> tend to involve Korea and typically last between six to twelve months. Read about our <Link to="/Engagements">
        engagements</Link> to learn more about how we can be of service to you. Or save yourself some reading and just <a href="tel:+12062270634">
        call</a>/<a href="mailto:info@usefulcoin.com">email</a> us.</p>
      <ul className="actions special">
        <li>
          <a href="mailto:info@usefulcoin.com" className="button large">Email Us</a>
        </li>
        <li>
          <Link to="/Engagements"><div className="button primary large">Learn More</div></Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
