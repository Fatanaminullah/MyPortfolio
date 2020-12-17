import { Carousel } from "antd";
import React from "react";
import ReactIcon from "../../assets/img/react-icon.png";
import AndroidIcon from "../../assets/img/android-icon.png";
import CssIcon from "../../assets/img/css-icon.png";
import GitIcon from "../../assets/img/git-icon-2.png";
import HtmlIcon from "../../assets/img/html-icon.png";
import JavascriptIcon from "../../assets/img/javascript-icon.png";
import NodejsIcon from "../../assets/img/nodejs-icon.png";
import SqlIcon from "../../assets/img/sql-icon.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ResumeComponent = ({ data }) => {
  const items = [
    <img style={{ height: 150 }} src={ReactIcon} />,
    <img style={{ height: 150 }} src={JavascriptIcon} />,
    <img style={{ height: 150 }} src={HtmlIcon} />,
    <img style={{ height: 150 }} src={CssIcon} />,
    <img style={{ height: 150 }} src={GitIcon} />,
    <img style={{ height: 150 }} src={NodejsIcon} />,
    <img style={{ height: 150 }} src={SqlIcon} />,
    <img style={{ height: 150 }} src={AndroidIcon} />,
  ];
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
        <div className="header-col" style={{ marginBottom: 50 }}>
          <h1>Skills and Tools</h1>
          <span>{data.skillMessage}</span>
        </div>
        <AliceCarousel
          autoPlayInterval={5000}
          mouseTracking
          items={items}
          autoPlay
          infinite
          disableDotsControls
          responsive={{
            0: { items: 1 },
            568: { items: 3 },
            1024: { items: 5 },
          }}
        />
      </div>
    </section>
  );
};

export default ResumeComponent;
