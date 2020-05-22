import * as actionTypes from "./actionTypes";
import axios from "axios";

export const auth = (email, password, isSignIn) => {
    return dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxoXRDDUUhgpNx-9TwHDnzyq1e5ro9PQA";
        if(isSignIn) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxoXRDDUUhgpNx-9TwHDnzyq1e5ro9PQA";
        }

        axios.post(url, authData)
            .then(res => {
                localStorage.setItem("token", res.data.idToken);
                localStorage.setItem("expirationDate", new Date(new Date().getTime() + res.data.expiresIn * 1000));
                localStorage.setItem("userId", res.data.localId);
                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(checkAuthTimeout(res.data.expiresIn))
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expirationTime * 1000);
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        if(!token) {
            dispatch(authLogout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()) {
                dispatch(authLogout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
                console.log(expirationDate.getTime());
            }
        }
    }
}