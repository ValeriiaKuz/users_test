import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import createSagaMiddleware from 'redux-saga';
import { usersSlice } from './slice';
import { rootSaga } from './saga';

const rootReducer = combineSlices(usersSlice);
export type RootState = ReturnType<typeof rootReducer>;
const sagaMiddleware = createSagaMiddleware();
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(sagaMiddleware);
    },
    preloadedState
  });

  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();
sagaMiddleware.run(rootSaga);

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;