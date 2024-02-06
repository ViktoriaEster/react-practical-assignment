import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer,
    user: userReducer,
});

export default rootReducer;