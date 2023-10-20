import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false,
        serializableCheck: {}
    }).concat(sagaMiddleware)
});

export type ReduxRootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga);

export default store;