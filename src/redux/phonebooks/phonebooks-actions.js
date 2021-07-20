import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('phonebooks/fetchContactRequest');
export const fetchContactSuccess = createAction('phonebooks/fetchContactSuccess');
export const fetchContactError = createAction('phonebooks/fetchContactError');



export const addContactRequest = createAction('phonebooks/addContactRequest');
export const addContactSuccess = createAction('phonebooks/addContactSuccess');
export const addContactError = createAction('phonebooks/addContactError');

export const deleteContactRequest = createAction('phonebooks/deleteContactRequest');
export const deleteContactSuccess = createAction('phonebooks/deleteContactSuccess');
export const deleteContactError = createAction('phonebooks/deleteContactError');


export const changeFilter = createAction('phonebooks/changeFilter')
