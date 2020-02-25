import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard.js";
import Navbar from "./components/layout/Navbar.js";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn.js";
import SignUp from "./components/auth/SignUp.js";
import CreateProject from "./components/projects/CreateProject.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
