import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { SearchBox } from '../../utils/SearchBox';
import './users.css';
import { superUsers } from '../../constants';
import { calcScore } from '../../store/actions/calcScore';
import { startGame, cancelStartGame } from '../../store/actions/gameAction';
import {
  incrementPoint,
  decrementPoint,
  setHighestScore,
} from '../../store/actions/userAction';
var orderedUsersBy = 'sumPoints';
function Users({
  setHighestScore,
  cancelStartGame,
  startGame,
  users,
  runningGame,
  incrementPoint,
  decrementPoint,
  auth,
  calcScore,
}) {
  const newObj = users && Object.entries(users);

  const [points, setPoints] = useState(0);
  const [searchUser, setSearchUser] = useState('');
  const [checked, setChecked] = useState(false);
  const [startCurrentGame, setStartCurrentGame] = useState(false);
  var currentRunningGame = runningGame && runningGame[0].runningGame;

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
  function beginGame(e) {
    e.preventDefault();
    startGame();
  }

  function endGame(e) {
    e.preventDefault();

    for (let i = 0; i < users.length; i++) {
      //let playedUsers = [];
      // if (users[i].points > 0) {
      //   console.log(users[i]);
      //   playedUsers.push(users[i]);
      // }
      if (users[i].points > 0) {
        var result = window.confirm('Are you sure?');
        if (result) {
          calcScore(users);
        }
        break;
      }
    }
  }
  function handleInput(e) {
    e.preventDefault();
    setSearchUser(e.target.value);
  }

  function fighterPlaying(e) {
    e.preventDefault();
    //e.stopPropagation();
    //handleSwitchChange(e);
  }

  function handleSwitchChange(e) {
    e.preventDefault();
    e.stopPropagation();

    setChecked(!checked);
    //setChecked({ ...checked, [e.target.id]: !e.target.value });
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
          {/* <input
            type='checkbox'
            onChange={handleSwitchChange}
            value={checked}
            name={'user[1].id'}
            checked={checked}
          /> */}
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
            disabled={
              superUsers.includes(auth.uid) && currentRunningGame ? false : true
            }
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
        <button
          disabled={superUsers.includes(auth.uid) ? false : true}
          type='submit'
          className='waves-effect waves-light btn-large'
          onClick={e => {
            currentRunningGame ? cancelStartGame(e) : beginGame(e);
          }}
          //  onClick={e => beginGame(e)}
        >
          {currentRunningGame ? 'Cancel Game' : 'Start Game'}
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
    startGame: () => dispatch(startGame()),
    cancelStartGame: () => dispatch(cancelStartGame()),
  };
};
const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
    runningGame: state.firestore.ordered.runningGame,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToprops),
  firestoreConnect([
    { collection: 'runningGame' },
    {
      collection: 'users',
      orderBy: 'points',
    },
  ])
)(withRouter(Users));
