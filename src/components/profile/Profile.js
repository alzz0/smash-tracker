import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
function Profile({ user }) {
  return (
    <div>
      <h3>
        Name:{user && user.firstName} {user && user.lastName}
      </h3>
      <h4>Score: {user && user.points}</h4>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;

  return {
    user: user,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'users',
    },
  ])
)(withRouter(Profile));
