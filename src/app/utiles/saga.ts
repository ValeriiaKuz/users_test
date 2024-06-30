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
import { toast } from 'react-toastify';

function* getUsersSaga() {
  try {
    toast.loading('Loading...');
    const response: AxiosResponse<UserType[]> = yield call(usersRequest);
    yield put(getUsersSuccessAction(response.data));
    toast.dismiss();
    toast.success('Users received');
  } catch (error) {
    if (error instanceof Error) {
      yield put(getUsersErrorAction(error));
      toast.error(`Something went wrong: ${error.message}`);
    }
  }
}

function* createUserSaga({ payload: { name, username, email } }: PayloadAction<Omit<UserType, 'id'>>) {
  try {
    toast.loading('Loading...');
    const response: AxiosResponse<UserType> = yield call(() => createUserRequest({ name, username, email }));
    yield put(createUserSuccessAction(response.data));
    toast.dismiss();
    toast.success('User created');
  } catch (error) {
    if (error instanceof Error) {
      yield put(createUserErrorAction(error));
      toast.error(`Something went wrong: ${error.message}`);
    }
  }
}

function* deleteUserSaga({ payload: id }: PayloadAction<number>) {
  try {
    toast.loading('Loading...');
    yield call(() => deleteUserRequest(id));
    yield put(deleteUserSuccessAction(id));
    toast.dismiss();
    toast.success('User deleted');
  } catch (error) {
    if (error instanceof Error) {
      yield put(deleteUserErrorAction(error));
      toast.error(`Something went wrong: ${error.message}`);
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
