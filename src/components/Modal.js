import * as React from "react"
import "../styles/project.scss"
import "../styles/style.css"

class Modal extends React.Component {
  
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
          <div className="modal">
            {/* <img src={this.imageSrc} alt=""/> */}
            <h1 onClick={() => {this.props.setState.setState({showing: false})}}style={{color: "#fff"}}>X</h1>
            <h1 className="project-title">{this.props.projectData.name}</h1>
            <p className="description">{this.props.projectData.description}</p>
          </div>
      </>
    );
  }
}

export default Modal;