import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Register',
    link: '/register',
  },

  {
    id: nanoid(),
    text: 'Login',
    link: '/login',
  },

  {
    id: nanoid(),
    text: 'Contacts',
    link: '/contacts',
  },
];

export default items;
