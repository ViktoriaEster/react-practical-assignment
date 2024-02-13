
export const addComment = (commentData) => {
    return {
        type: 'ADD_COMMENT',
        payload: commentData
    };
};

export const deleteComment = (commentId) => {
    return {
        type: 'DELETE_COMMENT',
        payload: commentId
    };
};
