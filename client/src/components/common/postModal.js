import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, editPost, uploadPostPictureAsync } from '../../actions/postActions';

const PostModal = ({ isOpen, handleClose, isEdit, post }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post?.title || '');
    const [image, setImage] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleAddEditPost = () => {
        if (isEdit) {
            dispatch(editPost(post.id, { title }));
        } else {
            dispatch(createPost({ title }));
        }

        if (image) {
            dispatch(uploadPostPictureAsync(post.id, image));
        }

        handleClose();
    };

    return (
        <div className={`post-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <label>Title:</label>
                <input type="text" value={title} onChange={handleTitleChange} />

                <label>Image:</label>
                <input type="file" accept="image/*" onChange={handleImageChange} />

                <div className="modal-actions">
                    <button onClick={handleAddEditPost}>{isEdit ? 'Edit' : 'Add'}</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default PostModal;