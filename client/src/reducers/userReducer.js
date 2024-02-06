const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                currentUser: action.payload,
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
};

export default userReducer;