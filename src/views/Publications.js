import { useEffect } from 'react';
import {
  Link as ScrollToLink,
  animateScroll
} from "react-scroll";

const Publications = () => {
  useEffect( () => animateScroll.scrollToTop() );

  return (
    <div id="publications-content-wrapper">
      <ScrollToLink />
      <h1 className="major" id="publications">Publications</h1>
      <h3>Coin Telegraph</h3>
      <p>
        <a href="https://cointelegraph.com/news/ico-token-rewards-policy-can-have-unintended-consequences-pose-dilemma-expert-blog">
          https://cointelegraph.com/news/ico-token-rewards-policy-can-have-unintended-consequences-pose-dilemma-expert-blog
        </a>
      </p>
      <p>
        <a href="https://cointelegraph.com/news/correlation-between-cryptocurrency-value-and-exchange-listings-expert-blog">
          https://cointelegraph.com/news/correlation-between-cryptocurrency-value-and-exchange-listings-expert-blog
        </a>
      </p>
      <p>
        <a href="https://cointelegraph.com/news/korea-s-unique-ability-to-make-its-reverse-ico-fad-permanent-expert-take">
          https://cointelegraph.com/news/korea-s-unique-ability-to-make-its-reverse-ico-fad-permanent-expert-take
        </a>
      </p>
      <iframe src="https://usefulcoin.substack.com/embed" width="100%" height="320" style={{border:0, background: "rgba(255, 255, 255, 0)"}} frameborder="0" scrolling="no"></iframe>
    </div>
  );
}

export default Publications;
