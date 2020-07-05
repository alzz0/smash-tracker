export const startGame = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const runningGame = firestore
      .collection('runningGame')
      .doc('ZFgGoW0zylu7WjoK3sb8');
    runningGame.update({
      runningGame: true,
    });
  };
};

export const cancelStartGame = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const runningGame = firestore
      .collection('runningGame')
      .doc('ZFgGoW0zylu7WjoK3sb8');
    runningGame.update({
      runningGame: false,
    });
  };
};
