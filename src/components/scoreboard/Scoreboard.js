import React, { Fragment, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
function Scoreboard({ scoreboard }) {
  const [stateData, setStateData] = useState();
  var fullData = [];
  let days = [];
  var points = [];
  useEffect(() => {
    handleFilter();

    // REVISIT TO CALCULATE TOTAL SCORES PER USER
    // if (scoreboard) {
    //   for (var key in scoreboard) {
    //     var data = scoreboard[key].scores;

    //     data.forEach(function (item) {
    //       Object.keys(item).forEach(function (key) {
    //         console.log(item.id, item.points);
    //         //console.log('key:' + key + 'value:' + item[key]);
    //       });
    //     });
    //     var value = scoreboard.map(function (score, x) {
    //       console.log(score);
    //       var val = score.scores;
    //       val.map(score => {
    //         data.map(d => {
    //           if (d.id === 'yxHKf6gbiMVJCyW5PqLTUEDiYu23') {
    //             points.push(d.points);
    //             //console.log(points[0]);
    //             console.log(d.points);

    //             // console.log(score.firstName, score.points + d.points);
    //             // console.log(
    //             //   [score.points, d.points].reduce((a, b) => a + b, 0)
    //             // );
    //           }
    //         });

    //         return score;
    //       });
    //     });
    //   }
    //   var unique = points.filter(function (elem, index, self) {
    //     return index === self.indexOf(elem);
    //   });
    //   console.log(unique);
    //   // let newPoints = new Set(points);
    //   // console.log(newPoints);
    //   var sum = unique.reduce((a, b) => a + b);
    //   console.log(sum);
    // }
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
