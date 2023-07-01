import { ADD_FAV, REMOVE_FAV, GET_FAV, ORDER_AND_FILTER } from './types';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

    case GET_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    // case FILTER:
    //   let copy3 = [];
    //   if (action.payload === 'all') {
    //     copy3 = state.allCharacters;
    //   } else {
    //     copy3 = state.allCharacters.filter((char) => {
    //       return char.gender === action.payload;
    //     });
    //   }
    //   console.log(action.payload);
    //   return { ...state, myFavorites: copy3 };

    // case ORDER:
    //   let copy4 = state.allCharacters.sort((a, b) => {
    //     return action.payload === 'A' ? a.id - b.id : b.id - a.id;
    //   });
    //   return {
    //     ...state,
    //     myFavorites: copy4,
    //   };
    case ORDER_AND_FILTER:
      let copy3 = [];
      if (action.payload.filterSelectValue === 'all') {
        copy3 = state.allCharacters;
      } else {
        console.log(state.allCharacters)
        copy3 = state.allCharacters.filter((char) => {
          return char.gender === action.payload.filterSelectValue;
        });
      }
      console.log('array filtrado:')
      console.log(copy3)
      copy3.sort((a, b) => {
             return action.payload.orderSelectValue === 'A' ? a.id - b.id : b.id - a.id;
           });
      return { ...state, myFavorites: copy3 };

    default:
      return { ...state };
  }
};
