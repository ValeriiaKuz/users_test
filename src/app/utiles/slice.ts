import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserType, UsersState } from '../types/userTypes';

const usersInitialState: UsersState = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: null
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUsersAction: (state: UsersState) => {
      state.isLoading = true;
      state.isError = false;
    },
    getUsersSuccessAction: (state: UsersState, { payload: users }: PayloadAction<UserType[]>) => {
      state.isLoading = false;
      state.users = users;
    },
    getUsersErrorAction: (state: UsersState, { payload: error }: PayloadAction<Error>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = error.message;
    },
    // @ts-ignore
    createUserAction: (state: UsersState, { payload }: PayloadAction<Omit<UserType, 'id'>>) => {
      state.isLoading = true;
      state.isError = false;
    },
    createUserSuccessAction: (state: UsersState, { payload: user }: PayloadAction<UserType>) => {
      state.users = [...state.users, user];
      state.isLoading = false;
    },
    createUserErrorAction: (state: UsersState, { payload: error }: PayloadAction<Error>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = error.message;
    },
    // @ts-ignore
    deleteUserAction: (state: UsersState, { payload }: PayloadAction<number>) => {
      state.isLoading = true;
      state.isError = false;
    },
    deleteUserSuccessAction: (state: UsersState, { payload: id }: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== id);
      state.isLoading = true;
      state.isError = false;
    },
    deleteUserErrorAction: (state: UsersState, { payload: error }: PayloadAction<Error>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = error.message;
    }
  }
});

export const {
  getUsersAction,
  getUsersSuccessAction,
  getUsersErrorAction,
  createUserSuccessAction,
  createUserErrorAction,
  createUserAction,
  deleteUserAction,
  deleteUserSuccessAction,
  deleteUserErrorAction
} = usersSlice.actions;
