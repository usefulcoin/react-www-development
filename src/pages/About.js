import React from 'react';

class About extends React.Component {
  render() {
  return (
    <React.Fragment>
      {/* Start Content */}
      <article className="post featured">
        <header className="major">
          <span className="date"><img src="images/biop-brand-icon-128x128px.png" width="10%" alt="brand icon" /></span>
          <h1 class="major" id="about">RESEARCH & STRATEGY</h1>
          <p>Useful Coin is a research and strategy consultancy based in Texas. We enjoy collaborating with orangizations of all stripes on marketing
            research and business development. That said, we have a penchant for collaborating teams in the cryptocurrency industry. Most of our
            <b>engagements</b> tend to involve Korea and typical last between six to twelve months. Contact us now via
            <a mailto="info@usefulcoin.com">email</a> to learn more about how we can be of service to you.</p>
        </header>
        <ul className="actions special">
          <li><a href="/engagements" className="button large">engagements</a></li>
        </ul>
        <p />
      </article>
      {/* End Content */}
    </React.Fragment>
  );
  }
}

export default About;
