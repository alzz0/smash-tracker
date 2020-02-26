import React, { useState } from "react";
import { createProject } from "../../store/actions/projectActions.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
function CreateProject({ createProject, auth, history }) {
  const [project, setProject] = useState({ title: "", content: "" });
  if (!auth.uid) return <Redirect to="/signin" />;

  function handleChange(e) {
    setProject({ ...project, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    createProject(project);
    setProject({ title: "", content: "" });

    history.push("/");
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Post</h5>

        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            required
            onChange={handleChange}
            type="text"
            id="title"
            value={project.title}
          />
        </div>

        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            required
            value={project.content}
            onChange={handleChange}
            id="content"
            className="materialize-textarea"
          />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  auth: state.firebase.auth
});
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
