import React from 'react';
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
  return (
    <div>
      {/* Start Content */}
      <article className="post featured">
        <header className="major">
          <span className="date"><img src="images/usefulcoin-whiteicon-128x128px.png" width="10%" alt="brand icon" /></span>
          <h1 class="major" id="about">RESEARCH & STRATEGY</h1>
          <p>Useful Coin is a research and strategy consultancy based in Texas. We enjoy collaborating with orangizations of all stripes on marketing
            research and business development. That said, we have a penchant for collaborating teams in the cryptocurrency industry. Most of
            our <b>engagements</b> tend to involve Korea and typically last between six to twelve months. Read about our <Link to="/Engagements">
            engagements</Link> to learn more about how we can be of service to you. Or save yourself some reading and just give us <a tel="+12062270634">
            call</a>.</p>
        </header>
        <ul className="actions special">
          <li><a href="mailto:info@usefulcoin.com" className="button large">Email Us</a></li>
        </ul>
        <p />
      </article>
      {/* End Content */}
    </div>
  );
  }
}

export default About;
