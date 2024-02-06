import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment, updateCommentAsync } from '../../actions/commentAction';

const CommentModal = ({ isOpen, handleClose, isEdit, comment }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState(comment?.text || '');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleAddEditComment = () => {
        if (isEdit) {
            dispatch(updateCommentAsync(comment.id, { text }));
        } else {
            dispatch(createComment({ text }));
        }
        handleClose();
    };

    return (
        <div className={`comment-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <label>Text:</label>
                <textarea value={text} onChange={handleTextChange} />

                <div className="modal-actions">
                    <button onClick={handleAddEditComment}>{isEdit ? 'Edit' : 'Add'}</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;