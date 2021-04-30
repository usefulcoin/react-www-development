import * as React from "react";

class Intro extends React.Component {
  render() {
    return (
      <div className="App">
      {/* Start Intro */}
      <div id="intro">
        <img src="images/usefulcoin-whiteicon-128x128px.png" width="75px" height="75px" alt="white icon" />
        <h2>USEFUL COIN</h2>
        <p>research collaboration & strategic engagment</p>
        <ul className="actions">
          <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
      </div>
      {/* End Intro */}
      </div>
    );
  }
}

export default Intro;
