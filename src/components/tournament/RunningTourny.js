import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { endTourny } from '../../store/actions/tournamentActions';

function RunningTourny({ endTourny, tournamentScoreboard }) {
  let participants =
    tournamentScoreboard &&
    tournamentScoreboard[0].users.map((users) => {
      return (
        <Fragment>
          <div className='match'>{users.name}</div>
        </Fragment>
      );
    });

  return (
    <div>
      <h1>{tournamentScoreboard && tournamentScoreboard[0].name}</h1>

      <div className='container grid'>
        <div className='round'>
          <div className='round'>
            {participants && participants.slice(0, 1)}
            <div className='link'></div>
            <div className='match'>
              {' '}
              {participants && participants.slice(1, 2)}
            </div>
          </div>
          <div className='round'>
            <div className='match'>
              {participants && participants.slice(2, 3)}
            </div>
            <div className='link'></div>
            <div className='match'>
              {participants && participants.slice(3, 4)}
            </div>
          </div>
        </div>
        <div className='round justify-space-around'>
          <div className='match'>
            {participants && participants.slice(0, 1)}
          </div>
          <div className='link'></div>
          <div className='match'>
            {participants && participants.slice(3, 4)}
          </div>
        </div>
        <div className='round'>
          <div className='match'>
            {participants && participants.slice(0, 1)}
          </div>
        </div>
      </div>

      <button className='waves-effect waves-light btn' onClick={endTourny}>
        End Tournament
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  runningTourny: state.firestore.ordered.runningTourny,
  tournamentScoreboard: state.firestore.ordered.tournamentScoreboard,
});
const mapDispatchToprops = (dispatch) => ({
  endTourny: () => dispatch(endTourny()),
});
export default compose(
  connect(mapStateToProps, mapDispatchToprops),
  firestoreConnect([
    { collection: 'runningTourny' },
    { collection: 'tournamentScoreboard', orderBy: ['createdAt', 'desc'] },
  ])
)(RunningTourny);
