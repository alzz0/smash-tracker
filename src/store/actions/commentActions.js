export const addComment = (comment, id) => {
  console.log(comment);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const db = firebase.firestore();
    const project = db.collection('projects').doc(id);
    const commentObj = {
      comment,
      createdAt: new Date(),
    };
    project.update({
      comment: firebase.firestore.FieldValue.arrayUnion(commentObj),
    });
  };
};
