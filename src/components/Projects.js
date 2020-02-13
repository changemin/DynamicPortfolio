import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'

class Projects extends Component {
  render() {
      const projectInfo = this.props.projectInfo;
      return projectInfo.map((projectInfo)=>(
          <ProjectItem projectInfo={projectInfo} />
      ));
  }
}

// PropTypes
Projects.propTypes = {
    projectInfo: PropTypes.array.isRequired
}


export default Projects;