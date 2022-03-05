import * as React from "react"
import "../styles/project.scss"
import "../styles/style.css"

let image; 
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
        <div className="modal"></div>
        <div className="project-container">

        </div>
      </>
    );
  }
}

export default Project;