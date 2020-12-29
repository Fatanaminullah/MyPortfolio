import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import "react-tabs/style/react-tabs.css";
// import "./project.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ProjectsComponent = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [visibleModal, setVisibleModal] = useState(false);
  const projects = (data, type) => {
    return data.map((item, index) => {
      const projectImage = "images/portfolio/" + item.image;
      return (
        <div
          id="portfolio-item"
          key={item.title}
          className={`columns portfolio-item show ${item.type} all`}
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
    });
  };
  const renderTabButton = (list) => {
    return list.map((item) => (
      <div
        className={`btn fil-cat tab-button ${
          selectedTab === item ? "selected" : ""
        }`}
        href=""
        data-rel={item}
        onClick={() => setSelectedTab(item)}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </div>
    ));
  };
  return (
    <section id="portfolio">
      <Modal
        closeTimeoutMS={500}
        isOpen={visibleModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setVisibleModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Check Out Some of My Works.</h1>
      </Modal>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            style={{
              display: "flex",
              marginLeft: "20px",
              paddingBottom: "20px",
            }}
          >
            {renderTabButton(["all", "web", "mobile"])}
          </div>
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
