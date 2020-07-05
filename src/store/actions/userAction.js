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
export const setScoreSum = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let scoreIds = ['5ISbQ0MaoKw9xaNhRDhg', 'Sm8M4QIHNWIcOIXTZ5eH'];
    let totals = [];
    const firebase = getFirebase();
    const db = firebase.firestore();
    for (let i = 0; i < scoreIds.length; i++) {
      db.collection('scoreboard')
        .doc(scoreIds[i])

        .get()
        .then(QuerySnapshot => {
          let results = QuerySnapshot.get('scores');
        });
    }
  };
};

export const setHighestScore = score => (dispatch, getState) => {
  dispatch({
    type: 'SET_HIGHEST_SCORE',
    payload: score,
  });
};

export const createbio = bio => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firebase = getFirebase();
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const db = firebase.firestore();
    const userBio = db.collection('users').doc(authorId);
    userBio.update(bio);
  };
};
