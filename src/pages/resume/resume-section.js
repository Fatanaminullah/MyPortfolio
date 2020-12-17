import React from "react";

const ResumeComponent = ({ data }) => {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const education = (data) => {
    return data.map((item, index) => (
      <div className={`container ${index % 2 === 0 ? "right" : "left"}`}>
        <div key={item.school}>
          <h3>{item.school}</h3>
          <p className="info">
            {item.degree} <span>&bull;</span>
            <em className="date">{item.graduated}</em>
          </p>
          <ul>
            {item.description.map((description) => (
              <li>
                <span>&bull;</span> {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };
  const work = (data) => {
    return data.map((work, index) => (
      <div className={`container ${index % 2 === 0 ? "left" : "right"}`}>
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      </div>
    ));
  };
  const skills = (data) => {
    return data.map((skills) => {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span
            style={{
              width: skills.level,
              backgroundColor: getRandomColor(),
            }}
            className={className}
          ></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  };
  return (
    <section id="resume">
      <div className="row work">
        <div className="row">
          <div className="header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="main-col">
            <div className="timeline">{work(data.work)}</div>
          </div>
        </div>
      </div>
      <div className="row education">
        <div className="row">
          <div className="header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="main-col">
            <div className="row item">
              <div className="twelve columns">
                <div className="timeline">{education(data.education)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{data.skillMessage}</p>
          <div className="bars">
            <ul className="skills">{skills(data.skills)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeComponent;
