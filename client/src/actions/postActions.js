import * as api from '../constants/api';

export const createPost = (postData) => (dispatch) => {
    fetch(api.MAIN_URL + 'post/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create post');
            }
            return response.json();
        })
        .then(createdPost => {
            dispatch({ type: 'CREATE_POST_SUCCESS', payload: createdPost });
        })
        .catch(error => {
            console.error('Error creating post:', error);
        });
};

export const updatePost = (postId, updatedData) => (dispatch) => {
    fetch(api.MAIN_URL + `post/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update post');
            }
            return response.json();
        })
        .then(updatedPost => {
            dispatch({ type: 'UPDATE_POST_SUCCESS', payload: updatedPost });
        })
        .catch(error => {
            console.error('Error updating post:', error);
        });
};

export const filterPostsByKeyword = (keyword) => (dispatch) => {
    fetch(api.MAIN_URL + `post/search/${keyword}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to filter posts');
            }
            return response.json();
        })
        .then(filteredPosts => {
            dispatch({ type: 'FILTER_POSTS_SUCCESS', payload: filteredPosts });
        })
        .catch(error => {
            console.error('Error filtering posts:', error);
        });
};

export const getPostsByPage = (pageNumber) => (dispatch) => {
    fetch(api.MAIN_URL + `post/page/${pageNumber}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return response.json();
        })
        .then(postsData => {
            dispatch({ type: 'GET_POSTS_SUCCESS', payload: postsData });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
};

export const deletePost = (postId) => (dispatch) => {
    fetch(api.MAIN_URL + `post/${postId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete post');
            }
            return postId;
        })
        .then(postId => {
            dispatch({ type: 'DELETE_POST_SUCCESS', payload: postId });
        })
        .catch(error => {
            console.error('Error deleting post:', error);
        });
};
