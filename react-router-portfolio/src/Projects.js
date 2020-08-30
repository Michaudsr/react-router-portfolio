import React, { Component} from 'react';

class Project extends Component {
    render() {
        const projectList = this.props.projects.map((p, idx) => {
            return <li key={idx}>{p}</li>
        })
        return(
            <div>
            <h1>Steven's Projects</h1>
            
            </div>
        )
    }
}
export default Project;