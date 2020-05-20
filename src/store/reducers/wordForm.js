import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";
import Swal from "sweetalert2";

const initialState = {
    words: [],
    filteredWords: [],
    loading: false,
    reqFinished: false,
    error: false,
    closeForm: false
};

const formStart = (state, action) => {
    return updateObject(state, { closeForm: true, wordsUpdated: false });
}

const createWordSuccess = (state, action) => {
    Swal.fire({
        title: "Palabra Agregada!",
        icon: "success"
    });
    const updatedWords = state.words.concat(action.newWord);
    return updateObject(state, { words: updatedWords, closeForm: false, wordsUpdated: true });
}

const editWordSuccess = (state, action) => {
    Swal.fire({
        title: "Palabra Editada!",
        icon: "success"
    });

    const indexToEdit = state.words.findIndex(word => word.id === action.idEdited);
    const updatedWords = state.words.map((word, index) => {
        if(index !== indexToEdit) {
            return word;
        }

        return {
            ...word,
            ...action.wordEdited
        }
    });
    return updateObject(state, { words: updatedWords, closeForm: false, wordsUpdated: true });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FORM_START: return formStart(state, action)
        case actionTypes.CREATE_WORD_SUCCESS: return createWordSuccess(state, action)
        case actionTypes.EDIT_WORD_SUCCESS: return editWordSuccess(state, action)
        default: return state
    }
}

export default reducer;