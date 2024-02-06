import rootReducer from '../reducers/rootReducer'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware();
    },
});

export default store;