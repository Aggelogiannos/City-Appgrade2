import {useCallback, useEffect, useState} from 'react';

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [roles, setRoles] = useState("");
  const [email, setEmail] = useState("");

  // Login context method
  const login = useCallback((uid, token, roles, email, expirationDate) => {
    // Set values after await, requires state management
    setToken(token);
    setUserId(uid);
    setRoles(roles);
    setEmail(email);
    // Create token expiration date and store it statelessly
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    // Set the items in local storage under a common key
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        roles: roles,
        email: email,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  // Logout context method
  const logout = useCallback(() => {
    // Empty current values
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setRoles(null)
    setEmail(null)
    // Empty local storage
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, roles, email, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.userId, storedData.token, storedData.roles,  storedData.email, new Date(storedData.expiration));
    }
  }, [login]);

  // Returns all current data values
  return { token, login, logout, userId, roles, email };
};
