import React, { Component } from "react";

const ProjectsComponent = (props) => {
  if (props.data) {
    var projectsWeb = props.data.projects.map((item) => {
      var projectImage = "images/portfolio/" + item.image;
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
      // }
    });
    // var projectsMobile = props.data.projects.map((item) => {
    //   var projectImage = "images/portfolio/" + item.image;
    //   if (item.type === "mobile") {
    //     return (
    //       <div key={item.title} className="columns portfolio-item">
    //         <div className="item-wrap" style={{ width: 100 }}>
    //           <img alt={item.title} src={projectImage} style={{width: 100}} />
    //           <div className="overlay">
    //             <div className="portfolio-item-meta">
    //               <h5>{item.title}</h5>
    //               <p>{item.category}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   }
    // });
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
            {projectsWeb}
            {/* <div className="row">
              {projectsWeb}
            </div>
            <div className="row">
              {projectsMobile}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsComponent;
