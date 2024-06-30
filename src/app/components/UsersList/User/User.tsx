import type { UserType } from '../../../types/userTypes';
import styles from './User.module.css';
export const User = ({ name, userName, email }: UserType) => {
  return (
    <li className={styles.user_item}>
      <span className={styles.user_item__property}>Name: {name}</span>
      <span className={styles.user_item__property}>UserName: {userName}</span>
      <span className={styles.user_item__property}>Email: {email}</span>
    </li>
  );
};
