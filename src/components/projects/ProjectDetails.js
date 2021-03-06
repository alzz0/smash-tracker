import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import moment from 'moment';
import {
  deletePost,
  updateProjectContent,
} from '../../store/actions/projectActions';
import {
  addComment,
  deleteComment,
  editComment,
} from '../../store/actions/commentActions';

function ProjectDetails(props) {
  const [edit, setEdit] = useState(false);
  const [editCommentState, setEditCommentState] = useState(false);
  const [updatedComment, setUpdatedComment] = useState();
  const [commentId, setCommentId] = useState();
  const [comment, setComment] = useState({ comment: '', user: {} });
  const [commentTimmer, setCommentTimer] = useState(false);

  const {
    project,
    deletePost,
    history,
    updateProjectContent,
    auth,
    addComment,
    deleteComment,
    editComment,
    user,
    match,
  } = props;

  const id = props.match.params.id;
  const [updateProject, setUpdateProject] = useState({
    title: '',
    content: '',
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function commentTimeOut() {
    setCommentTimer(true);
    setTimeout(() => {
      setCommentTimer(false);
    }, 6000);
  }
  function deleteAndRedirect() {
    let confirmDelete = window.confirm(
      'Are you sure you want to delete this masterpiece ?'
    );
    if (confirmDelete) {
      deletePost(id);
      history.push('/');
    }
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
  function handleCommentSubmit(e) {
    e.preventDefault();
    if (auth.uid && commentTimmer === false) {
      if (comment.comment.length) {
        addComment(comment, id);
        setComment({ comment: '' });
        commentTimeOut();
      }
    }
  }
  function handleCommentChange(e) {
    setComment({ [e.target.name]: e.target.value, user });
  }

  function editCommentFunction(e) {
    setCommentId(e.commentId);
    setEditCommentState(!editCommentState);
    setUpdatedComment(e.comment.comment);
  }

  function handleCommentUpdate(e) {
    setUpdatedComment(e.target.value);
  }
  function handleCommentUpdateSubmit(e) {
    e.preventDefault();
    editComment(match.params.id, commentId, updatedComment, user);
    setEditCommentState(false);
  }

  if (project && project.comment) {
    var comments = project.comment.map((com, index) => {
      return (
        <div key={index} style={{ height: 'auto', minHeight: '60px' }}>
          <h6 style={{ fontSize: '15px' }}>
            <strong>
              <Link
                style={{ color: 'black' }}
                to={`/profile/${com.comment.user.id}`}
              >
                {com.comment.user.firstName} {com.comment.user.lastName}{' '}
              </Link>
            </strong>
            {moment(com.createdAt.toDate()).calendar()}{' '}
            {auth.uid === com.comment.user.id && (
              <button
                className='waves-effect waves-light btn'
                onClick={e => editCommentFunction(com)}
              >
                Edit
              </button>
            )}
            {auth.uid === com.comment.user.id && (
              <button
                className='waves-effect waves-light btn'
                onClick={e => deleteComment(match.params.id, com.commentId)}
              >
                Delete
              </button>
            )}
          </h6>

          {editCommentState && com.commentId === commentId ? (
            <form
              style={{ padding: '0', margin: '0' }}
              onSubmit={handleCommentUpdateSubmit}
            >
              <input
                autoFocus
                value={updatedComment.replace('89456799', '')}
                type='text'
                onChange={handleCommentUpdate}
              />{' '}
            </form>
          ) : (
            <div style={{ marginTop: '0', fontSize: '16px' }}>
              {com.comment.comment.includes('89456799') ? (
                <p>
                  {com.comment.comment.replace('89456799', '')}{' '}
                  <span
                    style={{
                      color: 'darkslategray',
                      fontSize: 'small',
                      fontStyle: 'italic',
                    }}
                  >
                    Edited
                  </span>{' '}
                </p>
              ) : (
                com.comment.comment
              )}
            </div>
          )}
        </div>
      );
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
                maxLength='100'
                value={updateProject.title}
              />
            </div>

            <div className='input-field'>
              <label className='active' htmlFor='content'>
                Project Content
              </label>
              <textarea
                style={{ height: 'auto' }}
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
          <h2> Comments</h2>
          <form onSubmit={e => handleCommentSubmit(e)}>
            <div className='input-field'>
              <label htmlFor='comment'>
                {commentTimmer === false
                  ? 'Comment'
                  : 'Wait a moment before commenting again'}
              </label>
              <input
                type='text'
                name='comment'
                value={comment.comment}
                onChange={e => handleCommentChange(e)}
              />
            </div>
            {!auth.isEmpty && (
              <input
                required
                disabled={comment.comment.length ? false : true}
                type='submit'
                value='Comment'
                className='waves-effect waves-light btn'
              />
            )}
          </form>
          <div>{comments && comments.reverse()}</div>
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
  const userId = state.firebase.auth.uid;

  const projects = state.firestore.data.projects;
  const users = state.firestore.data.users;
  const project = projects ? projects[id] : null;
  const user = users ? users[userId] : null;

  return {
    auth: state.firebase.auth,
    project: project,
    reduxProject: state.project,

    user,
  };
};
export default compose(
  connect(mapStateToProps, {
    deletePost,
    updateProjectContent,
    addComment,
    deleteComment,
    editComment,
  }),
  firestoreConnect([
    {
      collection: 'projects',
    },
    {
      collection: 'users',
    },
  ])
)(ProjectDetails);
