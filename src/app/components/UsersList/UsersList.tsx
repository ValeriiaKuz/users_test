import { useAppSelector } from '../../utiles/hooks';
import { User } from './User/User';
import styles from './UsersList.module.css';
export const UsersList = () => {
  const { users } = useAppSelector((state) => state.users);
  return (
    <ul className={styles.users_list}>
      {users?.map((user) => (
        <User userName={user.userName} name={user.name} email={user.email} key={crypto.randomUUID()} />
      ))}
    </ul>
  );
};
