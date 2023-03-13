import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import css from './loginForm.module.css';

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const reset = () => {
    setState({ email: '', password: '' });
  };

  const hadleSubmit = event => {
    event.preventDefault();
    handleLogin({ email, password });
    reset();
  };

  const { email, password } = state;

  return (
    <form onSubmit={hadleSubmit}>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className={css.addBtn}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
