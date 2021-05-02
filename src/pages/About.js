import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about-content-wrapper">
      <h1 class="major" id="about">COLLABORATION & ENGAGEMENT</h1>
      <p>Useful Coin is a research and strategy consultancy based in Texas. We enjoy collaborating with orangizations of all stripes on marketing
        research and business development. That said, we have a penchant for collaborating with teams in the cryptocurrency industry. Most of
        our <b>engagements</b> tend to involve Korea and typically last between six to twelve months. Read about our <Link to="/Engagements">
        engagements</Link> to learn more about how we can be of service to you. Or save yourself some reading and just <a href="tel:+12062270634">
        call</a>/<a href="mailto:info@usefulcoin.com">email</a> us.</p>
      <ul className="actions special">
        <li>
          <a href="mailto:info@usefulcoin.com" className="button large">Email Us</a>
        </li>
      </ul>
    </div>
  );
}

export default About;
