export const addSuperUser = user => {
  console.log(user);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('superusers').add({
      user,
    });
  };
};

export const deleteSuperUser = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();

    db.collection('superusers').doc(id).delete();
  };
};
