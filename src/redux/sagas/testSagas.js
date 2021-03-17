import { fork, take, takeEvery } from 'redux-saga/effects';
import { getTestRequest } from '../actionsCreators';
export function* getTestRequestSaga() {
  yield takeEvery(getTestRequest, workerSaga);
}

export function* threeGetTestRequestSaga() {
  for (let i = 0; i < 3; i++) {
    const action = yield take(getTestRequest);
    // console.log(`u pushed button ${i + 1}`);
  }
  console.log('3 get user request made');
}

function* workerSaga() {
  yield fork(first_saga);
  yield fork(second_saga);
  yield fork(third_saga);
}

function* first_saga() {
  console.log('first saga');
}
function* second_saga() {
  setTimeout(() => {
    console.log('second saga');
  }, 2000);
}
function* third_saga() {
  console.log('third saga');
}
