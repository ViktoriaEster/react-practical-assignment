import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, dislikePost, deletePost } from '../actions/postActions';
import PostComment from './PostComment';
import  './styles/postCard.css';

const Post = ({ post }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const [isCommentsVisible, setCommentsVisible] = useState(false);

    const handleLike = () => {
        dispatch(likePost(post.id));
    };

    const handleDislike = () => {
        dispatch(dislikePost(post.id));
    };

    const handleDelete = () => {
        dispatch(deletePost(post.id));
    };

    const toggleComments = () => {
        setCommentsVisible(!isCommentsVisible);
    };

    return (
        <div className="post">
            <div className="post-info">
                <div className="post-title">{post.title}</div>
                <div className="post-author">Author: {post.username}</div>
                <div className="post-votes">Votes: {post.likes.length - post.dislikes.length}</div>
                <div className="post-timestamp">Timestamp: {post.date}</div>
            </div>

            <img src={post.imageSrc} alt="Post" className="post-image" />

            <div className="post-actions">
                <button onClick={handleLike}>Like</button>
                <button onClick={handleDislike}>Dislike</button>
                {user && user.username === post.username && (
                    <>
                        <button onClick={toggleComments}>
                            {isCommentsVisible ? 'Hide Comments' : 'Show Comments'}
                        </button>
                        <button onClick={handleDelete} disabled={user.username !== post.username}>
                            Delete Post
                        </button>
                    </>
                )}
            </div>

            {isCommentsVisible && (
                <div className="post-comments">
                    {post.comments.map(comment => (
                        <PostComment key={comment.id} comment={comment} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Post;