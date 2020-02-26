import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
function ProjectDetails(props) {
  const { project } = props;
  const id = props.match.params.id;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>

          <div className="card-action gray lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div> {moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
        <button
          className="waves-effect waves-light btn"
          onClick={() => props.history.goBack()}
        >
          Back
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <p>loading ...</p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
