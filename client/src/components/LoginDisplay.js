import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';

const LoginDisplay = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (username.trim() === '') {
            alert('Please enter your username.');
            return;
        }
        dispatch(loginUser(username));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginDisplay;