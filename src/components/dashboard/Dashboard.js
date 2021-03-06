import React, { useEffect } from 'react';
import Notifications from './Notifications.js';
import ProjectList from '../projects/ProjectList.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { setHighestScore, setScoreSum } from '../../store/actions/userAction';

function Dashboard({
  projects,
  auth,
  notifications,
  users,
  setHighestScore,
  setScoreSum,
}) {
  var highestNum = 1;

  useEffect(() => {
    setScoreSum();
  }, []);
  useEffect(() => {
    setHighestScore(highestNum);
  });
  var scoreBoard =
    users &&
    users.map((user) => {
      return user.points;
    });
  calculate();
  Math.max(scoreBoard);
  function calculate() {
    if (scoreBoard) {
      for (var i = 0; i < scoreBoard.length; i++) {
        if (scoreBoard[i] > highestNum) {
          highestNum = scoreBoard[i];
        }
      }
    }
  }

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <div style={{ textAlign: 'center', margin: '20px 0 10px 0' }}>
            <Link
              to="/create"
              className="btn-floating btn-large waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </Link>
          </div>
          <ProjectList auth={auth} projects={projects} />
        </div>
        <div style={{ paddingTop: '65px' }} className="col s12 m5 offset-m1">
          <Notifications
            notifications={notifications}
            auth={auth}
            users={users}
          />
        </div>
      </div>
      {/* version number */}
      <p style={{ opacity: '0.1' }}>v1.2.1</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  projects: state.firestore.ordered.projects,
  auth: state.firebase.auth,
  notifications: state.firestore.ordered.notifications,
  users: state.firestore.ordered.users,
  highestScore: state.hightestScore.score,
});

export default compose(
  connect(mapStateToProps, { setHighestScore, setScoreSum }),
  firestoreConnect([
    {
      collection: 'projects',
      orderBy: ['createdAt', 'desc'],
    },
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc'] },
  ])
)(Dashboard);
