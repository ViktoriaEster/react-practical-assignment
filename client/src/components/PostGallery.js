import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsByPage, filterPostsByKeyword } from '../actions/postActions';
import Post from './Post';

const PostGallery = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);

    // Функция для получения постов по номеру страницы
    const fetchPostsByPage = (pageNumber) => {
        dispatch(getPostsByPage(pageNumber))
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    };

    useEffect(() => {
        fetchPostsByPage(1);
    }, []);

    // Обработчик поиска постов
    const handleSearch = () => {
        dispatch(filterPostsByKeyword(searchTerm))
            .then(filteredPosts => setPosts(filteredPosts))
            .catch(error => console.error('Error filtering posts:', error));
    };

    return (
        <div>
            <h2>Gallery of posts</h2>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Posts..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="post-gallery">
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostGallery;
