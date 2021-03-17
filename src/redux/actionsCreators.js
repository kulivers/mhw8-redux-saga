import { createActions } from 'redux-actions';

// console.log(authoritizeSuccess); // function
// console.log(authoritizeSuccess.toString()); //string - 'AUTHORITIZE_SUCCESS'
// console.log(authoritizeSuccess()); //{type: 'AUTHORITIZE_SUCCESS'}
const requestActions = createActions({
  USERS: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILTURE: null,
    TEST_REQUEST: null,
  },
});

export const {
  users: {
    getRequest: getUsersRequest,
    getSuccess: getUsersSuccess,
    getFailture: getUsersFailture,
    testRequest: getTestRequest,
  },
} = requestActions;

const loginActions = createActions({
  AUTHORITIZE: null,
  AUTHORITIZE_SUCCESS: null,
  AUTHORITIZE_FAILTURE: null,
  SIGN_OUT: null,
});

export const {
  authoritizeSuccess: authoritizeSuccess,
  authoritizeFailture: authoritizeFailture,
  authoritize: authoritize,
  signOut: signOut,
} = loginActions;

// export { getUsersRequest, getUsersSuccess, getUsersFailture };
