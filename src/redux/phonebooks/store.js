import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import phonebooksReducer from "./phonebooks-reducer";

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
    // myMiddleware,
    logger,
];

const store = configureStore({
    reducer: {
        contacts: phonebooksReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;