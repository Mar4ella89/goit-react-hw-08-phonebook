import { NavLink } from 'react-router-dom';
import navItems from './navItems';

import css from './navbar.module.css';

const Navbar = () => {
  const elements = navItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.navLink} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.navList}>{elements}</ul>;
};

export default Navbar;
