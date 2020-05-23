import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {
  deletePost,
  updateProjectContent,
} from '../../store/actions/projectActions';
import moment from 'moment';
function ProjectDetails(props) {
  const [edit, setEdit] = useState(false);
  const { project, deletePost, history, updateProjectContent, auth } = props;
  const id = props.match.params.id;
  const [updateProject, setUpdateProject] = useState({
    title: '',
    content: '',
  });

  function deleteAndRedirect() {
    deletePost(id);
    history.push('/');
  }

  function handleChange(e) {
    setUpdateProject({ ...updateProject, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (auth.uid === project.authorId) {
      updateProjectContent(updateProject, id);
      setEdit(false);
    }
  }

  function openEdit(e) {
    setEdit(!edit);
    setUpdateProject({
      title: project.title,
      content: project.content,
    });
  }
  if (project) {
    if (edit === true) {
      return (
        <div className='container'>
          <form onSubmit={handleSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>Update Post</h5>

            <div className='input-field'>
              <label className='active' htmlFor='title'>
                Title
              </label>
              <input
                required
                onChange={handleChange}
                type='text'
                id='title'
                value={updateProject.title}
              />
            </div>

            <div className='input-field'>
              <label className='active' htmlFor='content'>
                Project Content
              </label>
              <textarea
                required
                value={updateProject.content}
                onChange={handleChange}
                id='content'
                className='materialize-textarea'
              />
            </div>

            <div className='input-field'>
              <button className='btn pink lighten-1 z-depth-0'>Update</button>
              <button
                onClick={() => setEdit(false)}
                className='btn pink lighten-1 z-depth-0'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    } else if (edit === false) {
      return (
        <div className='container section project-details'>
          <div className='card z-depth-0'>
            <div className='card-content'>
              <span className='card-title'>{project.title}</span>
              <p>{project.content}</p>
            </div>

            <div className='card-action gray lighten-4 grey-text'>
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
              </div>
              <div> {moment(project.createdAt.toDate()).calendar()}</div>
            </div>

            {auth.uid === project.authorId && (
              <div>
                <button
                  className='waves-effect waves-light btn'
                  onClick={() => {
                    openEdit();
                  }}
                >
                  Edit
                </button>
                <button
                  style={{ float: 'right' }}
                  className='waves-effect waves-light btn'
                  onClick={() => deleteAndRedirect()}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <button
            className='waves-effect waves-light btn'
            onClick={() => props.history.goBack()}
          >
            Back
          </button>
        </div>
      );
    }
  } else {
    return (
      <div className='container'>
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
    project: project,
    reduxProject: state.project,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps, { deletePost, updateProjectContent }),
  firestoreConnect([
    {
      collection: 'projects',
    },
  ])
)(ProjectDetails);
