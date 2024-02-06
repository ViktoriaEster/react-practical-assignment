import * as api from '../constants/api';
import {CREATE_COMMENT, DELETE_COMMENT, UPDATE_COMMENT} from "../constants/api";

// Action Creators
export const createComment = (comment) => ({
    type: CREATE_COMMENT,
    payload: comment,
});

export const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    payload: comment,
});

export const deleteCommentAction = (commentId) => ({
    type: DELETE_COMMENT,
    payload: commentId,
});

// Async Actions
export const createCommentAsync = (text, postId, username) => async (dispatch) => {
    try {
        const response = await fetch(api.CREATE_COMMENT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, postId, username }),
        });

        const data = await response.json();
        dispatch(createComment(data));
    } catch (error) {
        console.error('Error creating comment:', error);
    }
};

export const updateCommentAsync = (commentId, text, likes, dislikes) => async (dispatch) => {
    try {
        const response = await fetch(api.UPDATE_COMMENT(commentId), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, likes, dislikes }),
        });

        const data = await response.json();
        dispatch(updateComment(data));
    } catch (error) {
        console.error('Error updating comment:', error);
    }
};

export const deleteCommentAsync = (commentId) => async (dispatch) => {
    try {
        const response = await fetch(api.DELETE_COMMENT(commentId), {
            method: 'DELETE',
        });

        const data = await response.json();
        dispatch(deleteCommentAction(data.id));
    } catch (error) {
        console.error('Error deleting comment:', error);
    }
};

// Like/Dislike Actions
export const commentLike = (commentId, userId) => async (dispatch) => {
    try {
        const currentComment = await fetch(api.GET_COMMENT(commentId));
        const { likes, dislikes } = await currentComment.json();

        likes.push(userId);

        await dispatch(updateCommentAsync(commentId, currentComment.text, likes, dislikes));
    } catch (error) {
        console.error('Error liking comment:', error);
    }
};

export const commentDislike = (commentId, userId) => async (dispatch) => {
    try {
        const currentComment = await fetch(api.GET_COMMENT(commentId));
        const { likes, dislikes } = await currentComment.json();

        dislikes.push(userId);

        await dispatch(updateCommentAsync(commentId, currentComment.text, likes, dislikes));
    } catch (error) {
        console.error('Error disliking comment:', error);
    }
};