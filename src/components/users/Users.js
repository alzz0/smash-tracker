import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { star } from '../img/star.png';
import {
  incrementPoint,
  decrementPoint,
  setHighestScore,
} from '../../store/actions/userAction';

function Users({ setHighestScore, users, incrementPoint, decrementPoint }) {
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
        console.log(scoreBoard[i]);
        console.log('hightestnum', highestNum);
      }
    }
  }

  let data =
    newObj &&
    newObj.map(user => {
      console.log(user);

      return (
        <div className='col s12 m6'>
          <Link key={user[1].id} to={`/profile/${user[1].id}`}>
            <div className='card z-depth-0 project-summary'>
              <div className='card-content grey-text text-darken-3'>
                <span
                  style={{
                    color: user[1].points == highestNum ? 'red' : 'blue',
                  }}
                  className='card-title'
                >
                  {user[1].firstName} {user[1].lastName}
                </span>
                <p>{user[1].points}</p>
              </div>
            </div>
          </Link>
          <button
            className='btn-floating btn-large waves-effect waves-light red'
            onClick={() => decrementPoint(user[1].id)}
          >
            <i className=' material-icons'>exposure_neg_1</i>
          </button>
          <button
            className='btn-floating btn-large waves-effect waves-light red'
            onClick={() => incrementPoint(user[1].id)}
          >
            <i className='add material-icons'>exposure_plus_1</i>
          </button>
        </div>
      );
    });
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
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToprops),
  firestoreConnect([
    {
      collection: 'users',
    },
  ])
)(withRouter(Users));
