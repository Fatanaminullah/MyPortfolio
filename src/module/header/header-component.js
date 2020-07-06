import React, { Component } from 'react';
import darkBg from '../../assets/img/bg-header.jpg'

const HeaderComponent = (props) => {
    if(props.data){
       var project = props.data.project;
       var github = props.data.github;
      var name = props.data.name;
      var description= props.data.description;
      var city= props.data.address.city;
      var networks= props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }
    return (
      <header id="home" style={{ background: `url(${darkBg}) no-repeat center center fixed` }}>
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline" style={{ fontSize: '45px !important' }}>{name}</h1>
            <h3>{description}.</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
}
export default HeaderComponent;
