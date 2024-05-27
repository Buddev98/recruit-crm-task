import { all } from 'redux-saga/effects';

import loginSubmit from './login';
import userDetailsSaga from './userDetails';

function* rootSaga() {
  yield all([
    loginSubmit(),
    userDetailsSaga(),
  ]);
}

export default rootSaga;
