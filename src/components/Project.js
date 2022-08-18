import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Project = ({ project }) => {
  const { title, description, languages, links, image } = project;
  const { ref, inView } = useInView({ triggerOnce: true });

  const [readMore, setReadMore] = useState(false);

  const openGithub = () => {
    window.open(links[0].github, "_blank");
  };

  const openWebsite = () => {
    window.open(links[0].website, "_blank");
  };

  return (
    <div className="single-project">
      <div className="single-project-wrapper">
        <div>
          <h3>{title}</h3>
          <img src={image} alt="" className="project-image" />
          <p className="project-desc">
            {readMore ? description : `${description.substring(0, 50)}`}
            <button className="read-btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "Read More..."}
            </button>
          </p>

          <div className="project-lang">
            {languages.map((lang) => (
              <div key={lang.name}>
                <img src={lang.logo} alt="" width={50} height={50} />
              </div>
            ))}
          </div>
        </div>
        <div className="bbb">
          <div className="project-links">
            <input type="button" onClick={openWebsite} value="Visit" />
            <input type="button" onClick={openGithub} value="Github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
