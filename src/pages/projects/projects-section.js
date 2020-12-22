import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProjectsComponent = ({ data }) => {
  const projects = (data, type) => {
    return data.map((item, index) => {
      const projectImage = "images/portfolio/" + item.image;
      // if (item.type === type || type === "all") {
      return (
        <div
          key={item.title}
          className={`columns portfolio-item ${
            item.type === type || type === "all" ? "show" : "hide"
          }`}
        >
          <div className="item-wrap">
            <img alt={item.title} src={projectImage} />
            <div>
              <div className="portfolio-item-meta">
                <h5>{item.title}</h5>
                <p>{item.category}</p>
              </div>
            </div>
            <div className="overlay">
              <p className="overlay-details">Click for details</p>
            </div>
          </div>
        </div>
      );
      // }
    });
  };
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>Web</Tab>
              <Tab>Mobile</Tab>
            </TabList>
            <TabPanel>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects(data.projects, "all")}
              </div>
            </TabPanel>
            <TabPanel>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects(data.projects, "web")}
              </div>
            </TabPanel>
            <TabPanel>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects(data.projects, "mobile")}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
export default ProjectsComponent;
