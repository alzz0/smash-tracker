import projectReducer from './projectReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  hightestScore: userReducer,
});

export default rootReducer;
