import React, { Profiler } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import Users from "../users/Users.js";
function SignedInLinks(props, auth) {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Post</NavLink>
      </li>
      <li>
        <NavLink to="/users">Smashers</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <span
          to="/"
          className="btn btn-floating pink lighten-1"
          onClick={() => props.history.push(`/profile/${props.auth.uid}`)}
        >
          {props.profile.initial}
        </span>
      </li>
    </ul>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignedInLinks));
