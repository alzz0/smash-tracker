import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import {
  deleteSuperUser,
  createSuperUser,
} from '../../store/actions/superUsersAction';

function SuperUserProfile({
  users,

  deleteSuperUser,
  createSuperUser,
}) {
  const [superUsersState, setSuperUserState] = useState();
  const [controlPanelState, setControlPanelState] = useState(false);

  useEffect(() => {
    var newSuperUserArr = [];
    users &&
      users.map(user => {
        if (user.superUser === true) {
          newSuperUserArr.push(user.id);
        }
      });

    setSuperUserState(newSuperUserArr);
  }, [users]);

  function selectedUser(e) {
    if (superUsersState.includes(e.target.id) && e.target.id) {
      deleteSuperUser(e.target.id);
    } else if (e.target.id) {
      createSuperUser(e.target.id);
    }
  }

  const usersList =
    users &&
    users.map(user => {
      return (
        <Fragment key={user.id}>
          <li
            className={`user-list-super-profile collection-item ${
              superUsersState && superUsersState.includes(user.id)
                ? 'current-superuser'
                : ''
            }`}
            onClick={user => selectedUser(user)}
            id={user.id}
          >
            {user.firstName} {user.lastName}{' '}
            {user.superUser && (
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 'normal',
                  marginLeft: '10px',
                }}
              >
                Super User
              </span>
            )}
          </li>
        </Fragment>
      );
    });

  let setSuperUsersUi = <ul className='collection'>{usersList}</ul>;
  let conttrolPanelGrid = (
    <div className='row control-grid'>
      <div className='col s12 m6'>
        {' '}
        <div
          className='row'
          onClick={() => setControlPanelState('setSuperUsers')}
        >
          <div className='col s12 m6'>
            <div className='card blue-grey darken-1'>
              <div className='card-content white-text'>
                <span className='card-title'>Add Super User</span>
                {/* <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p> */}
              </div>
              <div className='card-action'>
                {` ${superUsersState && superUsersState.length} super users`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col s12 m6'>
        {' '}
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card blue-grey darken-1'>
              <div className='card-content white-text'>
                <span className='card-title'>Card Title</span>
                {/* <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p> */}
              </div>
              <div className='card-action'>
                <p>sub content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col s12 m6'>
        {' '}
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card blue-grey darken-1'>
              <div className='card-content white-text'>
                <span className='card-title'>Card Title</span>
                {/* <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p> */}
              </div>
              <div className='card-action'>
                <p>sub content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col s12 m6'>
        {' '}
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card blue-grey darken-1'>
              <div className='card-content white-text'>
                <span className='card-title'>Card Title</span>
                {/* <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p> */}
              </div>
              <div className='card-action'>
                <p>sub content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  if (controlPanelState === false) {
    return conttrolPanelGrid;
  } else if (controlPanelState === 'setSuperUsers') {
    return (
      <Fragment>
        <h1>Add / Remove Super users</h1>
        {setSuperUsersUi}
        <button
          className='waves-effect waves-light btn'
          onClick={() => setControlPanelState(false)}
        >
          close
        </button>
      </Fragment>
    );
  }
}

const mapDispatchToprops = dispatch => ({
  deleteSuperUser: id => dispatch(deleteSuperUser(id)),
  createSuperUser: user => dispatch(createSuperUser(user)),
});
const mapStateToProps = state => ({
  users: state.firestore.ordered.users,
});

export default compose(
  connect(mapStateToProps, mapDispatchToprops),
  firestoreConnect([{ collection: 'users' }])
)(SuperUserProfile);
