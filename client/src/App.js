import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginDisplay from './components/LoginDisplay';
import PostGallery from "./components/PostGallery";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './actions/authActions';
import Post from "./components/Post";
import PostComments from "./components/PostComments";
import PostModal from "./components/PostModal";

function App() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    useEffect(() => {
        // TEST API, it might be removed
        fetch('http://localhost:8080/live')
            .then(res => res.json())
            .then(res => {
                console.log('API CONNECTION IS OK');
            })
            .catch(e => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'));
    }, []);


    const handleLogin = (username) => {
        dispatch(loginUser(username));
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={currentUser ?
                            <div>
                                <PostGallery />
                            </div>
                        : <LoginDisplay onLogin={handleLogin} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
