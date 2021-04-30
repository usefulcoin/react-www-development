import React from 'react';

class Trade extends React.Component {
  render() {
  return (
    <div>
      {/* Start Content */}
        <h1 className="major" id="engagements">Engagements</h1>
        <p>All-hands-on-deck <b>engagements</b> lasting three to nine months are our specialty. Although we
           draft and execute thoughful marketing strategies, write impactful press releases, exhibit at major
           conferences, and develop educational content, engagements allow us to leverage our various talents
           and produce the greatest impact.</p>
        <span className="image left">
          <a className="image dropshadow" href="https://www.biopset.com/">
            <img src="images/biop-combination-mark-250x150px.png" alt="biop-combination-mark" />
          </a>
        </span>
        <h3>The Settlement DAO</h3>
        <p>What started out as a fun [pro bono] community management engagement turned into an opportunity to <i>deeply embed</i>.
           Eventually, we joined the core developer to form a team to breathe life into the binary options settlement protocol
           ("<b>BIOPSET</b>") and bootstrap its <b>Settlement DAO</b>.</p>
      {/* End Content */}
    </div>
  );
  }
}

export default Trade;
