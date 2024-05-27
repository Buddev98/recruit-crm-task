import { actionChannel, call, put, take } from 'redux-saga/effects';

import { userDetailsSuccess, userDetailsError } from '../../slices/userDetails';

export default function* userDetailsSaga() {
  debugger;
  try {
    const requestChannel = yield actionChannel('userDetails/userDetailsStart');
    while (true) {
      const { payload } = yield take(requestChannel);
      console.log(payload);
      const url = (payload && payload?.userId !== '') ? `http://localhost:5000/users?id=${payload?.userId}` : 'http://localhost:5000/users';
      const response = yield call(() => fetch(url));
      if(response?.ok && response?.status === 200) {
        const jsonData = yield response.json();
        const data = (payload && payload?.userId !== '') ? jsonData[0] : { users: jsonData };
        yield put(userDetailsSuccess({ data }));
      } else {
        yield put(userDetailsError(response.error));
      }
    }
  } catch (error) {
    console.log('Saga userDetails API Failed.', error);
    yield put(userDetailsError(error));
  }
}
