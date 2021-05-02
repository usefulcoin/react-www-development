import React from 'react';

class Blog extends React.Component {
  componentDidMount() {
    window.mediumWidget();
  }

  render() {
  return (
    <div>
      {/* Start Content */}
        <h1 className="major" id="blog">Medium Publication</h1>
        <p>Our <a href="https://medium.com/usefulcoin" target="_medium">Medium Publication</a> occasionally reflects our views on the industry or aspects of an engagment. Take a look:</p>
        <div id="medium-widget"></div>
        <p>Please follow the publication if you subscribe to our views.</p>
      {/* End Content */}
    </div>
  );
  }
}

export default Blog;
