import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';

import css from './navbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatche = useDispatch();

  const onLogout = () => {
    dispatche(logout());
  };
  return (
    <div className={css.userWrapper}>
      {name},{' '}
      <button onClick={onLogout} className={css.btn}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
