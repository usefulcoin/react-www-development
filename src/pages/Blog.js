import React from 'react';

class Trade extends React.Component {
  MediumWidget.Init({
    renderTo: "#medium-widget",
    params: {
      resource: "https://medium.com/usefulcoin",
      postsPerLine: 2,
      limit: 4,
      picture: "big",
      fields: ["description", "author", "claps", "publishAt"],
      ratio: "landscape"
    }
  })
  render() {
  return (
    <React.Fragment>
        {/* Start Content */}
        <h1 class="major" id="blog">Medium Publication</h1>
        <p>Our <a href="https://medium.com/usefulcoin" target="_medium">Medium Publication</a> reflects our views on the industry:</p>
        <div id="medium-widget">
        </div>
        <p>Please follow the publication if you subscribe to our views.</p>
        {/* End Content */}
    </React.Fragment>
  );
  }
}

export default Trade;
