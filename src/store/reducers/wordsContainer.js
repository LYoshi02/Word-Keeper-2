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

const fetchWordsStart = (state, action) => {
    return updateObject(state, { loading: true, reqFinished: false, error: false });
}
const fetchWordsSuccess = (state, action) => {
    return updateObject(state, { loading: false, reqFinished: true, error: false, words: action.words, filteredWords: action.words });
}
const fetchWordsFail = (state, action) => {
    return updateObject(state, { loading: false, reqFinished: true, error: true });
}
const changeFilteredWords = (state, action) => {
    return updateObject(state, { filteredWords: action.newWords });
}

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

const deleteWordSuccess = (state, action) => {
    Swal.fire({
        title: "Palabra Borrada!",
        icon: "success"
    });
    const updatedWords = state.words.filter(word => word.id !== action.idDeleted);
    return updateObject(state, { words: updatedWords });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_WORDS_START: return fetchWordsStart(state, action)
        case actionTypes.FETCH_WORDS_SUCCESS: return fetchWordsSuccess(state, action)
        case actionTypes.FETCH_WORDS_FAIL: return fetchWordsFail(state, action)
        case actionTypes.CHANGE_FILTERED_WORDS: return changeFilteredWords(state, action)
        case actionTypes.FORM_START: return formStart(state, action)
        case actionTypes.CREATE_WORD_SUCCESS: return createWordSuccess(state, action)
        case actionTypes.EDIT_WORD_SUCCESS: return editWordSuccess(state, action)
        case actionTypes.DELETE_WORD_SUCCESS: return deleteWordSuccess(state, action)
        default: return state
    }
}

export default reducer;