import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    searchedWord: ""
}

const searchedWordChanged = (state, action) => {
    return updateObject(state, { searchedWord: action.value })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCHED_WORD_CHANGED: return searchedWordChanged(state, action)
        default: return state
    }
}

export default reducer;