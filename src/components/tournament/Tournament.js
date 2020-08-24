import React, { useState } from 'react';
import SetUpTourny from './SetUpTourny';
import RunningTounry from './RunningTourny';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
function Tournament({ runningTourny }) {
  const [createTourny, setCreateTourny] = useState(true);

  return (
    <div>
      {runningTourny && runningTourny[0].runningTourny === true ? (
        <RunningTounry />
      ) : (
        <SetUpTourny />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  runningTourny: state.firestore.ordered.runningTourny,
});
const mapDispatchToprops = (dispatch) => ({});
export default compose(
  connect(mapStateToProps, mapDispatchToprops),
  firestoreConnect([{ collection: 'runningTourny' }])
)(Tournament);
