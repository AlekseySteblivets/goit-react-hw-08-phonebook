import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    changeFilter,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './phonebooks-actions';



const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact =>
        contact.id !== payload),
})

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
    items,
    filter,
    loading,
})
