import React, { Profiler } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import Users from '../users/Users.js';
function SignedInLinks(props, auth) {
  return (
    <ul className='right '>
      <li>
        <NavLink to='/create'>Create</NavLink>
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

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignedInLinks));

// <nav>
// <div class="nav-wrapper">
//   <a href="#!" class="brand-logo">Logo</a>
//   <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
//   <ul class="right hide-on-med-and-down">
//     <li><a href="sass.html">Sass</a></li>
//     <li><a href="badges.html">Components</a></li>
//     <li><a href="collapsible.html">Javascript</a></li>
//     <li><a href="mobile.html">Mobile</a></li>
//   </ul>
// </div>
// </nav>

// <ul class="sidenav" id="mobile-demo">
// <li><a href="sass.html">Sass</a></li>
// <li><a href="badges.html">Components</a></li>
// <li><a href="collapsible.html">Javascript</a></li>
// <li><a href="mobile.html">Mobile</a></li>
// </ul>
