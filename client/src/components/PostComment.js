import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentLike, commentDislike, deleteCommentAsync, updateCommentAsync } from '../actions/commentAction';

const PostComment = ({ comment, userId, loggedInUser }) => {
    const dispatch = useDispatch();
    const [isEditing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.text);

    const handleLike = () => {
        dispatch(commentLike(comment.id, userId));
    };

    const handleDislike = () => {
        dispatch(commentDislike(comment.id, userId));
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSaveEdit = () => {
        dispatch(updateCommentAsync(comment.id, editedText, comment.likes, comment.dislikes));
        setEditing(false);
    };

    const handleCancelEdit = () => {
        setEditedText(comment.text);
        setEditing(false);
    };

    const handleDelete = () => {
        dispatch(deleteCommentAsync(comment.id));
    };

    return (
        <div className="post-comment">
            <p className="comment-text">{isEditing ? <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)} /> : comment.text}</p>
            <div className="comment-actions">
                <button onClick={handleLike} disabled={comment.likes.includes(userId)}>
                    Like
                </button>
                <button onClick={handleDislike} disabled={comment.dislikes.includes(userId)}>
                    Dislike
                </button>
                {loggedInUser === comment.username && (
                    <>
                        {isEditing ? (
                            <>
                                <button onClick={handleSaveEdit}>Save</button>
                                <button onClick={handleCancelEdit}>Cancel</button>
                            </>
                        ) : (
                            <button onClick={handleEdit}>Edit</button>
                        )}
                        <button onClick={handleDelete}>Delete</button>
                    </>
                )}
            </div>
            <p className="comment-info">Likes: {comment.likes.length - comment.dislikes.length}</p>
            <p className="comment-date">{comment.date}</p>
        </div>
    );
};

export default PostComment;