import React, { useCallback, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import Auth from "./user/pages/Auth";
import UpdatePlace from "./places/pages/UpdatePlace";
import { AuthContext } from "./shared/context/auth-context";

function App() {
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
        <Route path="/" Component={Users} />
        <Route path="/places/new" Component={NewPlace} />
        <Route path="/places" Component={UserPlaces} />
        <Route path="/places/:placeId" Component={UpdatePlace} />
        <Route path="/:uid/places" Component={UserPlaces} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" Component={Users} />
        <Route path="/:uid/places" Component={UserPlaces} />
        <Route path="/auth" Component={Auth} />
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
}

export default App;
