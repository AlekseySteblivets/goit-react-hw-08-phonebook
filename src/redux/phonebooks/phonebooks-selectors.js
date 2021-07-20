import { createSelector } from '@reduxjs/toolkit';

export const getIsloadingContacts = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const getItems = state => state.contacts.items;

export const getVisibleContacts = createSelector(
    [getItems, getFilter],
    (allContacts, filter) => {
        const filterNormalize = filter.toLowerCase();
        return allContacts.filter(contact =>
            contact.name.toLowerCase().includes(filterNormalize),
        );

    }
)


// export const getVisibleContacts = state => {
//     const allContacts = getItems(state);
//     const filter = getFilter(state);
//     const filterNormalize = filter.toLowerCase();

//     return allContacts.filter(contact =>
//         contact.name.toLowerCase().includes(filterNormalize),
//     );
// }