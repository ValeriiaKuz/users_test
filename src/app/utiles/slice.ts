import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserType, UsersState } from '../types/userTypes';

const usersInitialState: UsersState = {
  users: null,
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
    }
  }
});

export const { getUsersAction, getUsersSuccessAction, getUsersErrorAction } = usersSlice.actions;
