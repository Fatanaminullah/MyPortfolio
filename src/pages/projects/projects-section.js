import React, { useState } from "react";
import Modal from "react-modal";
import "react-tabs/style/react-tabs.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
  const [selectedProject, setSelectedProject] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);
  const items = data.projects.map((item) => (
    <img src={`images/portfolio/${item.image}`} />
  ));
  const projects = (data, type) => {
    return data.map((item, index) => {
      const projectImage = `images/portfolio/${item.image}`;
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
              </div>
            </div>
            <div
              className="overlay"
              onClick={() => {
                setVisibleModal(true);
                setSelectedProject(item);
              }}
            >
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
        className={`btn fil-cat tab-button ${selectedTab === item ? "selected" : ""
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
        onRequestClose={() => setVisibleModal(false)}
        style={customStyles}
      >
        <div className="row popup-modal">
          <div className="eight columns">
            {selectedProject.type === "web" ? (
              <AliceCarousel
                autoPlayInterval={2000}
                mouseTracking
                items={
                  selectedProject &&
                  selectedProject.imageDetails.map((item) => (
                    <img
                      // style={{ minWidth: 400, objectFit: "cover" }}
                      width="100%"
                      src={`images/portfolio/${item}`}
                      alt={item}
                    />
                  ))
                }
                infinite
                autoWidth
                autoHeight
                autoPlay={false}
                animationType="fadeout" 
                disableButtonsControls
                // paddingLeft={0}
                // paddingRight={0}
                // responsive={{
                //   0: { items: 1 },
                //   576: { items: 1 },
                //   768: { items: 1 },
                //   992: { items: 1 },
                //   1200: { items: 1 },
                // }}
              />
            ) : (
              <img src={`images/portfolio/${selectedProject.image}`} />
            )}
          </div>
          <div className="four columns">
            <div className="description-box">
              <div>
                <h4>{selectedProject.title}</h4>
                <p>{selectedProject.description}</p>
              </div>
              <div>
                <ul className="tags">
                  {selectedProject &&
                    selectedProject.tags.map((item) => <li>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
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
