import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import LoadingSpinner from "./components/CustomUIElements/LoadingSpinner/LoadingSpinner";
import {AuthContext} from "./context/auth-context";
import {useAuth} from "./hooks/auth-hook";
const Auth = React.lazy(() => import("./components/Auth/Auth"));
const App = () => {
  const { token, login, logout, userId, roles, email } = useAuth();
  let routes;
  // Routes need to be assigned each time depending on authentication status. This is due to React Router's limitations (there is no routes += or equivalent).
  // Only logged-in users can use these routes
  routes = (
    <Routes>
      <Route path='/auth' exact element={<Auth />} />
      <Route path='*' element={<Auth />} />
    </Routes>
  );

  return (
    <AuthContext.Provider
      // Holds auth context values from hook
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
        roles: roles,
        email: email,
      }}>
      <Router>
        <main>
          <Suspense
            fallback={
              <div className='center'>
                <LoadingSpinner />
              </div>
            }>
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
