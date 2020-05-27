import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar({ auth, profile }) {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo left '>
          SMASH
        </Link>
        {auth.isLoaded &&
          (auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />)}
      </div>
    </nav>
  );
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
