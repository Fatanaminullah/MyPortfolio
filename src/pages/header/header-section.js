import React from "react";
import darkBg from "../../assets/img/bg-header.png";

const HeaderComponent = ({ data }) => {
  const { project, github, name, description, city, social } = data;
  const networks = () => {
    return social.map((item) => (
      <li key={item.name}>
        <a href={item.url}>
          <i className={item.className}></i>
        </a>
      </li>
    ));
  };
  return (
    <header
      id="home"
      style={{ background: `url(${darkBg}) no-repeat right center fixed` }}
    >
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1
            className="responsive-headline"
            style={{ fontSize: "45px !important" }}
          >
            {name}
          </h1>
          <h3>{description}</h3>
          <hr />
        </div>
        <ul className="social">{networks()}</ul>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};
export default HeaderComponent;
