import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { createbio } from '../../store/actions/userAction';
function Profile({ user, createbio, auth }) {
  const [bio, setBio] = useState({ bio: '' });
  const [edit, setEdit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    createbio(bio);
    setBio({ bio: '' });
    setEdit(false);
  }
  function handleChange(e) {
    setBio({ ...bio, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h3>
        Name: {user && user.firstName} {user && user.lastName}
      </h3>
      <h4>Score: {user && user.points}</h4>
      {!edit ? (
        <h4>
          Bio: {user && user.bio}{' '}
          <span style={{ marginLeft: '10px' }}>
            <i
              style={{ cursor: 'pointer' }}
              onClick={() => {
                auth.uid === user.id && setEdit(!edit);
              }}
              className='material-icons'
            >
              mode_edit
            </i>
          </span>
        </h4>
      ) : (
        <form onSubmit={handleSubmit} className='white'>
          <input
            value={bio.bio}
            type='text'
            onChange={handleChange}
            name={'bio'}
            placeholder={user.bio}
          />
          <div className='input-field' style={{ display: 'inline' }}>
            <button
              style={{ marginRight: '10px' }}
              className='btn pink lighten-1 z-depth-0'
            >
              Update!
            </button>
            <div className='input-field'>
              <button
                className='btn pink lighten-1 z-depth-0'
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;

  return {
    user: user,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps, { createbio }),
  firestoreConnect([
    {
      collection: 'users',
    },
  ])
)(withRouter(Profile));
