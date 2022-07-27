import React, { useEffect, useRef } from "react";

const Hero = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   console.log(linksHeight);
  //   // linksContainerRef.current.style.height = `calc(100vh - ${linksHeight}px)`;
  // }, []);

  return (
    <div className="hero-section" ref={linksContainerRef}>
      <div className="hero-content" ref={linksRef}>
        <div className="hero-">
          <h1>Hi, I'm Sameera</h1>
        </div>
        <div className="hero-image"></div>
      </div>
    </div>
  );
};

export default Hero;
