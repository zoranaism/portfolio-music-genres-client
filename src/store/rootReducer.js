import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import genres from "./genres/reducer";
import genreDetails from "./genreDetails/reducer"

export default combineReducers({
  appState,
  user, 
  genres, 
  genreDetails
});
