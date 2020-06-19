import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { createbio } from '../../store/actions/userAction';
import { signOut } from '../../store/actions/authActions';
function Profile({ user, createbio, auth, history, signOut, match }) {
  const [bio, setBio] = useState({ bio: '' });
  const [edit, setEdit] = useState(false);

  if (auth.createdAt) {
    var date = auth.createdAt;

    var day = new Date(parseInt(date, 10));
    var dayString = day.toString('MM/dd/yy HH:mm:ss');
  }

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
    <div className='container section project-details'>
      <div className='card z-depth-0 project-summary'>
        <div className='card-content'>
          <h3>
            Name: {user && user.firstName} {user && user.lastName}
          </h3>
          <h4>Score: {user && user.points}</h4>
          {!edit ? (
            <h4>
              Bio: {user && user.bio}{' '}
              <span style={{ marginLeft: '10px' }}>
                {user && user.id
                  ? auth.uid === user.id &&
                    user.id && (
                      <i
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          auth.uid === user.id && setEdit(!edit);
                        }}
                        className='material-icons'
                      >
                        mode_edit
                      </i>
                    )
                  : null}
              </span>
            </h4>
          ) : (
            <form onSubmit={handleSubmit} className='white'>
              <input
                value={bio.bio}
                type='text'
                onChange={handleChange}
                name={'bio'}
                placeholder={user.bio || ' Update Bio'}
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

        <div className='card-action gray lighten-4 grey-text'>
          <span className='card-title'>
            <p className='gray-text' style={{ fontSize: '18px' }}>
              Joined the party on{' '}
              {dayString !== undefined && dayString.slice(0, 16)}
            </p>
          </span>

          <span className='card-title'></span>
        </div>
      </div>
      <button
        className='waves-effect waves-light btn'
        onClick={() => history.goBack()}
      >
        Back
      </button>

      {match.params.id === auth.uid && (
        <a className=' waves-effect waves-light btn' onClick={signOut}>
          Log Out
        </a>
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
  connect(mapStateToProps, { createbio, signOut }),
  firestoreConnect([
    {
      collection: 'users',
    },
  ])
)(withRouter(Profile));
