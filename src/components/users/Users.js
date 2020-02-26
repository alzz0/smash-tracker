import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import UserCard from "./UserCard";
function Users({ users, user }) {
  const newObj = users && Object.entries(users);

  return (
    <div className="dashboard-container">
      <div className="row">
        {newObj &&
          newObj.map(user => {
            return (
              <div className="col s12 m6">
                <Link key={user[1].id} to={`/profile/${user[1].id}`}>
                  <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                      <span className="card-title">
                        {user[1].firstName} {user[1].lastName}
                      </span>
                      <p>
                        {"project.authorFirstName"} {"project.authorLastName"}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const users = state.firestore.data.users;

  return {
    users: users
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "users"
    }
  ])
)(withRouter(Users));
