// Local
import * as actionTypes from '../../action/actionTypes';

const initState = {
  favorite: [],
  count: 0,
};

const favoriteReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVORITE:
      const alreadyAvailable = state?.favorite?.find(
        e => e.mal_id === action.payload.mal_id,
      );
      var newFav = alreadyAvailable
        ? state.favorite.filter(e => e.mal_id !== action.payload.mal_id)
        : [...state.favorite, action.payload];
      return {...state, favorite: [...newFav]};

    default:
      return state;
  }
};
export default favoriteReducer;
