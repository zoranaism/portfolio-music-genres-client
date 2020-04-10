import { FETCH_GENRES_SUCCESS } from "./actions";
// import { CREATE_ARTWORK_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return [...action.payload];

    // case CREATE_ARTWORK_SUCCESS:
    //   return [ ...state, action.payload];

    default:
      return state;
  }
};