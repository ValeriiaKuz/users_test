import { getUsersErrorAction, getUsersSuccessAction } from './slice';
import { put, takeLatest, fork, call, all } from 'redux-saga/effects';
import { usersRequest } from '../API/requests';
import type { UserType } from '../types/userTypes';
import type { AxiosResponse } from 'axios';

function* getUsersSaga() {
  try {
    const response: AxiosResponse<UserType[]> = yield call(usersRequest);
    yield put(getUsersSuccessAction(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getUsersErrorAction(error));
    }
  }
}

export function* watchGetUsers() {
  yield takeLatest(`users/getUsersAction`, getUsersSaga);
}

export const rootSaga = function* () {
  yield all([fork(watchGetUsers)]);
};
