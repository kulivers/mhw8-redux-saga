import { combineReducers } from 'redux';
import { handleActions, handleAction } from 'redux-actions';
import {
  authoritizeFailture,
  authoritizeSuccess,
  authoritize,
  signOut,
  getUsersRequest,
  getUsersSuccess,
  getUsersFailture,
  getTestRequest,
} from './actionsCreators';
// console.log(authoritizeSuccess); // function
// console.log(authoritizeSuccess.toString()); //string - 'AUTHORITIZE_SUCCESS'
// console.log(authoritizeSuccess()); //{type: 'AUTHORITIZE_SUCCESS'}

const users = handleAction(
  [getUsersSuccess.toString()],
  (_state, action) => action.payload,
  []
);

const error = handleAction(
  [getUsersFailture.toString()],
  (_state, action) => action.payload,
  null
);

const requestState = handleActions(
  {
    [getUsersRequest.toString()]: (state, action) => 'LOADING',
    [getUsersSuccess.toString()]: (state, action) => 'SUCCESS',
    [getUsersFailture.toString()]: (state, action) => 'FAILTURE',
    [getTestRequest.toString()]: (state, action) => 'TEST',
  },
  'NOT_INITILIAIZED'
);
//userstate -loggedIn/not
const isLogged = handleActions(
  {
    [authoritizeSuccess.toString()]: (state, action) => true,
    [authoritizeFailture.toString()]: (state, action) => false,
  },
  false
);

export default combineReducers({ users, requestState, isLogged });
