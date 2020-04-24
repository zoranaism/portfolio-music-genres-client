import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
import { selectToken } from "../user/selectors";

export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const CREATE_GENRE_SUCCESS = "CREATE_GENRE_SUCCESS";

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: genres,
});

export const genreCreated = (newGenre) => ({
  type: CREATE_GENRE_SUCCESS,
  payload: newGenre,
});

export const fetchGenres = () => {
  return async (dispatch, getState) => {
    // dispatch(appLoading());

    try {
      const response = await axios.get(`${apiUrl}/genres`);

      dispatch(fetchGenresSuccess(response.data));
      // dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error);
        dispatch(setMessage("danger", true, error.message));
      }
      // dispatch(appDoneLoading());
    }
  };
};

export const createGenre = (name, img, oneLineDescr, relations) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());
      console.log("reaching here");
      

      const response = await axios.post(
        `${apiUrl}/genres/`,
        { 
          name, 
          img, 
          oneLineDescr, 
          relations 
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("THUNK RESPONSE", response.data);

      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "Genre created successfully.",
          3000
        )
      );
      // dispatch(genreCreated(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error);
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};
