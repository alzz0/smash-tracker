import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions.js";
function SignUp({ auth, authError, signUp }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });

  if (auth.uid) return <Redirect to="/" />;
  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    signUp(user);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" id="email" />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} type="password" id="password" />
        </div>

        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} type="text" id="firstName" />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} type="text" id="lastName" />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
