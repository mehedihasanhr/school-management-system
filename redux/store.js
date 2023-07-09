import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {}, // Add your reducers here
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode only
});


export default store;