import * as React from "react";

class Copyright extends React.Component {
  render() {
    return (
      <div className="App">
      {/* Start Copyright */}
        <div id="copyright">
          <ul>
            <li>© {new Date().getFullYear()} USEFUL COIN LLC. ALL RIGHTS RESERVED.</li>
            <li><a href="page.html?slug=disclaimer">Disclaimer</a></li>
            <li><a href="page.html?slug=privacy-policy">Privacy Policy</a></li>
            <li><a href="page.html?slug=terms-and-conditions">Terms & Conditions</a></li>
          </ul>
        </div>
      {/* End Copyright */}
      </div>
    );
  }
}

export default Copyright;
