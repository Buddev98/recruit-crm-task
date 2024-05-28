import { actionChannel, call, put, take } from 'redux-saga/effects';

import { userDetailsSuccess, userDetailsError } from '../../slices/userDetails';
import fetchData from '@/utilities/fetchData';

export default function* userDetailsSaga() {
  try {
    const requestChannel = yield actionChannel('userDetails/userDetailsStart');
    while (true) {
      const { payload } = yield take(requestChannel);
      const method = (payload && payload?.method) ? payload?.method : 'GET';
      const data = (payload && payload?.bodyObj) ? payload?.bodyObj : {};
      const url = (payload && payload?.userId && payload?.userId !== '') ? `http://localhost:5000/users/${payload?.userId}` : (payload && payload?.method === 'PATCH') ? `http://localhost:5000/users/${payload?.userId}` : (payload && payload?.type === 'all') && 'http://localhost:5000/users';
      if(url && url !== '') {
        const response = yield call(() => fetchData(url, method, data));
        if(response?.ok && response?.status === 200) {
          const jsonData = yield response.json();
          const data = (payload && payload?.userId && payload?.userId !== '') ? jsonData : { users: jsonData };
          yield put(userDetailsSuccess({ data }));
        } else {
          yield put(userDetailsError(response.error));
        }
      }
    }
  } catch (error) {
    console.log('Saga userDetails API Failed.', error);
    yield put(userDetailsError(error));
  }
}
