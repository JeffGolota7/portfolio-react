import * as React from "react"
import projects from "../data/projects"
import Project from "../components/Project.js"
import Modal from "../components/Modal.js"
import "../styles/style.css"
import "../styles/project.scss"

class ProjectGallery extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
        showing: false,
        modalProject: '',
    }
    
  }
  handleOpenModal = () => {
    this.setState({ showing: true });
  };

  handleCloseModal = () => {
    this.setState({ showing: false });
  };
  render() {
    return (
      <>
        <ul className="filter-container">
          <li className="filter">All</li>
          <li className="filter middle">Design</li>
          <li className="filter">Development</li>
          
        </ul>
        <div
          className="modal-wrapper"
        >
          { this.state.showing ? <Modal projectData={this.state.modalProject} onCloseModal={this.handleCloseModal}/> : null }
        </div>
        <div className="projects-wrapper">
          <div onClick={() => {
            this.setState({ showing: true, modalProject: projects.projectList[0] })
          }}>
            <Project projectData={projects.projectList[0]}/>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectGallery;