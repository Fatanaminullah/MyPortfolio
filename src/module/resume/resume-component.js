import React, { Component } from "react";

const ResumeComponent = (props) => {
  const education = () => {
    return props.data.education.map((item) => (
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
    ));
  };
  const work = () => {
    return props.data.work.map((work) => (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    ));
  };
  const skills = () => {
    return props.data.skills.map((skills) => {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span
            style={{
              width: skills.level,
              backgroundColor: props.getRandomColor(),
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
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{props.data && education()}</div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{props.data && work()}</div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">{props.data && skills()}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeComponent;
