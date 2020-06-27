import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PopUpModal from '../../commons/PopUpModal';
import { connect } from 'react-redux';
import {
  dislikePost,
  likePost,
  removeDislikePost,
  removeLikePost,
} from '../../store/actions/projectActions';
function ProjectSummary({
  project,
  dislikePost,
  likePost,
  auth,
  user,
  removeDislikePost,
  removeLikePost,
}) {
  const [projectDislikedBy, setProjectDislikedBy] = useState();
  const [projectLikedBy, setProjectLikedBy] = useState();
  const [projectdislikeName, setProjectDislikeNames] = useState();
  const [projectLikeName, setProjectLikeNames] = useState();

  useEffect(() => {
    var disLikelist = [];
    var dislikeNames = [];
    var likeNames = [];
    var likeList = [];

    project.dislikedBy &&
      project.dislikedBy.map(user => {
        disLikelist.push(user.auth.id);
        dislikeNames.push(` ${user.auth.firstName}  ${user.auth.lastName}`);
      });
    setProjectDislikedBy(disLikelist);
    setProjectDislikeNames(dislikeNames);

    // list of liked users
    project.likedBy &&
      project.likedBy.map(user => {
        likeList.push(user.auth.id);
        likeNames.push(` ${user.auth.firstName}  ${user.auth.lastName}`);
      });
    setProjectLikedBy(likeList);
    setProjectLikeNames(likeNames);
  }, [project]);

  function dislike(e) {
    if (projectLikedBy.includes(auth.uid) && auth.uid) {
      removeLikePost(project.id, user);
    }
    e.preventDefault();
    e.stopPropagation();
    if (projectDislikedBy.includes(auth.uid) && auth.uid) {
      removeDislikePost(project.id, user);
    } else {
      dislikePost(project.id, user);
    }
  }
  function like(e) {
    e.preventDefault();
    e.stopPropagation();
    if (projectDislikedBy.includes(auth.uid) && auth.uid) {
      removeDislikePost(project.id, user);
    }
    if (projectLikedBy.includes(auth.uid) && auth.uid) {
      removeLikePost(project.id, user);
    } else {
      likePost(project.id, user);
    }
  }
  if (projectLikeName && projectLikeName.length > 1) {
    var likedNames = <PopUpModal names={projectLikeName} />;
  } else {
    var likedNames =
      projectLikeName != false && ` Liked by ${projectLikeName}    `;
  }

  if (projectdislikeName && projectdislikeName.length > 1) {
    var dislikedNamed = <PopUpModal dislike names={projectdislikeName} />;
  } else {
    var dislikedNamed =
      projectdislikeName != false && `  Disliked by ${projectdislikeName}`;
  }

  return (
    <div className='card z-depth-0 project-summary'>
      <div
        style={{
          position: 'absolute',
          right: '5px',
          bottom: '0',
        }}
      >
        <span
          onClick={e => like(e)}
          style={{ position: 'absolute', right: '40px', bottom: '56px' }}
        >
          <i className='material-icons'>thumb_up</i>
          {project.likes}
        </span>
        <span
          style={{
            marginLeft: '10px',
            position: 'absolute',
            right: '0',
            bottom: '56px',
          }}
          onClick={e => dislike(e)}
        >
          <i className='material-icons'>thumb_down</i>
          {project.dislikes}
        </span>
        <div
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {' '}
          {''}
          <span>
            {likedNames}
            {''}{' '}
          </span>{' '}
          <span style={{ color: 'red', float: 'right' }}>
            {''} {dislikedNamed}
            {''}
          </span>
        </div>
      </div>

      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>
          {project.authorFirstName} {project.authorLastName}{' '}
        </p>
        <p className='grey-text'>
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
      <p
        style={{
          marginLeft: '24px',
          marginBottom: '20px',
          display: 'inline-block',
        }}
      >
        {' '}
        {project.comment && ` ${project.comment.length} Comments`}
      </p>
    </div>
  );
}

const mapDispathToprops = (state, ownProps) => {
  const id = ownProps.auth.uid;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;
  return {
    user,
  };
};
export default connect(mapDispathToprops, {
  dislikePost,
  likePost,
  removeDislikePost,
  removeLikePost,
})(ProjectSummary);
