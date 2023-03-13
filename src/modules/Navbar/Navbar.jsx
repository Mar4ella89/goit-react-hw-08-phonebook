import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { isUserLogin } from 'redux/auth/auth-selectors';

import css from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={css.navList}>
      <NavLink to="/">Logo</NavLink>

      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
