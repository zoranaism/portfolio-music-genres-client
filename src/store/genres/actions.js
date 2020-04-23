
import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";
// import { selectToken } from "../user/selectors";

export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
// export const CREATE_GENRE_SUCCESS = "CREATE_GENRE_SUCCESS";

export const fetchGenresSuccess = genres => ({
  type: FETCH_GENRES_SUCCESS,
  payload: genres
});

// export const postGenreSuccess = newGenre => ({
//   type: CREATE_GENRE_SUCCESS,
//   payload: newGenre
// });

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

export const postGenre = (name, oneLineDescr) => {
  return async (dispatch, getState) => {
    try {
      // const token = selectToken(getState());
      // console.log(name, content, imageUrl);

      const response = await axios.post(
        `${apiUrl}/genres`,
        {
          name, 
          oneLineDescr
        },
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // }
      );

      console.log("Yep!", response.data.genre);

      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      // dispatch(postGenreSuccess(response.data.artwork));
    } catch (error) {
      if (error.response) {
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};