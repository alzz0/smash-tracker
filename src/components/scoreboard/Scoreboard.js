import React, { Fragment, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
function Scoreboard({ scoreboard, users }) {
  const [stateData, setStateData] = useState();
  const [leaderBoards, setLeaderBoard] = useState(false);
  var fullData = [];
  let days = [];
  var points = [];
  //console.log(users);

  // useEffect(
  //   users => {
  //     // users &&
  //     //   users.map(user => {
  //     //     console.log(user);
  //     //   });
  //     console.log(users && users);
  //     const list = [
  //       { color: 'white', size: 'XXL' },
  //       { color: 'red', size: 'XL' },
  //       { color: 'black', size: 'M' },
  //     ];
  //     //console.log(list);
  //     // console.log(users);

  //     var sortedUsers =
  //       users && users.sort((a, b) => (a.sumPoints > b.sumPoints ? 1 : -1));

  //     // users && users.sort((a, b) => b - a);
  //   },
  //   [users]
  // );

  useEffect(() => {
    handleFilter();
  }, [scoreboard]);
  var initData =
    scoreboard &&
    scoreboard.map(score => {
      days.push(score);
    });
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

  let highScores = !leaderBoards ? (
    <Fragment>
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
      <tbody>
        <tr>
          <th>TOTAL</th>
          <th>avg</th>
        </tr>

        {users &&
          users.reverse().map(data => {
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
