import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import {
//   fetchAllContacts,
//   fetchAddContact,
// } from 'redux/contacts/contact-operations';

import css from './registerForm.module.css';

const RegisterForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchAllContacts());
  //   }, [dispatch]);

  //   const handleAddContact = ({ name, email, password  }) => {
  //     const action = fetchAddContact({ name, email, password  });
  //     dispatch(action);
  //   };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const reset = () => {
    setState({ name: '', email: '', password: '' });
  };

  const hadleSubmit = event => {
    event.preventDefault();
    // handleAddContact({ name, email, password });
    reset();
  };

  const { name, email, password } = state;

  return (
    <form onSubmit={hadleSubmit}>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="tel"
            name="email"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="tel"
            name="password"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
    </form>
  );
};

export default RegisterForm;