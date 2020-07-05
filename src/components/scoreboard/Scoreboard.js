import React, { Fragment, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
function Scoreboard({ scoreboard, users }) {
  const [stateData, setStateData] = useState();
  const [leaderBoards, setLeaderBoard] = useState(false);
  const [scoreToggle, setScoreToggle] = useState(true);
  const [filterValue, setFilterValue] = useState('sumPoints');
  var fullData = [];
  let days = [];
  var points = [];

  useEffect(() => {
    handleSort();
  }, [users]);

  useEffect(() => {
    handleFilter();
  }, [scoreboard]);
  var initData =
    scoreboard &&
    scoreboard.map(score => {
      days.push(score);
    });

  function handleSort(e) {
    // sort by avg
    if (e === 'averagePoints') {
      let sortedUsers =
        users &&
        users.slice().sort((a, b) => {
          if (a.gamesPlayed > 0) {
            let aAvg = a.sumPoints / a.gamesPlayed;
            let bAvg = b.sumPoints / b.gamesPlayed;

            return aAvg < bAvg ? 1 : -1;
          }
        });
      setLeaderBoard(sortedUsers);
    } else {
      let sortedUsers =
        users &&
        users.slice().sort((a, b) => (a.sumPoints < b.sumPoints ? 1 : -1));
      setLeaderBoard(sortedUsers);
    }
  }
  function handleFilter(id) {
    var data =
      scoreboard &&
      scoreboard.map(score => {
        days.push(score);
        let latestScoresId = days[0].id;
        if (score.id === id) {
          score.scores.map(element => {
            fullData.push(element);
          });
          if (id) {
            setStateData(fullData);
          }
        }
        if (score.id === latestScoresId && !id) {
          score.scores.map(element => {
            fullData.push(element);
          });
          setStateData(fullData);
        }
      });
  }

  function handleFilterSort(e) {
    setFilterValue(e.target.value);
    handleSort(e.target.value);
  }

  let highScores = !scoreToggle ? (
    <Fragment>
      <button
        className='waves-effect waves-light btn'
        onClick={() => setScoreToggle(true)}
      >
        {' '}
        highScores
      </button>
      <select
        style={{ maxWidth: '100%', fontSize: '16px' }}
        className='browser-default'
        onChange={e => handleFilter(e.target.value)}
      >
        {days &&
          days.map(day => (
            <option key={day.id} id={day.id} value={day.id}>
              {moment(day.createdAt.toDate()).calendar()}
            </option>
          ))}
      </select>

      <tbody>
        <tr>
          <th>Name</th>
          <th>Points</th>
        </tr>

        {stateData &&
          stateData.reverse().map(data => {
            return (
              <Fragment key={data.id}>
                <tr>
                  <td>{data.firstName}</td>
                  <th>{data.points}</th>
                </tr>
              </Fragment>
            );
          })}
      </tbody>
    </Fragment>
  ) : (
    <Fragment>
      <button
        className='waves-effect waves-light btn'
        onClick={() => setScoreToggle(false)}
      >
        {' '}
        History
      </button>
      <select
        style={{ maxWidth: '100%', fontSize: '16px' }}
        className='browser-default'
        onChange={e => handleFilterSort(e)}
        // defaultValue={filterValue}
        defaultValue=''
      >
        <option disabled={true} value=''>
          Filter by highest scores or highest average
        </option>
        <option key={'sumPoints'} id={'sumPoints'} value={'sumPoints'}>
          Totalpoints
        </option>
        <option
          key={'averagePoints'}
          id={'averagePoints'}
          value={'averagePoints'}
        >
          Average Points
        </option>
      </select>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Total</th>
          <th>Average</th>
        </tr>

        {leaderBoards &&
          leaderBoards.map(data => {
            let avg = data.sumPoints / data.gamesPlayed;
            return (
              <Fragment key={data.id}>
                <tr>
                  <td>{data.firstName}</td>
                  <td>{data.sumPoints}</td>
                  <td>{avg.toFixed(2) || 0}</td>
                </tr>
              </Fragment>
            );
          })}
      </tbody>
    </Fragment>
  );

  return highScores;
}

const mapStateToProps = state => {
  return {
    scoreboard: state.firestore.ordered.scoreboard,

    users: state.firestore.ordered.users,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'scoreboard',
      orderBy: ['createdAt', 'desc'],
    },
    {
      collection: 'users',
    },
  ])
)(Scoreboard);
