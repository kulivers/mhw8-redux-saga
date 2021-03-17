import { fork } from 'redux-saga/effects';
import { getUsersSaga, loginFlowSaga, logoutFlowSaga } from './authoritize';
import { getTestRequestSaga, threeGetTestRequestSaga } from './testSagas';
export default function* () {
  // yield fork(getTestRequestSaga);
  // yield fork(threeGetTestRequestSaga);
  yield fork(loginFlowSaga);
  yield fork(logoutFlowSaga);
  yield fork(getUsersSaga);
}
