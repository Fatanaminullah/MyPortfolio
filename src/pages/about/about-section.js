import React, { Component } from "react";

const AboutComponent = (props) => {
  if (props.data) {
    var name = props.data.name;
    var profilepic = "images/" + props.data.image;
    var bio = props.data.bio;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var email = props.data.email;
    var resumeDownload = props.data.resumedownload;
  }
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Nordic Giant Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
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
