import * as api from '../constants/api.js';
import {CREATE_POST} from "../constants/api.js";
import * as actionTypes from "../constants/api";



export const filterPostsByKeyword = (keyword) => async (dispatch) => {
    try {
        const response = await fetch(api.FILTER_POSTS_BY_KEYWORD(keyword));
        const data = await response.json();

        dispatch({
            type: actionTypes.FILTER_POSTS_BY_KEYWORD,
            payload: data,
        });
    } catch (error) {
        console.error('Error filtering posts by keyword:', error);
    }
};

export const createPost = (postData) => async (dispatch) => {
    try {
        const response = await fetch(CREATE_POST, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error('Failed to create post');
        }

        const createdPost = await response.json();
        dispatch({ type: 'CREATE_POST_SUCCESS', payload: createdPost });
    } catch (error) {
        console.error('Error creating post:', error);
    }
};

export const getPostsByPage = (pageNumber) => async (dispatch) => {
    try {
        const response = await fetch(api.GET_POSTS_BY_PAGE(pageNumber));
        if (!response.ok) {
            throw new Error('error getting posts');
        }

        const data = await response.json();
        dispatch({ type: 'GET_POSTS', payload: data });
    } catch (error) {
        console.error('error:', error.message);
    }
};

export const likePost = (postId) => async (dispatch) => {
    try {
        const response = await fetch(api.GET_POST(postId));
        if (!response.ok) {
            throw new Error('Ошибка при получении поста для лайка');
        }

        const post = await response.json();

        // Получаем текущий массив лайков и добавляем нового пользователя
        const updatedLikes = [...post.likes, 'exampleUsername']; // Замените 'exampleUsername' на актуальное имя пользователя

        const updateResponse = await fetch(api.UPDATE_POST(postId), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ likes: updatedLikes, dislikes: post.dislikes }),
        });

        if (!updateResponse.ok) {
            throw new Error('Ошибка при лайке поста');
        }

        const updatedData = await updateResponse.json();
        dispatch({ type: 'LIKE_POST', payload: updatedData });
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
};

export const dislikePost = (postId) => async (dispatch) => {
    try {
        const response = await fetch(api.GET_POST(postId));
        if (!response.ok) {
            throw new Error('Ошибка при получении поста для дизлайка');
        }

        const post = await response.json();

        const updatedDislikes = [...post.dislikes, 'exampleUsername'];

        const updateResponse = await fetch(api.UPDATE_POST(postId), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ likes: post.likes, dislikes: updatedDislikes }),
        });

        if (!updateResponse.ok) {
            throw new Error('Ошибка при дизлайке поста');
        }

        const updatedData = await updateResponse.json();
        dispatch({ type: 'DISLIKE_POST', payload: updatedData });
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
};

export const addCommentToPost = (postId, comment) => async (dispatch) => {
    try {
        const response = await fetch(api.CREATE_COMMENT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: comment }),
        });

        if (!response.ok) {
            throw new Error('error commenting post');
        }

        const data = await response.json();
        dispatch({ type: 'ADD_COMMENT', payload: { postId, comment: data } });
    } catch (error) {
        console.error('error:', error.message);
    }
};

export const editPost = (postId, updatedData) => async (dispatch) => {
    try {
        const response = await fetch(api.UPDATE_POST(postId), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error('error editing post');
        }

        const data = await response.json();
        dispatch({ type: 'EDIT_POST', payload: data });
    } catch (error) {
        console.error('error:', error.message);
    }
};

export const deletePost = (postId) => async (dispatch) => {
    try {
        const response = await fetch(api.DELETE_POST(postId), { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('error deleting post');
        }

        const data = await response.json();
        dispatch({ type: 'DELETE_POST', payload: data });
    } catch (error) {
        console.error('error:', error.message);
    }
};




