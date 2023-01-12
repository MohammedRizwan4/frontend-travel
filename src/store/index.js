import { configureStore } from '@reduxjs/toolkit';
import authService from './services/authService';

const store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authService.middleware,
        ]),
})

export default store;