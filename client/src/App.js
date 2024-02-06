import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/common/Header";
import PostList from "./components/PostList";
import Post from "./components/Post";
import './App.css';
import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        // TEST API, it might be removed
        fetch('http://localhost:8080/live')
            .then(res => res.json())
            .then(res => {
                console.log('API CONNECTION IS OK');
            })
            .catch(e => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'));
    }, []);

return (
    <div className="App">
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/post/:postId" element={<Post />} />
                </Routes>
            </div>
        </Router>

    </div>
);
}


export default App;
