import { GENRE_DETAILS_FETCHED } from "./actions";

const initialState = {
  loading: false,
  users: null,
  name: null,
  relations: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENRE_DETAILS_FETCHED:
      const { genre, otherRelations, relations } = action.payload;
      const allRelations = otherRelations.concat(relations);
      return { ...genre, relations: [...allRelations] };

    default:
      return state;
  }
};
