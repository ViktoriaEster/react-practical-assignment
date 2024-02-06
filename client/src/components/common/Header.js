import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActons';

const Header = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    // Получаем состояние auth из Redux store
    const authState = useSelector(state => state.auth);

    // Проверяем, существует ли свойство 'user' в authState
    const user = authState && authState.user;

    const handleLogout = () => {
        dispatch(logout());
        history('/login');
    };

    return (
        <div className="header">
            <div className="user-info">
                {user ? (
                    <p>
                        <span>Welcome, {user.username}!</span>
                        <button onClick={handleLogout}>Logout</button>
                    </p>
                ) : (
                    <span>Not logged in</span>
                )}
            </div>
        </div>
    );
};

export default Header;
