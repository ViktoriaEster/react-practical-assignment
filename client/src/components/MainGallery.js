import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostCard from './Post';

const MainGallery = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(() => {
        // Загрузка постов при монтировании компонента
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleSearch = (keyword) => {
        // Фильтрация постов по ключевому слову
        const filtered = posts.filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()));
        setFilteredPosts(filtered);
    };

    return (
        <div className="main-gallery">
            {/* Поле для поиска */}
            <input
                type="text"
                placeholder="Search posts..."
                onChange={(e) => handleSearch(e.target.value)}
            />

            {/* Галерея постов */}
            <div className="post-gallery">
                {filteredPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default MainGallery;