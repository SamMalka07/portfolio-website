import React, { useState } from "react";
import Project from "./Project";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Shopping Cart",
    description:
      "Basic shopping cart which allows the user to add and remove items from the cart. useContext hook used to manage the global state.",
    image: "/images/projects/sc.png",
    links: [
      {
        website: "https://malkasam-sc.netlify.app/",
        github: "https://github.com/SamMalka07/shopping-cart",
      },
    ],
    languages: [
      {
        name: "Typescript",
        logo: "/images/stack/typescript.svg",
      },
      {
        name: "React",
        logo: "/images/stack/react.svg",
      },
      {
        name: "Tailwindcss",
        logo: "/images/stack/tailwindcss.svg",
      },
    ],
  },
  {
    title: "Employee Management",
    description:
      "CRUD app for employee management with react-hook-forms and error handling. Used Redux for state management",
    image: "/images/projects/em.png",
    links: [
      {
        website: "https://malkasam-em.netlify.app/",
        github: "https://github.com/SamMalka07/employee-management",
      },
    ],
    languages: [
      {
        name: "React",
        logo: "/images/stack/react.svg",
      },
      {
        name: "Redux",
        logo: "/images/stack/redux.svg",
      },
      {
        name: "Tailwindcss",
        logo: "/images/stack/sass.svg",
      },
    ],
  },
  {
    title: "Todo App",
    description: "Simple CRUD app using the basics of Typescript and React.",
    image: "/images/projects/todo.png",
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
      {
        name: "React",
        logo: "/images/stack/react.svg",
      },
      {
        name: "tailwindcss",
        logo: "/images/stack/tailwindcss.svg",
      },
    ],
  },
];

const Portfolio = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

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
