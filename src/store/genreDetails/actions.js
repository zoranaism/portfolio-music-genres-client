import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";
import { selectToken } from "../user/selectors";

export const GENRE_DETAILS_FETCHED = "GENRE_DETAILS_FETCHED";

const genreDetailsFetched = genre => ({
  type: GENRE_DETAILS_FETCHED,
  payload: genre
});

export const fetchGenreById = id => {
    return async (dispatch, getState) => {
      // dispatch(appLoading());
      try {
        const response = await axios.get(`${apiUrl}/genres/${id}`);
        // console.log("RESPONSE FROM THE THUNK", response.data);
        dispatch(genreDetailsFetched(response.data.genre));
        // dispatch(appDoneLoading());
      } catch (error) {
        if (error.response) {
          console.log(error.response.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error);
          dispatch(setMessage("danger", true, error.message));
        }
        // dispatch(appDoneLoading());
      }
    };
  };