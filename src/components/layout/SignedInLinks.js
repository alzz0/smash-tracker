import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

function SignedInLinks(props) {
  return (
    <ul className='right '>
      <li>
        <NavLink to='/tournament'>Tournament</NavLink>
      </li>
      <li>
        <NavLink to='/users'>Fighters</NavLink>
      </li>
      <li>
        <NavLink to='/scoreboard'>Scoreboard</NavLink>
      </li>

      <li>
        <span
          to='/'
          className='btn btn-floating pink lighten-1'
          onClick={() => props.history.push(`/profile/${props.auth.uid}`)}
        >
          {props.profile.initial}
        </span>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignedInLinks));
