import { combineReducers } from '@reduxjs/toolkit';

import contactsSlice from './contacts/contact-slice';
import filterSlice from './filter/filter-slice';
import authSlice from './auth/auth-slice';

export const rootReducer = combineReducers({
  auth: authSlice,
  contacts: contactsSlice,
  filter: filterSlice,
});
