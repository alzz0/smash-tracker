export const startTournament = (users, name) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const db = firebase.firestore();
    firestore.collection('tournamentScoreboard').add({
      users,
      name,
      createdAt: new Date(),
    });
  };
};

export const startTourny = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const runningTourny = firestore
      .collection('runningTourny')
      .doc('PmMrlcBmDSQC0xT2dzcs');
    runningTourny.update({ runningTourny: true });
  };
};
export const endTourny = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const runningTourny = firestore
      .collection('runningTourny')
      .doc('PmMrlcBmDSQC0xT2dzcs');
    runningTourny.update({ runningTourny: false });
  };
};

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    // creating new id
    // const ref = firestore.collection('projects').doc();
    // const id = ref.id;

    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        //id,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
