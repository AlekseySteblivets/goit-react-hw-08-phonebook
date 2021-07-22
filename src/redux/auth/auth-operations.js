import axios from "axios";

import authActions from "./auth-actions";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Autorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Autorization = '';
    },
};

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());
    try {
        const response = await axios.post('/users/signup', credentials);
        dispatch(authActions.registerSuccess(response.data))
    } catch (error) {
        dispatch(authActions.registerError(error.message));

    }

};

const login = credentials => async dispatch => {
    dispatch(authActions.loginRequest());
    try {
        const response = await axios.post('/users/login', credentials);
        dispatch(authActions.loginSuccess(response.data))
    } catch (error) {
        dispatch(authActions.registerError(error.message));
    }
};

const logout = () => dispatch => { };

const getCurrentUser = () => (dispatch, getState) => { };

export default { getCurrentUser, login, register, logout };