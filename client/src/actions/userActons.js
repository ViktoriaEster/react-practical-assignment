
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Action Creators
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const login = (username) => async (dispatch) => {
    try {
        // Perform authentication logic (call API, etc.)
        // For simplicity, let's assume the authentication is successful, and we receive user data
        const userData = { username }; // Replace this with actual user data from your authentication logic

        dispatch(loginSuccess(userData));
    } catch (error) {
        console.error('Error during login:', error.message);
    }
};

export const logout = () => async (dispatch) => {
    try {
        // Perform logout logic (clear session, etc.)
        // For simplicity, let's assume the logout is successful
        dispatch(logoutSuccess());
    } catch (error) {
        console.error('Error during logout:', error.message);
    }
};