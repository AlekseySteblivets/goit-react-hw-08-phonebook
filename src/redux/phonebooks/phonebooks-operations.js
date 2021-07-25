import axios from 'axios';
import * as phonebooksActions from './phonebooks-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => async dispatch => {
    dispatch(phonebooksActions.fetchContactRequest());

    try {
        const { data } = await axios.get('./contacts');
        dispatch(phonebooksActions.fetchContactSuccess(data));
    } catch (error) {
        dispatch(phonebooksActions.fetchContactError(error.message));
    }
    // axios
    //     .get('./contacts')
    //     .then(({ data }) => dispatch(phonebooksActions.fetchContactSuccess(data)))
    //     .catch(error => dispatch(phonebooksActions.fetchContactError(error)));
}

export const addContact = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };
    dispatch(phonebooksActions.addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch(phonebooksActions.addContactSuccess(data)))
        .catch(error => dispatch(phonebooksActions.addContactError(error.message)));
};

export const deleteContact = id => dispatch => {
    dispatch(phonebooksActions.deleteContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(phonebooksActions.deleteContactSuccess(id)))
        .catch(error => dispatch(phonebooksActions.deleteContactError(error.message)));

}
