const initialState = {
    posts: []
    ,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_POST_SUCCESS':
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case 'UPDATE_POST_SUCCESS':
            const updatedPosts = state.posts.map((post) =>
                post.id === action.payload.id ? action.payload : post
            );
            return {
                ...state,
                posts: updatedPosts,
            };
        case 'DELETE_POST_SUCCESS':
            const filteredPosts = state.posts.filter(
                (post) => post.id !== action.payload.id
            );
            return {
                ...state,
                posts: filteredPosts,
            };
        default:
            return state;
    }
};

export default postReducer;