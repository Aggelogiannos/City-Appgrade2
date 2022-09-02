import {createContext} from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  roles: null,
  email: null,
  login: () => {},
  logout: () => {}
});
