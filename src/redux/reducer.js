import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './types';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      let copy1 = [...state.allCharacters, action.payload];
      return { ...state, myFavorites: copy1, allCharacters: copy1 };

    case REMOVE_FAV:
      const copy2 = state.myFavorites.filter((char) => {
        return char.id !== Number(action.payload);
      });
      return { ...state, myFavorites: copy2 };

    case FILTER:
      let copy3 = [];
      if (action.payload === 'all') {
        copy3 = state.allCharacters;
        } else {
        copy3 = state.allCharacters.filter((char) => {
          return char.gender === action.payload;
        });
      }
      console.log(action.payload)
      return { ...state, myFavorites: copy3 };

    case ORDER:
      let copy4 = state.allCharacters.sort((a, b) => {
        return action.payload === 'A' ? a.id - b.id : b.id - a.id;
      });
      return {
        ...state,
        myFavorites: copy4,
      };

    default:
      return { ...state };
  }
};
