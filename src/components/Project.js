import * as React from "react"
import "../styles/project.scss"
import "../styles/style.css"

class Project extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        appVersion: ''
    }
  }
  render() {
    return (
      <>
        <div className="project">
          <div className="project-container goingup0" >
            

          </div>
          <h1 className="project-title">{this.props.projectData.name}</h1>
        </div>
      </>
    );
  }
}

export default Project;