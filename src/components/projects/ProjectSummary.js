import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { dislikePost, likePost } from '../../store/actions/projectActions';
function ProjectSummary({ project, dislikePost, likePost }) {
  function dislike(e) {
    e.preventDefault();
    e.stopPropagation();
    dislikePost(project.id);
  }
  function like(e) {
    e.preventDefault();
    e.stopPropagation();
    likePost(project.id);
  }
  return (
    <div className='card z-depth-0 project-summary'>
      <div style={{ position: 'absolute', right: '5px', bottom: '0' }}>
        <span onClick={e => like(e)}>
          <i class='material-icons'>thumb_up</i>
          {project.likes}
        </span>
        <span style={{ marginLeft: '10px' }} onClick={e => dislike(e)}>
          <i class='material-icons'>thumb_down</i>
          {project.dislikes}
        </span>
      </div>

      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>
          {project.authorFirstName} {project.authorLastName}
        </p>
        <p className='grey-text'>
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
}

export default connect(null, { dislikePost, likePost })(ProjectSummary);
