export interface UserType {
  name: string;
  userName: string;
  email: string;
}
export interface UsersState {
  users: UserType[] | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: null | string;
}
