import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { SearchBox } from '../../utils/SearchBox';
import './users.css';
import { superUsers } from '../../constants';
import { calcScore } from '../../store/actions/calcScore';
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
  calcScore,
}) {
  const newObj = users && Object.entries(users);

  const [points, setPoints] = useState(0);
  const [searchUser, setSearchUser] = useState('');

  // var highestNum = undefined;
  // var secondHighest = undefined;
  // var thirdHighest = undefined;

  // useEffect(() => {
  //   setHighestScore(highestNum);
  // });

  // var scoreBoard =
  //   users &&
  //   users.map(user => {
  //     return user.points;
  //   });
  // calculate();

  // function calculate() {
  //   if (scoreBoard) {
  //     for (var i = 0; i < scoreBoard.length; i++) {
  //       if (scoreBoard[i] > highestNum) {
  //         highestNum = scoreBoard[i];
  //       }
  //     }
  //     // Get second highest score
  //     let indexOfHighest = scoreBoard.indexOf(highestNum);

  //     scoreBoard.splice(indexOfHighest, 1);
  //     secondHighest = Math.max(...scoreBoard);
  //   }

  //   // Get third highest score
  //   if (secondHighest) {
  //     if (secondHighest === secondHighest) {
  //       var indexOfSecondHighest = scoreBoard.indexOf(highestNum);
  //       console.log(secondHighest);
  //     }

  //     scoreBoard.splice(indexOfSecondHighest, 1);
  //     thirdHighest = Math.max(...scoreBoard);
  //   }
  // }

  function endGame(e) {
    e.preventDefault();

    users.map(user => {
      if (user.points > 0) {
        let result = window.confirm('Are you sure?');
        if (result) {
          calcScore(users);
        }
      }
    });
  }
  function handleInput(e) {
    e.preventDefault();
    setSearchUser(e.target.value);
  }

  let filteredUsers =
    newObj &&
    newObj.filter(user => {
      return user[1].firstName.toLowerCase().includes(searchUser.toLowerCase());
    });

  let data =
    filteredUsers &&
    filteredUsers.reverse().map((user, index) => {
      return (
        <div className='col s12 m6' key={user[1].id}>
          <Link key={user[1].id} to={`/profile/${user[1].id}`}>
            <div className='card z-depth-0 project-summary'>
              {index === 0 ? (
                <i
                  style={{
                    color: 'gold',
                    position: 'absolute',
                    right: '0',
                    fontSize: '65px',
                  }}
                  className='material-icons'
                >
                  star
                </i>
              ) : index === 1 ? (
                <i
                  style={{
                    color: '#aaa9ad',
                    position: 'absolute',
                    right: '0',
                    fontSize: '65px',
                  }}
                  className='material-icons'
                >
                  star
                </i>
              ) : index === 2 ? (
                <i
                  style={{
                    color: '#b08d57',
                    position: 'absolute',
                    right: '0',
                    fontSize: '65px',
                  }}
                  className='material-icons'
                >
                  star
                </i>
              ) : (
                ''
              )}

              <div
                style={{ height: '200px' }}
                className='card-content grey-text text-darken-3'
              >
                <span
                  className={`card-title custom-card ${
                    index === 0
                      ? 'gold'
                      : index === 1
                      ? 'silver'
                      : index === 2
                      ? 'bronze'
                      : ''
                  }`}
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
            // disabled={superUsers.includes(auth.uid) ? false : true}
            disabled={
              superUsers.includes(auth.uid) && user[1].points > 0 ? false : true
            }
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

  return (
    <div className='dashboard-container'>
      <SearchBox handleInput={handleInput} />
      <div className='row'>{data}</div>
      <span style={{ margin: '40px' }}>
        <button
          disabled={superUsers.includes(auth.uid) ? false : true}
          type='submit'
          className='waves-effect waves-light btn-large'
          onClick={e => endGame(e)}
        >
          End Game
        </button>
      </span>
    </div>
  );
}

const mapDispatchToprops = dispatch => {
  return {
    incrementPoint: points => dispatch(incrementPoint(points)),
    decrementPoint: points => dispatch(decrementPoint(points)),
    setHighestScore: highestNum => dispatch(setHighestScore(highestNum)),
    calcScore: scores => dispatch(calcScore(scores)),
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
