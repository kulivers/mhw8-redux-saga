import { fork, take, takeEvery, call, put } from 'redux-saga/effects';
import {
  getUsersRequest,
  getUsersSuccess,
  getUsersFailture,
  authoritize,
  signOut,
  authoritizeFailture,
  authoritizeSuccess,
} from '../actionsCreators';
import {
  apiFetchUsers,
  apiSignOut,
  apiLogin,
  apiIsUserLoggedIn,
} from '../../api';

export function* loginFlowSaga() {
  yield takeEvery(authoritize, loginFlow);
}

export function* loginFlow(action) {
  let username = action.payload;
  const isAuth = yield call(apiLogin, username);
  isAuth ? yield put(authoritizeSuccess()) : yield put(authoritizeFailture());
}

export function* logoutFlowSaga(username) {
  yield takeEvery(signOut, signOutFlow);
}
function* signOutFlow(action) {
  yield call(apiSignOut);
  // console.log(apiIsUserLoggedIn());
  if (apiIsUserLoggedIn()) {
    yield put(authoritizeFailture());
  }
}

export function* getUsersSaga() {
  yield takeEvery(getUsersRequest, getUsersFlow);
}

function* getUsersFlow(action) {
  let users = yield call(apiFetchUsers);
  // console.log(users);
  if (users) {
    yield put(getUsersSuccess(users));
  } else {
    yield put(getUsersFailture());
  }
}

export const functionName = (params) => true;
