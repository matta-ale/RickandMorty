import { ADD_FAV, REMOVE_FAV } from './types'


const initialState = {
    myFavorites: []
}

export const favReducer = (state=initialState,action) => {
    switch(action.type) {
        
        case ADD_FAV:
            return {...state, myFavorites:[...state.myFavorites, action.payload]}
        
        case REMOVE_FAV:
            const filteredArray = state.myFavorites.filter(char => {return char.id !== Number(action.payload)})
            return {...state, myFavorites: filteredArray}
        
        default:
            return {...state}
    }
}