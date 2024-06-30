export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}
export interface UsersState {
  users: UserType[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: null | string;
}
