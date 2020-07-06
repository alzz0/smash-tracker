export const calcScore = scores => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const db = firebase.firestore();

    const runningGame = firestore
      .collection('runningGame')
      .doc('ZFgGoW0zylu7WjoK3sb8');

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
            // write code here to update total

            snapShot.docs.forEach(doc => {
              let points = doc.get('points');
              let prevSumPoints = doc.get('sumPoints');
              let totalGamesPlayed = doc.get('gamesPlayed');

              if (points > 0) {
                doc.ref.update({
                  sumPoints: prevSumPoints + points,
                  gamesPlayed: totalGamesPlayed + 1,
                  points: 0,
                });
              }
            });
          });
      });
    runningGame.update({
      runningGame: false,
    });
  };
};
