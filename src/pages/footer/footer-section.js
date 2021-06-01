import React from "react";

const FooterComponent = ({ data }) => {
  const networks = (data) => {
    return data.map((item) => (
      <li key={item.name}>
        <a href={item.url} target="_blank">
          <i className={item.className}></i>
        </a>
      </li>
    ));
  };
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks(data.social)}</ul>
          <ul className="copyright">
            <li>&copy; Copyright 2021 Fatan Aminullah</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
