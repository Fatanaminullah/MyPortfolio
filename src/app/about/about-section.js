import React, { Component } from 'react';
import AboutComponent from '../../module/about/about-component';

class About extends Component {
  render() {
     return (
      <AboutComponent
         data={this.props.data}
      />
     )
  }
}

export default About;
