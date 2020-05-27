import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions.js';
import { Redirect, Link } from 'react-router-dom';
function SignIn({ signIn, authError, auth }) {
  const [user, setUser] = useState({ email: '', password: '' });
  if (auth.uid) return <Redirect to='/' />;
  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    signIn(user);
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>

        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input onChange={handleChange} type='email' id='email' />
        </div>

        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input onChange={handleChange} type='password' id='password' />
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
          <div className='red-text center'>
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
        <Link to='/signup'>Dont have an account? Sign up here.</Link>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
