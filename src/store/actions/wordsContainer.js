import axios from "../../axios-words";
import * as actionTypes from "./actionTypes";
import Swal from "sweetalert2";

export const fetchWords = (token) => {
    return dispatch => {
        dispatch(fetchWordsStart());
        axios.get(`/palabras.json?auth=${token}`)
            .then(res => {
                const fetchedWords = [];
                for (let key in res.data) {
                    fetchedWords.push({
                        id: key,
                        ...res.data[key]
                    });
                }
                dispatch(fetchWordsSuccess(fetchedWords));
            })
            .catch(err => {
                dispatch(fetchWordsFail());
            });
    }
}

export const fetchWordsStart = () => {
    return {
        type: actionTypes.FETCH_WORDS_START
    }
}

export const fetchWordsSuccess = (words) => {
    return {
        type: actionTypes.FETCH_WORDS_SUCCESS,
        words
    }
}

export const fetchWordsFail = () => {
    return {
        type: actionTypes.FETCH_WORDS_FAIL
    }
}

export const changeFilteredWords = (newWords) => {
    return {
        type: actionTypes.CHANGE_FILTERED_WORDS,
        newWords
    }
}

export const deleteWord = (wordId, token) => {
    return dispatch => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'No podrás recuperar esta palabra',
            icon: 'warning',
            showCancelButton: true,
        }).then(result => {
            if (result.value) {
                axios.delete(`palabras/${wordId}.json?auth=${token}`)
                    .then(res => {
                        if(res) {
                            dispatch(deleteWordSuccess(wordId));
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Se produjo un error al intetar borrar la palabra",
                                icon: "error"
                            });
                        }   
                    })
            }
        })
        
    }
}

export const deleteWordSuccess = (id) => {
    return {
        type: actionTypes.DELETE_WORD_SUCCESS,
        idDeleted: id
    }
}