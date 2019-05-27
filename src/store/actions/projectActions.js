export const createProject = (project) => {
  return (dispatch, getState) => {
    // Async call to db (paused dispatch)

    // dispatch action
    dispatch({type: 'CREATE_PROJECT', project})
  }
};