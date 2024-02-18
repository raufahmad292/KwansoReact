// src/redux/actions.js

import { User } from "../types/users";

export const SELECT_USER = 'SELECT_USER';

export const selectUser = (user:User) => ({
  type: SELECT_USER,
  payload: user,
});



