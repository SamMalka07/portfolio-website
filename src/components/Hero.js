import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView();

  return (
    <div className="hero-section">
      <div className="hero-content" ref={ref}>
        <div className={`hero-text ${inView ? "fade-in" : ""}`}>
          <h1 className="hero-intro">Hi, I'm Sameera</h1>
          <p>I'm a web developer based in New Zealand.</p>
        </div>
        <div className="hero-image">
          <img
            className={`${inView ? "slide-fadein" : ""}`}
            src="/images/hero.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
