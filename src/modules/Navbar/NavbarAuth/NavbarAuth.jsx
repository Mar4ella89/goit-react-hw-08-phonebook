import { NavLink } from 'react-router-dom';
// import navItems from './navItems';

import css from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={css.authWrapper}>
      <NavLink to="/register" className={css.authLink}>
        Register
      </NavLink>
      {''}|
      <NavLink to="/login" className={css.authLink}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
