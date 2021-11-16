import logo from "./logo.svg";
import React from "react";
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
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashborad">
            <Dashbroad />
          </Route>
          <Route path="/add-route">
            <AddRoute />
          </Route>
          <Route path="/bus-service">
            <Bus_Cost />
          </Route>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
