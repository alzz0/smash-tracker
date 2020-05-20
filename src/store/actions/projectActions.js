export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};

export const dislikePost = postId => {
  console.log(postId);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const db = firebase.firestore();

    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('projects').doc(postId);

    storyRef.update({ dislikes: increment });
  };
};

export const likePost = postId => {
  console.log(postId);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const db = firebase.firestore();

    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('projects').doc(postId);

    storyRef.update({ likes: increment });
  };
};
