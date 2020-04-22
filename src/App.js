import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MainNavContainer } from "../src/components/Navigation/index";
import "typeface-roboto";
// import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";

import { getUserWithStoredToken } from "./store/user/actions";
import { selectAppLoading } from "./store/appState/selectors";

import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Genres from "./pages/Genres";
import GenreDetails from "./pages/GenreDetails";
import MyPage from "./pages/MyPage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const location = useLocation();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div
      className="App"
      style={{ backgroundColor: "#f5f5f5", height: "945px", overflowX: "hidden", position: "relative" }}
    >
      {/* <Navigation /> */}
      <MainNavContainer />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Genres} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/genres/:id" component={GenreDetails} />
          <Route path="/me" component={MyPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
