export const addComment = (comment, id) => {
  console.log(comment);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const db = firebase.firestore();
    const project = db.collection('projects').doc(id);
    let uniqueId = Date.now();
    console.log(uniqueId);
    const commentObj = {
      comment,
      commentId: uniqueId,
      createdAt: new Date(),
    };

    project.update({
      comment: firebase.firestore.FieldValue.arrayUnion(commentObj),
    });
  };
};

export const deleteComment = (projectId, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const comments = firestore.collection('projects').doc(projectId);
    return comments.get().then(doc => {
      return comments.update({
        comment: doc
          .data()
          .comment.filter((com, index) => com.commentId !== id),
      });
    });
  };
};

export const editComment = (projectId, id, updatedComment, user) => {
  let newComment = {
    comment: {
      comment: `${updatedComment} 89456799`,
      user,
    },
    commentId: id,
    createdAt: new Date(),
  };

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const comments = firestore.collection('projects').doc(projectId);

    return comments.get().then(doc => {
      doc.data().comment.map(com => {
        let oldComments = [...doc.data().comment];
        let filtCom = oldComments.filter(c => c.commentId != id);

        return comments.update({
          comment: [...filtCom, newComment],
        });
      });
    });
  };
};
