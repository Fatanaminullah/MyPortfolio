import React, { Component } from "react";

const AboutComponent = ({ data }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  const { profilePicture, bio, resumeDownload } = data;
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className={`profile-pic about-section ${
              isVisible ? "is-visible" : ""
            }`}
            ref={domRef}
            src={`images/${profilePicture}`}
            alt="Profile Pic"
          />
        </div>
        <div
          className={`nine columns main-col about-section ${
            isVisible ? "is-visible" : ""
          }`}
          ref={domRef}
        >
          <h2 className="text-header">About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns download">
              <p>
                <a href={resumeDownload} download className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutComponent;
