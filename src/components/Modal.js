import * as React from "react"
import "../styles/project.scss"
import "../styles/style.css"

class Modal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        currentImage: this.props.projectData.images[0],
        currentIndex: 0
    }
    console.log(this.state.currentImage);
    console.log(this.state.currentIndex);
  }
  render() {
    console.log("Index on Render: " + this.state.currentIndex);
    return (
      <>
          <div className="modal">
            <h1 className="close" onClick={() => {this.props.onCloseModal()}} style={{color: "#fff", cursor: "pointer"}}>X</h1>
            <div className="image-gallery">
              <h1 className="back" onClick={() => {
                console.log("Current Index On Click: " + this.state.currentIndex);
                if (this.state.currentIndex > 0) {
                  console.log("ClassList Before Change: " + document.querySelector(".image").classList);
                  console.log("Current Image before removal: " + this.state.currentImage);
                  document.querySelector(".image").classList.remove(this.state.currentImage);
                  console.log("ClassList After Removal: " + document.querySelector(".image").classList);
                  this.setState({currentIndex: this.state.currentIndex - 1}, () => {
                    this.setState({currentImage: this.props.projectData.images[this.state.currentIndex]}, () => {
                      document.querySelector(".image").classList.add(this.state.currentImage);
                    });
                  });
                  
                  console.log("Current Index After Change :" + this.state.currentIndex);
                  console.log("Current Image After Change :" + this.state.currentImage);
                  
                  console.log("ClassList After Adding New Image: " + document.querySelector(".image").classList);
                  
                }
              }}>&lt;</h1> 
              <img className="image goingup0"></img>
              <h1 className="next" onClick={() => {
                if (this.state.currentIndex !== this.props.projectData.images.length - 1) {
                  document.querySelector(".image").classList.remove(this.state.currentImage);
                  this.setState({currentIndex: this.state.currentIndex + 1}, () => {
                    this.setState({currentImage: this.props.projectData.images[this.state.currentIndex]}, () => {
                      document.querySelector(".image").classList.add(this.state.currentImage);
                    })
                  });
                }
                console.log("Current Index After Image Switch: " + this.state.currentIndex);
              }}>&gt;</h1>
            </div>
            <div className="project-info">
              <h1 className="project-title">{this.props.projectData.name}</h1>
              <p className="description">{this.props.projectData.description}</p>
            </div>
          </div>
      </>
    );
  }
}

export default Modal;