import './App.css';
import { UsersPage } from './app/pages/UsersPage/UsersPage';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <ToastContainer position={'bottom-right'} autoClose={2000} />
      <UsersPage />
    </>
  );
};
