import type { UserType } from '../../../types/userTypes';
import styles from './User.module.css';
import { useAppDispatch } from '../../../utiles/hooks';
import { deleteUserAction } from '../../../utiles/slice';
export const User = ({ name, username, email, id }: UserType) => {
  const dispatch = useAppDispatch();
  const onUserClick = () => {
    dispatch(deleteUserAction(id));
  };
  return (
    <li className={styles.user_item} onClick={onUserClick}>
      <span className={styles.user_item__property}>Name: {name}</span>
      <span className={styles.user_item__property}>UserName: {username}</span>
      <span className={styles.user_item__property}>Email: {email}</span>
    </li>
  );
};
