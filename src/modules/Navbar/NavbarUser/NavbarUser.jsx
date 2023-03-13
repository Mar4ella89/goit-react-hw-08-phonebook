import css from './navbarUser.module.css';

const NavbarUser = () => {
  return (
    <div className={css.userWrapper}>
      Name, <button>Logout</button>
    </div>
  );
};

export default NavbarUser;
