import styles from './UsersPage.module.css';
import { FormWithFormik } from '../../components/FormWithFormik/FormWithFormik';
import { Button } from '../../components/Button/Button';
import { UsersList } from '../../components/UsersList/UsersList';
import { useAppDispatch } from '../../utiles/hooks';
import { getUsersAction } from '../../utiles/slice';
export const UsersPage = () => {
  const dispatch = useAppDispatch();
  return (
    <main className={styles.main_content}>
      <section className={styles.users_form__section}>
        <h1 className={styles.users_form__title}>Create user</h1>
        <FormWithFormik />
      </section>
      <section className={styles.users_list__section}>
        <h2 className={styles.users_list__title}>Users:</h2>
        <Button
          type={'submit'}
          className={`button ${styles.user_list__button}`}
          onClick={() => {
            dispatch(getUsersAction());
          }}
        >
          Get users
        </Button>
        <div className={styles.users_list__wrapper}>
          <UsersList />
        </div>
      </section>
    </main>
  );
};
