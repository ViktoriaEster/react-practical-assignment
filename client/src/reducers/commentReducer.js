const initialState = {
    comments: [],
    // другие поля состояния, если нужны
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT_SUCCESS':
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };
        case 'UPDATE_COMMENT_SUCCESS':
            // Обновление комментария в массиве
            const updatedComments = state.comments.map((comment) =>
                comment.id === action.payload.id ? action.payload : comment
            );
            return {
                ...state,
                comments: updatedComments,
            };
        case 'DELETE_COMMENT_SUCCESS':
            // Удаление комментария из массива
            const filteredComments = state.comments.filter(
                (comment) => comment.id !== action.payload.id
            );
            return {
                ...state,
                comments: filteredComments,
            };
        // Другие кейсы для других экшенов
        default:
            return state;
    }
};

export default commentReducer;