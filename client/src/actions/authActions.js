export const loginUser = (username) => {
    return {
        type: 'LOGIN_USER',
        payload: username
    };
};

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    };
};