export const createProject = project => {
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
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};

export const dislikePost = postId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const db = firebase.firestore();

    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('projects').doc(postId);

    storyRef.update({ dislikes: increment });
  };
};

export const likePost = postId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    const db = firebase.firestore();

    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('projects').doc(postId);

    storyRef.update({ likes: increment });
  };
};

export const deletePost = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();

    db.collection('projects').doc(id).delete();
  };
};

export const updateProjectContent = (updateProject, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firebase = getFirebase();
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const db = firebase.firestore();
    const project = db.collection('projects').doc(id);
    project.update(updateProject);
  };
};
