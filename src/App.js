import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Dashbroad from "./component/Dashborad/Dashbroad";
import AddRoute from "../src/component/AddRoute/AddRoute";
import Bus_Cost from "./component/Bus_Cost/Bus_Cost";
import Search from "./component/Search/Search";
import SearchItem from "./component/SearchItem/SearchItem";
import T_Home from "./component/Train/Home/T_Home";
import Air from "./component/Air/Air";
import SignUp from "../src/component/Auth/SignUp/SignUp";
import SignIn from "./component/Auth/SignIn/SignIn";
import { useState } from "react";
import PrivateRoute from "./component/Auth/PrivateRoute/PrivateRoute";
import Edit from "./Edit/Edit";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <p>Email: {loggedInUser.email}</p> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashbroad />
          </PrivateRoute>
          <Route path="/add-route">
            <AddRoute />
          </Route>
          <PrivateRoute path="/bus-service">
            <Bus_Cost />
          </PrivateRoute>
          <Route path="/search/:id">
            <SearchItem />
          </Route>
          <Route path="/train">
            <T_Home />
          </Route>
          <Route path="/air-service">
            <Air />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/edit/:editId">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
