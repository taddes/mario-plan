export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Async call to db (paused dispatch)
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Tad',
      authorLastName: 'Kor',
      authorId: 12345,
      createdAt: new Date()

    }).then(() => {
      // dispatch action
      dispatch({type: 'CREATE_PROJECT', project})
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'CREATE_PROJECT_ERROR', err});
    })
  }
};