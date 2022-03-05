import * as React from "react"
import projects from "../data/projects"

class ProjectGallery extends React.Component {
  constructor(props) {
    console.log(projects.projectList);
    super(props);
    this.state = {
        name: '',
        appVersion: ''
    }
  }
  render() {
    return (
      <div className="project-container">
        
      </div>
    );
  }
}

export default ProjectGallery;