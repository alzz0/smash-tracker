import React, { useEffect, useState } from 'react';
import moment from 'moment';
import LikesPopUpModal from '../../commons/LikesPopUpModal';

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
    e.preventDefault();
    e.stopPropagation();
    if (auth.uid) {
      if (projectLikedBy.includes(auth.uid)) {
        removeLikePost(project.id, user);
      }

      if (projectDislikedBy.includes(auth.uid) && auth.uid) {
        removeDislikePost(project.id, user);
      } else {
        dislikePost(project.id, user);
      }
    }
  }
  function like(e) {
    e.preventDefault();
    e.stopPropagation();
    if (auth.uid) {
      if (projectDislikedBy.includes(auth.uid)) {
        removeDislikePost(project.id, user);
      }
      if (projectLikedBy.includes(auth.uid) && auth.uid) {
        removeLikePost(project.id, user);
      } else {
        likePost(project.id, user);
      }
    }
  }
  if (projectLikeName && projectLikeName.length > 1) {
    var likedNames = <LikesPopUpModal names={projectLikeName} />;
  } else {
    var likedNames =
      projectLikeName != false && ` Liked by ${projectLikeName}    `;
  }

  if (projectdislikeName && projectdislikeName.length > 1) {
    var dislikedNamed = <LikesPopUpModal dislike names={projectdislikeName} />;
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
        {projectLikedBy && (
          <span
            className={
              projectLikedBy.includes(auth.uid)
                ? 'like-dislike-active'
                : 'like-dislike'
            }
            onClick={e => like(e)}
            style={{ position: 'absolute', right: '40px', bottom: '56px' }}
          >
            <i
              onClick={() =>
                !auth.uid && alert('Sign in to make your opinion count ')
              }
              title={auth.uid ? '' : 'Sign in to make your opinion count'}
              className='material-icons thumb-icon'
            >
              thumb_up
            </i>

            {project.likes}
          </span>
        )}
        {projectDislikedBy && (
          <span
            className={
              projectDislikedBy.includes(auth.uid)
                ? 'like-dislike-active'
                : 'like-dislike'
            }
            style={{
              marginLeft: '10px',
              position: 'absolute',
              right: '0',
              bottom: '56px',
            }}
            onClick={e => dislike(e)}
          >
            <i
              onClick={() =>
                !auth.uid && alert('Sign in to make your opinion count ')
              }
              title={auth.uid ? '' : 'Sign in to make your opinion count'}
              className='material-icons thumb-icon'
            >
              thumb_down
            </i>

            <span>{project.dislikes}</span>
          </span>
        )}
        <div
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <span>{likedNames}</span>

          <span style={{ color: '#e91e63 ' }}>{dislikedNamed}</span>
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
        {project.comment &&
          ` ${project.comment.length} ${
            project.comment.length < 2 ? 'Comment' : 'Comments'
          }`}
      </div>
      <p
        style={{
          marginLeft: '24px',
          marginBottom: '20px',
          display: 'inline-block',
        }}
      >
        {' '}
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
