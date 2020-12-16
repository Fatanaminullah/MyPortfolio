import React, { Component } from "react";

const ProjectsComponent = (props) => {
  const projects = () => {
    if (props.data) {
      return props.data.projects.map((item) => {
        const projectImage = "images/portfolio/" + item.image;
        // if (item.type === "web") {
        return (
          <div key={item.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={item.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{item.title}</h5>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

  }
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects()}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsComponent;
