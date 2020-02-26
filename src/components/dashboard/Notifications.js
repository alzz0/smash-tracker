import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Notifications = (props, user, users) => {
  const { notifications } = props;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-content">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    {
                      <Link
                        to={{
                          pathname: `/profile/${item.userId}`,
                          state: { user: item }
                        }}
                        className="pink-text"
                      >
                        {item.user}{" "}
                      </Link>
                    }
                    <span>{item.content}</span>
                    <div className="grey-text note-date">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.auth.uid;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;

  return {
    user: user
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "users"
    }
  ])
)(withRouter(Notifications));
