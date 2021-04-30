import * as React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="App">
      {/* Start Header */}
      <header id="header">
        <img src="images/usefulcoin-whiteicon-128x128px.png" width="75px" height="75px" alt="white icon" />
        <h1>USEFUL COIN</h1>
      </header>
      {/* End Header */}
      </div>
    );
  }
}

export default Header;
