import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

import css from './navbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div className={css.userWrapper}>
      {name}, <button>Logout</button>
    </div>
  );
};

export default NavbarUser;
