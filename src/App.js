import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Dashboard from './components/dashboard/Dashboard.js';
import Navbar from './components/layout/Navbar.js';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';
import CreateProject from './components/projects/CreateProject.js';
import Profile from './components/profile/Profile.js';
import Users from './components/users/Users.js';
import Scoreboard from './components/scoreboard/Scoreboard';
import { setHighestScore } from './store/actions/userAction';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
          <Route path='/profile/:id' component={Profile} />
          <Route path='/users' component={Users} />
          <Route path='/scoreboard' component={Scoreboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
