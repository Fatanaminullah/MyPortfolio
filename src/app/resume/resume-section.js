import React, { Component } from 'react';
import ResumeComponent from '../../module/resume/resume-component';

class Resume extends Component {
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  render() {
    return(
      <ResumeComponent
        data={this.props.data}
        getRandomColor={this.getRandomColor}
        />
    )
  }
}

export default Resume;
