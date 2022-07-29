import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AndroidIcon from "../../assets/img/android-icon.png";
import CssIcon from "../../assets/img/css-icon.png";
import GitIcon from "../../assets/img/git-icon-2.png";
import HtmlIcon from "../../assets/img/html-icon.png";
import JavascriptIcon from "../../assets/img/javascript-icon.png";
import NodejsIcon from "../../assets/img/nodejs-icon.png";
import ReactIcon from "../../assets/img/react-icon.png";
import SqlIcon from "../../assets/img/sql-icon.png";
import NextIcon from "../../assets/img/nextjs-icon.png";
import GatsbyIcon from "../../assets/img/gatsby-icon.png";
import Web3Icon from "../../assets/img/web3-icon.png";
import SassIcon from "../../assets/img/sass-icon.png";

const ResumeComponent = ({ data }) => {
  const items = [
    <img style={{ height: 150 }} src={ReactIcon} />,
    <img style={{ height: 150 }} src={JavascriptIcon} />,
    <img style={{ height: 150 }} src={HtmlIcon} />,
    <img style={{ height: 150 }} src={NextIcon} />,
    <img style={{ height: 150 }} src={GatsbyIcon} />,
    <img style={{ height: 150 }} src={Web3Icon} />,
    <img style={{ height: 150 }} src={SassIcon} />,
    <img style={{ height: 150 }} src={CssIcon} />,
    <img style={{ height: 150 }} src={GitIcon} />,
    <img style={{ height: 150 }} src={NodejsIcon} />,
    <img style={{ height: 150 }} src={SqlIcon} />,
    <img style={{ height: 150 }} src={AndroidIcon} />,
  ];
  const education = (data) => {
    return data.map((item, index) => (
      <li key={index}>
        <div key={item.school}>
          <h3>{item.school}</h3>
          <p className="info">
            {item.degree} <span>&bull;</span>
            <em className="date">{item.graduated}</em>
          </p>
          <p>{item.description}</p>
        </div>
      </li>
    ));
  };
  const work = (data) => {
    return data.map((item, index) => (
      <li key={index}>
        <div key={item.company}>
          <h3>{item.company}</h3>
          <p className="info">
            {item.title}
            <span>&bull;</span> <em className="date">{item.years}</em>
          </p>
          <p>{item.description}</p>
        </div>
      </li>
    ));
  };
  return (
    <section id="resume">
      <div className="row work">
        <div className="row">
          <div className="header-col">
            <h1>Work</h1>
          </div>
        </div>
        <div className="timeline">
          <ul>{work(data.work)}</ul>
        </div>
      </div>
      <div className="row education">
        <div className="row">
          <div className="header-col">
            <h1>Education</h1>
          </div>
        </div>
        <div className="timeline">
          <ul>{education(data.education)}</ul>
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
