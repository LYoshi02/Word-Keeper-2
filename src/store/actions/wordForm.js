import * as actionTypes from "./actionTypes";
import axios from "../../axios-words";
import Swal from "sweetalert2";

export const formStart = () => {
    return {
        type: actionTypes.FORM_START
    }
}

export const createWord = (word, token) => {
    return dispatch => {
        dispatch(formStart());
        axios.post(`/palabras.json?auth=${token}`, word)
            .then(res => {
                dispatch(createWordSuccess(word, res.data.name));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const createWordSuccess = (word, id) => {
    const newWord = {
        ...word,
        id
    }
    return {
        type: actionTypes.CREATE_WORD_SUCCESS,
        newWord
    }
}

export const editWord = (word, id, token) => {
    return dispatch => {
        dispatch(formStart());
        console.log(token);
        axios.put(`/palabras/${id}.json?auth=${token}`, word)
            .then(res => {
                if(res) {
                    dispatch(editWordSuccess(word, id));
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Se produjo un error al intetar editar la palabra",
                        icon: "error"
                    });
                }   
            });
    } 
}

export const editWordSuccess = (word, id) => {
    return {
        type: actionTypes.EDIT_WORD_SUCCESS,
        wordEdited: word,
        idEdited: id
    }
}