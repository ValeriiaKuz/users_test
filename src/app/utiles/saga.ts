import {
  createUserErrorAction,
  createUserSuccessAction,
  deleteUserErrorAction,
  deleteUserSuccessAction,
  getUsersErrorAction,
  getUsersSuccessAction
} from './slice';
import { put, takeLatest, fork, call, all } from 'redux-saga/effects';
import { createUserRequest, deleteUserRequest, usersRequest } from '../API/requests';
import type { UserType } from '../types/userTypes';
import type { AxiosResponse } from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';

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

function* createUserSaga({ payload: { name, username, email } }: PayloadAction<Omit<UserType, 'id'>>) {
  try {
    const response: AxiosResponse<UserType> = yield call(() => createUserRequest({ name, username, email }));
    yield put(createUserSuccessAction(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(createUserErrorAction(error));
    }
  }
}

function* deleteUserSaga({ payload: id }: PayloadAction<number>) {
  try {
    yield call(() => deleteUserRequest(id));
    yield put(deleteUserSuccessAction(id));
  } catch (error) {
    if (error instanceof Error) {
      yield put(deleteUserErrorAction(error));
    }
  }
}

export function* watchGetUsers() {
  yield takeLatest(`users/getUsersAction`, getUsersSaga);
}

export function* watchCreateUser() {
  yield takeLatest('users/createUserAction', createUserSaga);
}

export function* watchDeleteUser() {
  yield takeLatest('users/deleteUserAction', deleteUserSaga);
}
export const rootSaga = function* () {
  yield all([fork(watchGetUsers), fork(watchCreateUser), fork(watchDeleteUser)]);
};
