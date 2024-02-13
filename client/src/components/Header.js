import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions'; // Импортируем экшен для выхода из системы

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    const handleLogout = () => {
        dispatch(logoutUser()); // Вызываем экшен для выхода из системы
    };

    return (
        <div className="header">
            <div className="user-info">
                {currentUser ? (
                    <p>
                        <span> Welcome, {currentUser}!</span>
                        <button onClick={handleLogout}>Logout</button>
                    </p>
                ) : (
                    <Link to="/login"/>
                    )}
            </div>
        </div>
    );
};

export default Header;
