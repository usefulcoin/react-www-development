import { useEffect } from 'react';

function Blog() {
  useEffect(() => window.mediumWidget(), []);
  return (
    <div id="blog-content-wrapper">
      <h1 className="major" id="blog">Blog</h1>
      <p>The <a href="https://medium.com/usefulcoin" target="_medium">Medium Publication</a> occasionally reflects our views on industry or some aspect of an engagment. Take a look.</p>
      <div id="medium-widget"></div>
      <p>Please follow the publication and share your feedback.</p>
    </div>
  );
  }
}

export default Blog;
