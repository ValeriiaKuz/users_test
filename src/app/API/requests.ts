import axios from 'axios';
import type { UserType } from '../types/userTypes';
import { API_URL } from './constants';

export const baseURL = API_URL;
export const axiosRequest = axios.create({
  baseURL: baseURL
});
export const usersRequest = async (): Promise<UserType[]> => {
  try {
    return await axiosRequest.get(`/users`);
  } catch (error) {
    console.error('Error fetching projects: ', error);
    throw error as Error;
  }
};

export const createUserRequest = async ({ name, username, email }: Omit<UserType, 'id'>) => {
  try {
    return await axiosRequest.post(`/users`, {
      name: name,
      username: username,
      email: email
    });
  } catch (error) {
    console.error('Error fetching projects: ', error);
    throw error;
  }
};

export const deleteUserRequest = async (id: number) => {
  try {
    return await axiosRequest.delete(`/users/${id}`);
  } catch (error) {
    console.error('Error fetching projects: ', error);
    throw error;
  }
};
