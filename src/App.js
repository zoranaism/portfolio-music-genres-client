import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// import "./styles.css";
import { MainNavContainer } from "../src/components/Navigation/index";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import 'typeface-roboto';
import Genres from "./pages/Genres";
import GenreDetails from "./pages/GenreDetails";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App" style={{backgroundColor: "#f5f5f5", height: "945px"}}>
      {/* <Navigation /> */}
      <MainNavContainer />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Genres} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/genres/:id" component={GenreDetails} />
      </Switch>
    </div>
  );
}

export default App;
