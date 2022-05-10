const initialState = {
  addresses: [],
  favorites: [],
};


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ADDRESSES":
      return {
        ...state,
        addresses: action.payload,
      };
    case "GET_ONE_ADDRESS":
      return {
        ...state,
        addresses: action.payload,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      const favoriteFiltered = [
        ...state.favorites.filter((el) => el?.account !== action.payload.account),
      ];
      return {
        ...state,
        favorites: favoriteFiltered,
      };

    default:
      return state;
  }
}

export default rootReducer;
