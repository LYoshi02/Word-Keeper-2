import * as actionTypes from "./actionTypes";

export const searchedWordChanged = (value) => {
    return {
        type: actionTypes.SEARCHED_WORD_CHANGED,
        value
    }
}