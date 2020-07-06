import React, { Component } from 'react';
import ProjectsComponent from '../../module/projects/projects-component';

class Projects extends Component {
  render() {
    return (
      <ProjectsComponent
        data={this.props.data}
      />
    )
  }
}

export default Projects;
