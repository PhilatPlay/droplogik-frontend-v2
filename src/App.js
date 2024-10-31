import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Messenger from './pages/Messenger';
// import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" exact="true" element={<HomePage />} />
        <Route path="/messenger" exact="true" element={<Messenger />} />
        <Route path="/:userId/places" element={<UserPlaces />} exact="true" />
        <Route path="/places/new" element={<NewPlace />} exact="true" />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<HomePage />} exact="true" />
        <Route path="/:userId/places" element={<UserPlaces />} exact="true" />
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

