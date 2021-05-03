import { useEffect } from 'react';
import {
  Link as ScrollToLink,
  animateScroll
} from "react-scroll";

const Error404 = () => {
  useEffect( () => animateScroll.scrollToTop() );

  return (
    <div id="error404-content-wrapper">
      <ScrollToLink />
      <h1 className="major" id="Error404">Error 404</h1>
      <p>Route not defined.</p>
    </div>
  );
}

export default Error404;
