import * as React from "react"

class ProjectGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        appVersion: ''
    }
  }
  render() {
    return (
      <h1>Hello, {this.props.test}</h1>
    );
  }
}

export default ProjectGallery;