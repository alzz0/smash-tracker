export const deleteSuperUser = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const db = firebase.firestore();
    const userBio = db.collection('users').doc(id);
    userBio.update({ superUser: false });
  };
};

export const createSuperUser = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const db = firebase.firestore();
    const userBio = db.collection('users').doc(id);
    userBio.update({ superUser: true });
  };
};
