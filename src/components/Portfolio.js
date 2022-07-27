import React, { useState } from "react";
import "./portfolio.css";
import Project from "./Project";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Todo App",
    description: "Desc1",
    image: "/images/projects/todoapp.svg",
    links: [
      {
        website: "https://www.google.com/",
        github: "https://github.com/",
      },
    ],
    languages: [
      {
        name: "Typescript",
        logo: "/images/stack/typescript.svg",
      },
    ],
  },
  {
    title: "Shopping Cart",
    description: "Desc2",
    image: "/images/projects/todoapp.png",
    links: [
      {
        website: "https://www.google.com/",
        github: "https://github.com/",
      },
    ],
    languages: [
      {
        name: "React",
        logo: "/images/stack/react.svg",
      },
      {
        name: "GraphQL",
        logo: "/images/stack/graphql.svg",
      },
    ],
  },
  {
    title: "Shopping Cart2",
    description: "Desc2",
    image: "/images/projects/todoapp.png",
    links: [
      {
        website: "https://www.google.com/",
        github: "https://github.com/",
      },
    ],
    languages: [
      {
        name: "React",
        logo: "/images/stack/react.svg",
      },
      {
        name: "GraphQL",
        logo: "/images/stack/graphql.svg",
      },
    ],
  },
];

const Portfolio = () => {
  const [readMore, setReadMore] = useState(false);
  const { ref, inView } = useInView();

  return (
    <div id="portfolio">
      <div className="page-section" ref={ref}>
        <div className="page-wrapper">
          <h1 className="section-header white-txt">Portfolio</h1>
          <div
            className={`portfolio-section ${inView ? "portfolio-fade" : ""}`}
          >
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
