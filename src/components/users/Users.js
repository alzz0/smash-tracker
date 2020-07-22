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
  superusers,
}) {
  const newObj = users && Object.entries(users);
  let superusersList = [];
  const [points, setPoints] = useState(0);
  const [searchUser, setSearchUser] = useState('');
  const [checked, setChecked] = useState(false);
  const [startCurrentGame, setStartCurrentGame] = useState(false);
  const [sortedUsers, setSortedUsers] = useState();
  var currentRunningGame = runningGame && runningGame[0].runningGame;

  function beginGame(e) {
    e.preventDefault();
    startGame();
  }

  useEffect(() => {
    superusers && superusers.map(user => superusersList.push(user.id));
    console.log(superusersList);
  }, []);
  if (superusersList.includes('jfZSJ5LfxDwzgONl1JZ7')) {
    console.log('yes');
  }

  useEffect(() => {
    handleSort();
  }, [users]);
  function handleSort() {
    // sort by total points

    let sortedUsersArr =
      newObj && newObj.sort((a, b) => a[1].sumPoints - b[1].sumPoints);
    setSortedUsers(sortedUsersArr);
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
  }

  function handleSwitchChange(e) {
    e.preventDefault();
    e.stopPropagation();

    setChecked(!checked);
    //setChecked({ ...checked, [e.target.id]: !e.target.value });
  }
  if (currentRunningGame === true) {
    var filteredUsers =
      newObj &&
      newObj.filter(user => {
        return user[1].firstName
          .toLowerCase()
          .includes(searchUser.toLowerCase());
      });
  } else {
    var filteredUsers =
      sortedUsers &&
      sortedUsers.filter(user => {
        return user[1].firstName
          .toLowerCase()
          .includes(searchUser.toLowerCase());
      });
  }

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
                <div
                  className={`tier-label ${
                    user[1].tier === 'A'
                      ? 'a-tier'
                      : user[1].tier === 'B'
                      ? 'b-tier'
                      : user[1].tier === 'C'
                      ? 'c-tier'
                      : ''
                  }`}
                >
                  {user[1].tier}
                </div>
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

                {/* <p>Points: {user[1].points}</p> */}
                <p>
                  {currentRunningGame
                    ? `Points ${user[1].points}`
                    : `Total points ${user[1].sumPoints}`}
                </p>
              </div>
            </div>
          </Link>
          <button
            className='btn-floating btn-large waves-effect waves-light red'
            onClick={() => decrementPoint(user[1].id)}
            // disabled={superUsers.includes(auth.uid) ? false : true}
            disabled={
              superusers && superusers.includes(auth.uid) && user[1].points > 0
                ? false
                : true
            }
          >
            <i className=' material-icons'>exposure_neg_1</i>
          </button>
          <button
            disabled={
              superusers && superusers.includes(auth.uid) && currentRunningGame
                ? false
                : true
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
          disabled={superusers && superusers.includes(auth.uid) ? false : true}
          type='submit'
          className='waves-effect waves-light btn-large'
          onClick={e => endGame(e)}
        >
          End Game
        </button>
        <button
          disabled={superusers && superusers.includes(auth.uid) ? false : true}
          type='submit'
          className='waves-effect waves-light btn-large'
          onClick={e => {
            currentRunningGame ? cancelStartGame(e) : beginGame(e);
          }}
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
  let superU =
    state.firestore.ordered.superusers &&
    state.firestore.ordered.superusers.map(u => {
      return u.user;
    });
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
    runningGame: state.firestore.ordered.runningGame,
    superusers: superU,
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
    {
      collection: 'superusers',
    },
  ])
)(withRouter(Users));
