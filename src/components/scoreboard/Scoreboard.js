import React, { Fragment, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
function Scoreboard({ scoreboard }) {
  const [stateData, setStateData] = useState();
  var fullData = [];
  let days = [];
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

  return (
    <Fragment>
      <select
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
  );
}

const mapStateToProps = state => {
  return {
    scoreboard: state.firestore.ordered.scoreboard,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'scoreboard',
      orderBy: ['createdAt', 'desc'],
    },
  ])
)(Scoreboard);
