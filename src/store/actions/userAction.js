export const incrementPoint = userId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(1);

    const storyRef = db.collection('users').doc(userId);

    storyRef.update({ points: increment });
  };
};

export const decrementPoint = userId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const db = firebase.firestore();

    const decrement = firebase.firestore.FieldValue.increment(-1);
    const storyRef = db.collection('users').doc(userId);

    storyRef.update({ points: decrement });
  };
};

export const setHighestScore = score => (dispatch, getState) => {
  console.log(score);

  dispatch({
    type: 'SET_HIGHEST_SCORE',
    payload: score,
  });
  console.log(score);
};
