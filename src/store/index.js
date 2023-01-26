import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './reducers/globalReducer';
import authService from './services/authService';

const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        "globalReducer": globalReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authService.middleware,
        ]),
})

export default store;

