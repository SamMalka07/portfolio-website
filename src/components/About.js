import React, { useRef } from "react";
import "./About.css";

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
  return (
    <div id="about">
      <div className="page-section">
        <div>
          <div className="about-section">
            <div className="about-section-inner">
              <h1 className="section-header white-txt">About Me</h1>
              <p className="white-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                quis neque in felis lobortis luctus vitae eget lorem. Mauris at
                purus posuere nisl faucibus convallis. Integer at mauris nec
                turpis semper hendrerit. Cras imperdiet tellus at hendrerit
                tempor. Sed sed turpis quis mi pellentesque facilisis
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
                    <img src={img} alt="" />
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
