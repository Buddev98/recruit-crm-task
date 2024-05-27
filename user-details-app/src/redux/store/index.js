import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from '../reducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);