export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Async call to db (paused dispatch)

    // dispatch action
    dispatch({type: 'CREATE_PROJECT', project})
  }
};