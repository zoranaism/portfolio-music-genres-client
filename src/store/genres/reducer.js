import { FETCH_GENRES_SUCCESS } from "./actions";
// import { CREATE_ARTWORK_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      // allGenreRelations,  response.data.allGenres
      console.log(action.payload.allGenres);

      return {
        genres: [...action.payload.allGenres],
        relations: [...action.payload.allGenreRelations],
      };

    // case CREATE_ARTWORK_SUCCESS:
    //   return [ ...state, action.payload];

    default:
      return state;
  }
};
