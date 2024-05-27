import { actionChannel, call, put, take } from 'redux-saga/effects';

import { loginSuccess, loginError } from '../../slices/login';

export default function* loginSubmit() {
  try {
    const requestChannel = yield actionChannel('login/loginStart');
    while (true) {
      const { payload } = yield take(requestChannel);
      const response = yield call(fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ payload }),
        headers: {
          'Content-Type': 'application/json',
        },
      }));
      const jsonData = yield response.json();
      if (jsonData && jsonData.status && jsonData.data) {
        if (jsonData.status === 200) {
          yield put(loginSuccess(jsonData));
        }
      } else {
        yield put(loginError(jsonData));
      }
    }
  } catch (error) {
    console.log('Saga Login API Failed.', error);
    yield put(loginError(error));
  }
}
