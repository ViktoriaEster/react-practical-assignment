import rootReducer from '../reducers/rootReducer'
import { configureStore } from '@reduxjs/toolkit';
import {type} from "@testing-library/user-event/dist/type";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware();
    },
});

export default store;

