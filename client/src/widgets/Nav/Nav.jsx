import styles from './Nav.module.css';
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';

export default function Nav() {
  let navigate = useNavigate();

  return (
    <nav className={styles.container}>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Login
      </NavLink>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Home
      </NavLink>
    </nav>
  );
}