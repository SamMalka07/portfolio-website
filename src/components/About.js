import React, { useRef } from "react";
import "./About.css";
import { useInView } from "react-intersection-observer";

const stack = [
  {
    name: "HTML",
    img: "/images/stack/HTML.svg",
  },
  {
    name: "CSS",
    img: "/images/stack/CSS.svg",
  },
  {
    name: "Javascript",
    img: "/images/stack/javascript.svg",
  },
  {
    name: "React",
    img: "/images/stack/react.svg",
  },
  {
    name: "Redux",
    img: "/images/stack/redux.svg",
  },
  {
    name: "Typescript",
    img: "/images/stack/typescript.svg",
  },
  {
    name: "NextJS",
    img: "/images/stack/nextjs.svg",
  },
  {
    name: "GraphQL",
    img: "/images/stack/graphql.svg",
  },
  {
    name: "Apollo",
    img: "/images/stack/apollo.svg",
  },
  {
    name: "TailwindCSS",
    img: "/images/stack/tailwindcss.svg",
  },
  {
    name: "MySQL",
    img: "/images/stack/mysql.svg",
  },
  {
    name: "Git",
    img: "/images/stack/git.svg",
  },
];

const About = () => {
  const { ref, inView } = useInView();

  return (
    <div id="about">
      <div className="page-section" ref={ref}>
        <div className="page-inner">
          <div className="about-section">
            <div className="about-section-inner">
              <h1 className="section-header white-txt">About Me</h1>
              <p className="white-txt">
                Self motivated Web developer with a Bachelor degrees in
                Information Technology and Graduate diploma in Information
                Technology (Level 7). <br />
                My main ambition is to become a Full Stack Web Developer. My
                passion for programming inspire me to learn new programming
                languages, frameworks, etc. in my spare time.
              </p>
            </div>
          </div>
          <div className="stack-content">
            <h1 className="">Tech Stack and Skills</h1>
            <div className="stack-imgs">
              {stack.map((item) => {
                const { name, img } = item;
                return (
                  <div key={name} className="single-item">
                    <img
                      src={img}
                      alt={name}
                      className={`${inView ? "fade-in" : ""}`}
                    />
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
