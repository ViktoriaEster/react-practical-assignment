import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer,
    user: authReducer,
});

export default rootReducer;