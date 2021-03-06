import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
// For sync of firestore data with state in background
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer