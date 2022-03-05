import * as React from "react"
import projects from "../data/projects"
import Project from "../components/Project.js"
import "../styles/style.css"
import "../styles/project.scss"

class ProjectGallery extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
        currentFilter: "none",
        appVersion: ''
    }
    
  }
  render() {
    return (
      <>
        <ul className="filter-container">
          <li className="filter">All</li>
          <li className="filter middle">Design</li>
          <li className="filter">Development</li>
          
        </ul>
        <Project projectData={projects.projectList[0]}/>
      </>
    );
  }
}

export default ProjectGallery;