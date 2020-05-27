import { clearScore } from './userAction';
export const calcScore = scores => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const db = firebase.firestore();

    firestore
      .collection('scoreboard')
      .add({
        scores,
        createdAt: new Date(),
      })
      .then(() => {
        // clear all points after end of night
        db.collection('users')
          .get()
          .then(snapShot => {
            snapShot.docs.forEach(doc => {
              doc.ref.update({
                points: 0,
              });
            });
          });
      });
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
