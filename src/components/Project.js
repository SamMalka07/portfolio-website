import React, { useState } from "react";

const Project = ({ project }) => {
  const { title, description, languages } = project;
  console.log(languages);

  const [readMore, setReadMore] = useState(false);

  return (
    <div className="single-project">
      <h3>{title}</h3>
      <p>
        {readMore ? description : `${description.substring(0, 2)}`}
        <button className="read-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More..."}
        </button>
      </p>
      <div className="project-lang">
        {languages.map((lang) => (
          <div key={lang.name}>
            <img src={lang.logo} alt="" width={30} height={30} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
