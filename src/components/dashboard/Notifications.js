import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
const Notifications = (props, auth) => {
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
                    <Link
                      to={`/profile/${props.auth.uid}`}
                      className="pink-text"
                    >
                      {item.user}{" "}
                    </Link>
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

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(withRouter(Notifications));
