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

  if (user) {
    var date = user.createdAt.seconds * 1000;

    var day = new Date(parseInt(date, 10));
    var dayString = day.toString('MM/dd/yy HH:mm:ss');
    var sumPoints = user.sumPoints;
    var fullName = `${user.firstName} ${user.lastName}`;
    var gamesPlayed = user.gamesPlayed;
    var averageScore = user.sumPoints / user.gamesPlayed || 0;
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
  function makeFigherOfTheNight(e) {
    console.log(e.target.value);
  }

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0 project-summary'>
        <div className='card-content'>
          <h3>Name: {fullName}</h3>
          <h4>Score: {sumPoints}</h4>
          <h4>Games Played: {gamesPlayed}</h4>
          <h4>Score Average: {user && averageScore.toFixed(2)}</h4>
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
                maxLength='100'
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
          {/* <h4>Fighter of the Night: </h4>
          <div className='switch'>
            <label>
              Off
              <input type='checkbox' onClick={makeFigherOfTheNight} />
              <span className='lever'></span>
              On
            </label>
          </div> */}

          {/* <span style={{ display: 'inline-flex' }}> */}
          {/* <h4 onClick={makeFigherOfTheNight}>
              <i className='material-icons'>star_border</i>
            </h4>
            <h4>
              <i className='material-icons'>star_border</i>
            </h4>
            <h4>
              <i className='material-icons'>star_border</i>
            </h4>
            <h4>
              <i className='material-icons'>star_border</i>
            </h4>
            <h4>
              <i className='material-icons'>star_border</i>
            </h4>
          </span> */}
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
