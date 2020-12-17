import React from "react";

const ProjectsComponent = ({ data }) => {
  const projects = (data) => {
    return data.map((item) => {
      const projectImage = "images/portfolio/" + item.image;
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
  };
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects(data.projects)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsComponent;
