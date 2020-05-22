import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import star from '../../images/star.png';
import { superUsers } from '../../constants';

import {
  incrementPoint,
  decrementPoint,
  setHighestScore,
} from '../../store/actions/userAction';

function Users({
  setHighestScore,
  users,
  incrementPoint,
  decrementPoint,
  auth,
}) {
  const newObj = users && Object.entries(users);
  const [points, setPoints] = useState(0);

  var highestNum = 0;

  useEffect(() => {
    setHighestScore(highestNum);
  });

  var scoreBoard =
    users &&
    users.map(user => {
      return user.points;
    });
  calculate();
  var champ = Math.max(scoreBoard);
  function calculate() {
    //var highestNum = 0;
    if (scoreBoard) {
      for (var i = 0; i < scoreBoard.length; i++) {
        if (scoreBoard[i] > highestNum) {
          highestNum = scoreBoard[i];
        }
      }
    }
  }

  let data =
    newObj &&
    newObj.reverse().map(user => {
      return (
        <div className='col s12 m6' key={user[1].id}>
          <Link key={user[1].id} to={`/profile/${user[1].id}`}>
            <div className='card z-depth-0 project-summary'>
              {user[1].points == highestNum ? (
                <img
                  style={{ position: 'absolute', right: '0' }}
                  width={50}
                  height={50}
                  src={star}
                />
              ) : null}
              <div
                style={{ height: '200px' }}
                className='card-content grey-text text-darken-3'
              >
                <span
                  style={{
                    color: user[1].points == highestNum ? 'gold' : '#000',
                    lineHeight: 'normal',
                    fontWeight: '500',
                  }}
                  className='card-title'
                >
                  {user[1].firstName} {user[1].lastName}
                  <p
                    style={{
                      fontSize: '16px',
                      color: 'gray',
                      fontWeight: '400',
                    }}
                  >
                    Bio: {user[1].bio}
                  </p>
                </span>

                <p>Points: {user[1].points}</p>
              </div>
            </div>
          </Link>
          <button
            className='btn-floating btn-large waves-effect waves-light red'
            onClick={() => decrementPoint(user[1].id)}
            disabled={superUsers.includes(auth.uid) ? false : true}
          >
            <i className=' material-icons'>exposure_neg_1</i>
          </button>
          <button
            disabled={superUsers.includes(auth.uid) ? false : true}
            className='btn-floating btn-large waves-effect waves-light red'
            onClick={() => incrementPoint(user[1].id)}
          >
            <i className='add material-icons'>exposure_plus_1</i>
          </button>
        </div>
      );
    });
  let sortedData = data && data.sort((a, b) => b - a);

  return (
    <div className='dashboard-container'>
      <div className='row'>{data}</div>
    </div>
  );
}

const mapDispatchToprops = dispatch => {
  return {
    incrementPoint: points => dispatch(incrementPoint(points)),
    decrementPoint: points => dispatch(decrementPoint(points)),
    setHighestScore: highestNum => dispatch(setHighestScore(highestNum)),
  };
};
const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToprops),
  firestoreConnect([
    {
      collection: 'users',
      orderBy: ['points'],
    },
  ])
)(withRouter(Users));

// citiesRef.orderBy("name").limit(3)

// export default compose(
//   connect(mapStateToProps, { setHighestScore }),
//   firestoreConnect([
//     {
//       collection: 'projects',
//       orderBy: ['createdAt', 'desc'],
//     },
//     { collection: 'notifications', limit: 6, orderBy: ['time', 'desc'] },
//   ])
// )(Dashboard);
