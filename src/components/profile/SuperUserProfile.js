import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import {
  addSuperUser,
  deleteSuperUser,
} from '../../store/actions/superUsersAction';

function SuperUserProfile({
  users,
  addSuperUser,
  superusers,
  deleteSuperUser,
}) {
  function selectedUser(e) {
    if (superUsersArr && !superUsersArr.includes(e.target.id)) {
      addSuperUser(e.target.id);
    }
  }

  let superUsersArr = [];
  const usersList =
    users &&
    users.map(user => {
      return (
        <div key={user.id}>
          <li onClick={user => selectedUser(user)} id={user.id}>
            {user.firstName}
          </li>
        </div>
      );
    });

  const superUsersList =
    superusers &&
    superusers.map(user => {
      superUsersArr.push(user.user);
      return (
        <div key={user.id}>
          <li onClick={() => deleteSuperUser(user.id)}>{user.user}</li>
        </div>
      );
    });

  return (
    <div>
      <h1>users</h1>
      {usersList}
      <h1>Superusers</h1>
      {superUsersList}
    </div>
  );
}

const mapDispatchToprops = dispatch => ({
  addSuperUser: user => dispatch(addSuperUser(user)),
  deleteSuperUser: id => dispatch(deleteSuperUser(id)),
});
const mapStateToProps = state => ({
  users: state.firestore.ordered.users,
  superusers: state.firestore.ordered.superusers,
});

export default compose(
  connect(mapStateToProps, mapDispatchToprops),
  firestoreConnect([
    { collection: 'users' },
    {
      collection: 'superusers',
    },
  ])
)(SuperUserProfile);