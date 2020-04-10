import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import genres from "./genres/reducer";

export default combineReducers({
  appState,
  user, 
  genres
});
